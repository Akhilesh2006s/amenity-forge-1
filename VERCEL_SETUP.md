# Vercel Deployment Setup Guide

## Fixing the MongoDB Connection Error

The build is failing because the `MONGO_URI` environment variable is not set in Vercel.

### Step 1: Add Environment Variable in Vercel

1. Go to your Vercel project dashboard: https://vercel.com
2. Select your project: **amenity-forge-1**
3. Go to **Settings** → **Environment Variables**
4. Click **Add New**
5. Add the following:
   - **Name:** `MONGO_URI`
   - **Value:** `mongodb+srv://amenity:forge2025@cluster0.eiramxt.mongodb.net/CRM?appName=Cluster0`
   - **Environment:** Select all (Production, Preview, Development)
6. Click **Save**

### Step 2: Redeploy

After adding the environment variable:

1. Go to **Deployments** tab
2. Click the **⋯** (three dots) on the latest deployment
3. Click **Redeploy**
4. Or push a new commit to trigger a new deployment

### Step 3: Verify MongoDB Atlas Access

Make sure your MongoDB Atlas cluster allows connections from:
- **IP Access List:** Add `0.0.0.0/0` (all IPs) for development, or add Vercel's IP ranges
- **Database User:** Verify the user `amenity` with password `forge2025` exists and has proper permissions

### Alternative: Using Vercel CLI

You can also add the environment variable using Vercel CLI:

```bash
vercel env add MONGO_URI
# When prompted, paste: mongodb+srv://amenity:forge2025@cluster0.eiramxt.mongodb.net/CRM?appName=Cluster0
# Select all environments
```

Then redeploy:
```bash
vercel --prod
```

## Environment Variables Checklist

Make sure these are set in Vercel:

- ✅ `MONGO_URI` - MongoDB connection string (REQUIRED)
- ⚠️ `GOOGLE_SERVICE_ACCOUNT_EMAIL` - Google service account email (for resume uploads to Drive)
- ⚠️ `GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY` - Google service account private key (use multiline, replace `\n` with actual newlines)
- ⚠️ `GOOGLE_DRIVE_FOLDER_ID` - Google Drive folder ID (e.g. `1YL9cZO_T8izQSAcJ5bPMhClui85r7Nuu`)
- ⚠️ `WEB3FORMS_ACCESS_KEY` - For contact form (optional)
- ⚠️ `WEB3FORMS_SALES_ACCESS_KEY` - For sales registration form (optional)

## Troubleshooting

### Build still failing?
1. Check that the environment variable is set for **all environments** (Production, Preview, Development)
2. Verify the MongoDB URI is correct (no extra spaces or quotes)
3. Check MongoDB Atlas network access settings
4. Look at the build logs for any other errors

### Connection errors after deployment?
1. Verify MongoDB Atlas IP whitelist includes Vercel's IPs (or use `0.0.0.0/0` for all)
2. Check database user permissions
3. Verify the database name in the connection string matches your Atlas database
