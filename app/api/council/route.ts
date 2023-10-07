import { createRouteHandlerClient,createServerComponentClient,createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'
import OpenAI from "openai";
import {  } from '@supabase/auth-helpers-nextjs'

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
    await Promise.all(obj);
    console.log(reqData.members)
    return NextResponse.json({ data: reqData.members }, { status: 200 })
  } catch (error) {
    console.log(error.message)
    return NextResponse.json({ error: "Error Occurred Processing Query" }, { status: 500 })
  }    
}

/*



*/