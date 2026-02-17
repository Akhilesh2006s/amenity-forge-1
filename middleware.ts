import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone()
  const hostname = request.headers.get('host') || ''
  
  // Extract subdomain (e.g., "admin" from "admin.amenityforge.com")
  const subdomain = hostname.split('.')[0]
  
  // Route admin subdomain to /admin pages
  if (subdomain === 'admin' && hostname.includes('amenityforge.com')) {
    // If accessing root, go to login
    if (url.pathname === '/') {
      url.pathname = '/admin/login'
      return NextResponse.rewrite(url)
    }
    // Otherwise, rewrite to /admin/* routes
    if (!url.pathname.startsWith('/admin')) {
      url.pathname = `/admin${url.pathname}`
      return NextResponse.rewrite(url)
    }
    return NextResponse.next()
  }
  
  // Route jobs subdomain to /jobs pages
  if (subdomain === 'jobs' && hostname.includes('amenityforge.com')) {
    if (url.pathname === '/') {
      url.pathname = '/jobs'
      return NextResponse.rewrite(url)
    }
    if (!url.pathname.startsWith('/jobs')) {
      url.pathname = `/jobs${url.pathname}`
      return NextResponse.rewrite(url)
    }
    return NextResponse.next()
  }
  
  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|logo1.jpg).*)',
  ],
}
