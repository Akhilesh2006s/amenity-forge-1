// Copy this file to middleware.ts in the root directory if you want subdomain routing
// This allows jobs.amenityforge.com to show different content than amenityforge.com

import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone()
  const hostname = request.headers.get('host') || ''
  
  // Extract subdomain (e.g., "jobs" from "jobs.amenityforge.com")
  const subdomain = hostname.split('.')[0]
  
  // Route jobs subdomain to /jobs page
  if (subdomain === 'jobs' && hostname.includes('amenityforge.com')) {
    url.pathname = '/jobs'
    return NextResponse.rewrite(url)
  }
  
  // Route careers subdomain to /careers page
  if (subdomain === 'careers' && hostname.includes('amenityforge.com')) {
    url.pathname = '/careers'
    return NextResponse.rewrite(url)
  }
  
  // Route sales subdomain to /salesregistration page
  if (subdomain === 'sales' && hostname.includes('amenityforge.com')) {
    url.pathname = '/salesregistration'
    return NextResponse.rewrite(url)
  }
  
  return NextResponse.next()
}

export const config = {
  matcher: [
    // Match all paths except:
    // - api routes
    // - _next/static (static files)
    // - _next/image (image optimization files)
    // - favicon.ico (favicon file)
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
