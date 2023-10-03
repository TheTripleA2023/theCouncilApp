import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'

import type { NextRequest } from 'next/server'

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()
  const supabase = createMiddlewareClient({ req, res })

  const { data: { session }} = await supabase.auth.getSession()
  
  if (!session) {
    // this is a protected route - only users who are signed in can view this route
    const url = req.nextUrl.clone()   
    if (url.pathname === '/'|| url.pathname === "/about" || url.pathname === "/finale" || url.pathname === "/selection") {
      url.pathname = '/login'
      return NextResponse.redirect(url)   
    } 
  }

  return res
}
