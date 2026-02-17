# Job Portal Setup Guide

## Overview
This job portal system consists of:
- **Admin Panel** (`admin.amenityforge.com`): Post jobs and manage applications
- **Public Job Board** (`jobs.amenityforge.com`): View jobs and apply

## Setup Instructions

### 1. Environment Variables
Create a `.env.local` file in the root directory:

```env
MONGO_URI=mongodb+srv://amenity:forge2025@cluster0.eiramxt.mongodb.net/CRM?appName=Cluster0
```

### 2. Admin Login Credentials
- **Email:** amenityforge@gmail.com
- **Password:** Amenityjobs@2026

### 3. Subdomain Configuration
Make sure you've added DNS records in Vercel:
- `admin.amenityforge.com` → CNAME → `cname.vercel-dns.com`
- `jobs.amenityforge.com` → CNAME → `cname.vercel-dns.com`

Then add both domains in Vercel Dashboard → Settings → Domains

### 4. File Uploads
- Resume uploads are saved to `public/uploads/` directory
- **Note:** For production on Vercel, consider using cloud storage (AWS S3, Cloudinary) as Vercel doesn't support persistent file storage
- Currently falls back to base64 storage in database if file system write fails

### 5. Database Collections
The system uses MongoDB with these collections:
- `jobs` - Job postings
- `applications` - Job applications
- `admin` - Admin users (optional, currently using hardcoded credentials)

## Features

### Admin Panel (`/admin/dashboard`)
- Post new jobs
- Edit/Delete jobs
- Toggle job active/inactive status
- View all applications
- Update application status (pending, reviewed, shortlisted, rejected)
- Download resumes

### Public Job Board (`/jobs`)
- View all active job postings
- Filter by location, type, department
- Apply for jobs with:
  - Full Name (required)
  - Email (required)
  - Phone (required)
  - Location (optional)
  - Resume upload - PDF, PNG, or JPEG (required, max 5MB)
  - Cover Letter (optional)

## API Routes

### Authentication
- `POST /api/admin/login` - Admin login
- `POST /api/admin/logout` - Admin logout

### Jobs
- `GET /api/jobs` - Get all jobs (public) or all jobs (admin)
- `GET /api/jobs?active=true` - Get only active jobs
- `POST /api/jobs` - Create job (admin only)
- `GET /api/jobs/[id]` - Get single job
- `PUT /api/jobs/[id]` - Update job (admin only)
- `DELETE /api/jobs/[id]` - Delete job (admin only)

### Applications
- `GET /api/applications` - Get all applications (admin only)
- `GET /api/applications?jobId=[id]` - Get applications for specific job
- `POST /api/applications` - Submit application (public)
- `PUT /api/applications/[id]` - Update application status (admin only)

## Development

1. Install dependencies:
```bash
npm install
```

2. Create `.env.local` with MongoDB URI

3. Run development server:
```bash
npm run dev
```

4. Access:
- Admin: http://localhost:3000/admin/login
- Jobs: http://localhost:3000/jobs

## Production Considerations

1. **File Storage**: Implement cloud storage (S3, Cloudinary) for resume uploads
2. **Authentication**: Consider implementing proper session management with NextAuth
3. **Security**: Add rate limiting, input sanitization, and CSRF protection
4. **Email Notifications**: Add email notifications for new applications
5. **Search**: Add job search and filtering functionality
6. **Analytics**: Track job views and application rates

## Troubleshooting

### Subdomain not working?
- Check DNS propagation: https://dnschecker.org
- Verify DNS records in Vercel dashboard
- Ensure domains are added in Vercel project settings

### MongoDB connection issues?
- Verify MONGO_URI in `.env.local`
- Check MongoDB Atlas IP whitelist (should allow all IPs for development)
- Verify database name matches in connection string

### File uploads not working?
- Check `public/uploads` directory exists
- For Vercel, implement cloud storage solution
- Check file size limits (currently 5MB)
