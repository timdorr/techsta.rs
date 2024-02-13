import { NextRequest, NextResponse } from 'next/server'

export const config = {
  matcher: [
    /*
     * Match all paths except for:
     * 1. /api routes
     * 2. /_next (Next.js internals)
     * 3. /_static (inside /public)
     * 4. all root files inside /public (e.g. /favicon.ico)
     */
    '/((?!api/|_next/|_static/|_vercel|[\\w-]+\\.\\w+).*)'
  ]
}

export function middleware(request: NextRequest) {
  const url = request.nextUrl
  const hostname = request.headers.get('host')!

  const searchParams = url.searchParams.toString()
  const path = `${url.pathname}${
    searchParams.length > 0 ? `?${searchParams}` : ''
  }`

  let base = ''
  if (hostname.startsWith('atlanta.')) base = 'atlanta'

  return NextResponse.rewrite(
    new URL(`/${base}${path == '/' ? '' : path}`, request.url)
  )
}
