# Fixing 500 Error on jobs.amenityforge.com

## Current Issue
The jobs page is showing but the API call to `/api/jobs?active=true` is returning a 500 error. This is because the MongoDB connection is not configured in Vercel.

## Solution: Add MONGO_URI Environment Variable

### Step 1: Go to Vercel Environment Variables

1. **Open Vercel Dashboard:**
   - Visit: https://vercel.com
   - Select your project: **amenity-forge-1**

2. **Navigate to Environment Variables:**
   - Click **Settings** (top navigation)
   - Click **Environment Variables** (left sidebar)

3. **Add MONGO_URI:**
   - Click **Add New**
   - **Key:** `MONGO_URI`
   - **Value:** `mongodb+srv://amenity:forge2025@cluster0.eiramxt.mongodb.net/CRM?appName=Cluster0`
   - **Environment:** Select **all three** (Production, Preview, Development)
   - Click **Save**

### Step 2: Redeploy

After adding the environment variable:

1. Go to **Deployments** tab
2. Click **⋯** (three dots) on the latest deployment
3. Click **Redeploy**
4. Wait for deployment to complete

### Step 3: Verify

After redeployment:
- Visit: `jobs.amenityforge.com`
- The 500 error should be gone
- If no jobs are posted, you'll see "No Open Positions" (which is correct)

## Why This Happens

The API routes need to connect to MongoDB to fetch jobs. Without the `MONGO_URI` environment variable:
- The connection fails
- API returns 500 error
- Page shows "No Open Positions" (graceful fallback)

## After Adding MONGO_URI

Once `MONGO_URI` is added and you redeploy:
- ✅ API calls will work
- ✅ Jobs will load from database
- ✅ Admin can post jobs
- ✅ Applications will be saved

## Quick Checklist

- [ ] Added `MONGO_URI` in Vercel → Settings → Environment Variables
- [ ] Added `GOOGLE_SERVICE_ACCOUNT_EMAIL` (for Drive uploads)
- [ ] Added `GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY` (from service account JSON, with real newlines)
- [ ] Added `GOOGLE_DRIVE_FOLDER_ID` = `1YL9cZO_T8izQSAcJ5bPMhClui85r7Nuu`
- [ ] Selected all environments (Production, Preview, Development)
- [ ] Redeployed the project
- [ ] Verified `jobs.amenityforge.com` loads without 500 errors
- [ ] Verified resume links open Google Drive files
- [ ] Tested `admin.amenityforge.com` login works

## Still Seeing 500?

1. **Check Environment Variable:**
   - Make sure it's added for **all environments**
   - Verify the value is correct (no extra spaces)
   - Check it's named exactly `MONGO_URI` (case-sensitive)

2. **Check MongoDB Atlas:**
   - Verify IP whitelist allows all IPs: `0.0.0.0/0`
   - Check database user `amenity` exists
   - Verify password is correct

3. **Check Deployment Logs:**
   - Go to Vercel → Deployments → Latest deployment → Logs
   - Look for MongoDB connection errors
   - Check if environment variable is being read

4. **Hard Refresh:**
   - Clear browser cache
   - Try incognito/private mode
   - Wait a few minutes for changes to propagate
