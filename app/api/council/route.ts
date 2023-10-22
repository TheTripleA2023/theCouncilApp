import { createRouteHandlerClient,createServerComponentClient,createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'
import OpenAI from "openai";
import {  } from '@supabase/auth-helpers-nextjs'
import { HARD_QUERY_QUOTA } from '@/helpers/global';

export const dynamic = 'force-dynamic'
const model = "gpt-3.5-turbo";

export async function POST(request: Request) {
  const supabase = createRouteHandlerClient({ cookies })
  const { data: { session }} = await supabase.auth.getSession()
  if (!session) {
    // this is a protected route - only users who are signed in can view this route
    console.log("Unauthenticated User Attempted to Access Council API")
    return NextResponse.json({ error: 'Not authorized' }, { status: 401 })
  }

  //Check how many queries User has made todayu
  let date = new Date();
  date.setHours(0,0,0,0)
  const { data, error} = await supabase.from('queries').select().filter('id','eq',session.user.id).gt('created_at',date.toUTCString());
  await supabase.from('queries').insert({id:session.user.id})

  const queryCount = data.length
  if(queryCount >= HARD_QUERY_QUOTA) { 
    return NextResponse.json({ error: "Query Quota Reached" }, { status: 501 })
  }

  try {
    //init OpenAI key
    const openai = new OpenAI({
      apiKey: process.env.REACT_APP_API_KEY,
    });
    
    let reqData = await request.json()
    //Ask the Council and add response to each member's conversation
    const obj = reqData.members.map(async (member) => {
      member.conversation.push({ role: "user", content: reqData.question });

      const verdict = await openai.chat.completions.create({
        messages: [
          { role: "system", content: member.settings },
          ...member.conversation,
        ],
        model: model,
      });

      member.conversation.push({
        role: "assistant",
        content: verdict.choices[0].message.content,
      });
    });
    
    //Wait for all GPT instances to finish
    await Promise.all(obj);

    return NextResponse.json({ data: reqData.members, queryCount:queryCount }, { status: 200 })
    
  } catch (error) {
    return NextResponse.json({ error: "Error Occurred Processing Query" }, { status: 500 })
  }    
}

/*



*/