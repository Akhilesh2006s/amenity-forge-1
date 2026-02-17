# Subdomain Setup Guide for Amenity Forge

## Option 1: If Using Vercel (Recommended for Next.js)

### Step 1: Add Subdomain in Vercel Dashboard
1. Go to https://vercel.com and log in
2. Select your project (Amenity Forge)
3. Go to **Settings** → **Domains**
4. Click **Add Domain**
5. Enter your subdomain: `jobs.amenityforge.com` (or any subdomain you want)
6. Click **Add**

### Step 2: Configure DNS Records
Go to your domain registrar (where you bought amenityforge.com) and add:

**For Vercel:**
- **Type:** CNAME
- **Name:** jobs (or your subdomain name)
- **Value:** cname.vercel-dns.com
- **TTL:** 3600 (or Auto)

**OR if your registrar doesn't support CNAME at root:**
- **Type:** A
- **Name:** jobs
- **Value:** 76.76.21.21 (Vercel's IP - check Vercel dashboard for current IP)

### Step 3: Wait for DNS Propagation
- Usually takes 5-60 minutes
- Check status in Vercel dashboard (should show "Valid Configuration")

---

## Option 2: If Using Other Hosting (cPanel, AWS, etc.)

### Step 1: Add DNS Record
In your domain's DNS settings, add:

**For most hosting:**
- **Type:** A Record
- **Name:** jobs (or your subdomain)
- **Value:** Your server's IP address
- **TTL:** 3600

**OR if using Cloudflare/CDN:**
- **Type:** CNAME
- **Name:** jobs
- **Value:** amenityforge.com (or your main domain)
- **Proxy:** Enabled (orange cloud)

### Step 2: Configure Server/Hosting
- **cPanel:** Go to Subdomains → Create `jobs.amenityforge.com` → Point to your Next.js app folder
- **AWS/Cloud:** Configure Route 53 or your DNS service
- **Other:** Follow your hosting provider's subdomain setup guide

---

## Option 3: Next.js Middleware for Subdomain Routing (Optional)

If you want different content on subdomains, add this middleware:

### Create: `middleware.ts` in root directory

```typescript
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone()
  const hostname = request.headers.get('host') || ''
  
  // Check if it's a subdomain (e.g., jobs.amenityforge.com)
  const subdomain = hostname.split('.')[0]
  
  // If subdomain is 'jobs', redirect to /jobs page
  if (subdomain === 'jobs' && hostname.includes('amenityforge.com')) {
    url.pathname = '/jobs'
    return NextResponse.rewrite(url)
  }
  
  // Add more subdomains as needed
  if (subdomain === 'careers' && hostname.includes('amenityforge.com')) {
    url.pathname = '/careers'
    return NextResponse.rewrite(url)
  }
  
  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
```

---

## Quick Setup Checklist

### DNS Configuration (At Your Domain Registrar)
- [ ] Log in to your domain registrar (GoDaddy, Namecheap, Cloudflare, etc.)
- [ ] Go to DNS Management
- [ ] Add new record:
  - **Type:** CNAME (or A if CNAME not supported)
  - **Name:** jobs
  - **Value:** Your hosting provider's target (see above)
- [ ] Save changes
- [ ] Wait 5-60 minutes for propagation

### Hosting Configuration
- [ ] Add subdomain in hosting dashboard (Vercel/Netlify/etc.)
- [ ] Point subdomain to your Next.js app
- [ ] Verify SSL certificate is issued (automatic on Vercel)

### Testing
- [ ] Visit `http://jobs.amenityforge.com` (may take time to propagate)
- [ ] Check SSL: `https://jobs.amenityforge.com`
- [ ] Verify it loads your site

---

## Common Subdomain Examples

- `jobs.amenityforge.com` - Job portal
- `careers.amenityforge.com` - Careers page
- `portal.amenityforge.com` - Employee portal
- `sales.amenityforge.com` - Sales registration
- `blog.amenityforge.com` - Blog
- `shop.amenityforge.com` - E-commerce
- `app.amenityforge.com` - Web app

---

## Troubleshooting

**Subdomain not working?**
1. Check DNS propagation: https://dnschecker.org
2. Verify DNS records are correct
3. Check hosting provider dashboard for errors
4. Wait longer (can take up to 48 hours in rare cases)

**SSL Certificate Issues?**
- Vercel/Netlify: Automatic, wait 5-10 minutes
- Other hosting: May need to manually request SSL

**Need Help?**
- Check your hosting provider's documentation
- Contact your domain registrar support
- Verify DNS settings match hosting requirements
