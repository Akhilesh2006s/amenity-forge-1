import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone()
  const hostname = request.headers.get('host') || ''
  
  // Extract subdomain (e.g., "admin" from "admin.amenityforge.com")
  const subdomain = hostname.split('.')[0]
  
  // Route admin subdomain to /admin pages
  if (subdomain === 'admin' && hostname.includes('amenityforge.com')) {
    // If accessing root, go to admin login
    if (url.pathname === '/') {
      url.pathname = '/admin/login'
      return NextResponse.rewrite(url)
    }
    // If accessing /login, go to admin login
    if (url.pathname === '/login') {
      url.pathname = '/admin/login'
      return NextResponse.rewrite(url)
    }
    // If accessing /dashboard, go to admin dashboard
    if (url.pathname === '/dashboard') {
      url.pathname = '/admin/dashboard'
      return NextResponse.rewrite(url)
    }
    // If path already starts with /admin, just pass through
    if (url.pathname.startsWith('/admin')) {
      return NextResponse.next()
    }
    // Otherwise, rewrite to /admin/* routes
    url.pathname = `/admin${url.pathname}`
    return NextResponse.rewrite(url)
  }
  
  // Route jobs subdomain to /jobs pages
  if (subdomain === 'jobs' && hostname.includes('amenityforge.com')) {
    if (url.pathname === '/') {
      url.pathname = '/jobs'
      return NextResponse.rewrite(url)
    }
    if (url.pathname.startsWith('/jobs')) {
      return NextResponse.next()
    }
    // APIs and files in /public must not be prefixed with /jobs
    if (url.pathname.startsWith('/api')) {
      return NextResponse.next()
    }
    if (
      url.pathname.startsWith('/_next') ||
      /\.(svg|png|jpg|jpeg|gif|webp|ico|woff2?|glb)$/i.test(url.pathname)
    ) {
      return NextResponse.next()
    }
    url.pathname = `/jobs${url.pathname}`
    return NextResponse.rewrite(url)
  }
  
  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|logo.svg|logo1.jpg).*)',
  ],
}
