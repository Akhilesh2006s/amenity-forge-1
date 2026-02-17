# Fixing 404 Errors for Subdomains in Vercel

## Problem
You're seeing `404: NOT_FOUND` and `DEPLOYMENT_NOT_FOUND` errors when accessing:
- `admin.amenityforge.com`
- `jobs.amenityforge.com`

This means Vercel doesn't recognize these subdomains yet.

## Solution: Add Subdomains in Vercel

### Step 1: Add Domains in Vercel Dashboard

1. **Go to Vercel Dashboard:**
   - Visit: https://vercel.com
   - Select your project: **amenity-forge-1**

2. **Navigate to Domain Settings:**
   - Click **Settings** (top navigation)
   - Click **Domains** (left sidebar)

3. **Add Admin Subdomain:**
   - Click **Add** or **Add Domain** button
   - Enter: `admin.amenityforge.com`
   - Click **Add**
   - Wait for verification (usually instant)

4. **Add Jobs Subdomain:**
   - Click **Add** again
   - Enter: `jobs.amenityforge.com`
   - Click **Add**
   - Wait for verification

### Step 2: Verify DNS Records

Make sure you've added the DNS records in Vercel (as we did earlier):

**In Vercel → Settings → Domains → DNS Records:**
- **admin** → CNAME → `cname.vercel-dns.com`
- **jobs** → CNAME → `cname.vercel-dns.com`

### Step 3: Check Domain Status

After adding domains, you should see:
- ✅ **Valid Configuration** - Domain is ready
- ⚠️ **Invalid Configuration** - DNS not set up yet
- ⏳ **Pending** - Still propagating

### Step 4: Redeploy (if needed)

1. Go to **Deployments** tab
2. Click **⋯** (three dots) on latest deployment
3. Click **Redeploy**
4. Or push a new commit

## Quick Checklist

- [ ] Added `admin.amenityforge.com` in Vercel → Settings → Domains
- [ ] Added `jobs.amenityforge.com` in Vercel → Settings → Domains
- [ ] DNS records are configured (admin and jobs CNAME records)
- [ ] Domains show "Valid Configuration" status
- [ ] Latest deployment is successful

## Troubleshooting

### Still seeing 404?

1. **Check DNS Propagation:**
   - Visit: https://dnschecker.org
   - Check: `admin.amenityforge.com` and `jobs.amenityforge.com`
   - Should show green checkmarks globally

2. **Verify in Vercel:**
   - Go to Settings → Domains
   - Make sure both subdomains are listed
   - Check their status (should be "Valid Configuration")

3. **Clear Browser Cache:**
   - Hard refresh: `Ctrl + Shift + R` (Windows) or `Cmd + Shift + R` (Mac)
   - Or try incognito/private mode

4. **Wait for Propagation:**
   - DNS changes can take 5-60 minutes
   - Sometimes up to 24 hours in rare cases

### Domain shows "Invalid Configuration"?

1. Check DNS records are correct:
   - Type: CNAME
   - Name: admin (or jobs)
   - Value: cname.vercel-dns.com

2. Make sure you're adding DNS records in **Vercel**, not your domain registrar
   - Vercel → Settings → Domains → Click on `amenityforge.com` → DNS Records

### Still not working?

1. Try accessing via main domain first:
   - `amenityforge.com/admin/login` (should work)
   - `amenityforge.com/jobs` (should work)

2. If main domain works but subdomains don't:
   - The issue is DNS/domain configuration, not code
   - Double-check Vercel domain settings

3. Contact Vercel support if domains are added but still not working after 24 hours
