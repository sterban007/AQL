# Vercel Deployment Guide

This guide will help you deploy your React + Vite + Supabase application to Vercel.

## Prerequisites

- A Vercel account (sign up at https://vercel.com)
- Your project pushed to a Git repository (GitHub, GitLab, or Bitbucket)
- Supabase project URL and Anon Key

## Deployment Steps

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Push your code to Git**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-repository-url>
   git push -u origin main
   ```

2. **Import to Vercel**
   - Go to https://vercel.com/new
   - Click "Import Project"
   - Select your Git repository
   - Vercel will auto-detect the Vite framework

3. **Configure Environment Variables**
   - In the Vercel project settings, go to "Environment Variables"
   - Add the following variables:
     - `VITE_SUPABASE_URL` = Your Supabase project URL
     - `VITE_SUPABASE_ANON_KEY` = Your Supabase anon key
   - These values can be found in your Supabase project settings:
     https://app.supabase.com/project/_/settings/api

4. **Deploy**
   - Click "Deploy"
   - Vercel will build and deploy your application
   - You'll get a unique URL for your deployment

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```

   Follow the prompts to:
   - Link to an existing project or create a new one
   - Configure your project settings

4. **Set Environment Variables**
   ```bash
   vercel env add VITE_SUPABASE_URL
   vercel env add VITE_SUPABASE_ANON_KEY
   ```

5. **Deploy to Production**
   ```bash
   vercel --prod
   ```

## Project Configuration

The following files have been configured for Vercel deployment:

### vercel.json
Configures the build settings and routing for your application:
- Build command: `npm run build`
- Output directory: `dist`
- Rewrites all routes to `index.html` for client-side routing

### .vercelignore
Excludes unnecessary files from deployment:
- `node_modules`
- `.env` files
- Editor configurations
- Log files

## Environment Variables

Make sure to add these environment variables in your Vercel project settings:

| Variable | Description | Where to find |
|----------|-------------|---------------|
| `VITE_SUPABASE_URL` | Your Supabase project URL | Supabase Dashboard > Settings > API |
| `VITE_SUPABASE_ANON_KEY` | Your Supabase anonymous key | Supabase Dashboard > Settings > API |

## Automatic Deployments

Once connected to Git:
- Every push to the `main` branch triggers a production deployment
- Pull requests get preview deployments automatically
- You can configure branch deployments in Vercel project settings

## Custom Domain (Optional)

1. Go to your Vercel project settings
2. Navigate to "Domains"
3. Add your custom domain
4. Follow the DNS configuration instructions

## Troubleshooting

### Build Fails
- Check that all dependencies are in `package.json`
- Verify TypeScript compilation works locally: `npm run build`
- Check Vercel build logs for specific errors

### Environment Variables Not Working
- Ensure variables are prefixed with `VITE_`
- Redeploy after adding/changing environment variables
- Check that variables are set for the correct environment (Production/Preview/Development)

### Routing Issues
- The `vercel.json` rewrites configuration handles client-side routing
- All routes should redirect to `index.html` for React Router to work

## Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
- [Supabase Documentation](https://supabase.com/docs)

## Support

If you encounter issues:
1. Check Vercel deployment logs
2. Review the Vercel community forum: https://github.com/vercel/vercel/discussions
3. Check Supabase logs if database issues occur
