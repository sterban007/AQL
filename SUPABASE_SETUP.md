# Supabase Setup Guide for Contact Form

This guide will help you set up Supabase to store contact form submissions.

## Step 1: Create a Supabase Project

1. Go to [https://supabase.com](https://supabase.com) and sign up/login
2. Click "New Project"
3. Fill in the project details:
   - **Name**: Choose a project name (e.g., "sirius-website")
   - **Database Password**: Create a strong password
   - **Region**: Choose the closest region to your users
4. Click "Create new project" and wait for setup to complete

## Step 2: Create the Contacts Table

1. In your Supabase dashboard, go to the **SQL Editor** (left sidebar)
2. Click "New query"
3. Paste the following SQL and click "Run":

```sql
-- Create contacts table
CREATE TABLE contacts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  position TEXT,
  country TEXT NOT NULL,
  city TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security (RLS)
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;

-- Create a policy to allow anyone to insert contacts
CREATE POLICY "Anyone can insert contacts"
  ON contacts
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Create a policy to allow authenticated users to view contacts (optional)
CREATE POLICY "Authenticated users can view contacts"
  ON contacts
  FOR SELECTconst { error } = await supabase
  .from('contacts')
  .insert({
    first_name: formData.firstName,
    last_name: formData.lastName,
    email: formData.email,
    position: formData.position || null, // Handle null case
    country: formData.country,
    city: formData.city
  });
const { error } = await supabase
  .from('contacts')
  .insert({
    first_name: formData.firstName,
    last_name: formData.lastName,
    email: formData.email,
    position: formData.position || null, // Handle null case
    country: formData.country,
    city: formData.city
  });

  TO authenticated
  USING (true);
```

## Step 3: Get Your API Keys

1. Go to **Settings** → **API** (in the left sidebar)
2. You'll find two important values:
   - **Project URL** (e.g., `https://xxxxxxxxxxxxx.supabase.co`)
   - **anon/public key** (this is safe to use in your frontend)

## Step 4: Configure Environment Variables

1. In your project root, create a `.env` file:

```bash
VITE_SUPABASE_URL=your_project_url_here
VITE_SUPABASE_ANON_KEY=your_anon_key_here
```

2. Replace the placeholder values with your actual Supabase credentials

**Important**: Never commit the `.env` file to version control. It's already in `.gitignore`.

## Step 5: Test the Integration

1. Start your development server:
```bash
npm run dev
```

2. Navigate to the Contact page
3. Fill out the form and submit
4. Check your Supabase dashboard:
   - Go to **Table Editor** → **contacts**
   - You should see your submitted data!

## Database Schema

The `contacts` table has the following structure:

| Column       | Type      | Nullable | Description                    |
|--------------|-----------|----------|--------------------------------|
| id           | UUID      | No       | Primary key (auto-generated)   |
| first_name   | TEXT      | No       | Contact's first name           |
| last_name    | TEXT      | No       | Contact's last name            |
| email        | TEXT      | No       | Contact's email address        |
| position     | TEXT      | Yes      | Contact's job position         |
| country      | TEXT      | No       | Selected country               |
| city         | TEXT      | No       | Selected city                  |
| created_at   | TIMESTAMP | No       | Submission timestamp           |

## Security Notes

- Row Level Security (RLS) is enabled on the table
- The public can only INSERT data (submit forms)
- Only authenticated users can view the data
- The anon key is safe to use in the frontend

## Viewing Submissions

To view contact form submissions:

1. Log into your Supabase dashboard
2. Go to **Table Editor** → **contacts**
3. You'll see all submissions with timestamps

You can also export the data as CSV from the table editor.

## Optional: Email Notifications

To receive email notifications when someone submits the form, you can set up a Database Webhook or Edge Function in Supabase. Check the [Supabase documentation](https://supabase.com/docs) for more details.

## Troubleshooting

### Error: "Failed to submit"
- Check that your `.env` file has the correct credentials
- Verify the table name is exactly `contacts` (lowercase)
- Ensure RLS policies are set up correctly

### No data appearing in Supabase
- Open the browser console to see detailed error messages
- Verify your Supabase project is active and not paused
- Check that the anon key has INSERT permissions

### CORS errors
- This shouldn't happen with Supabase, but if it does, check your project's API settings

## Need Help?

- [Supabase Documentation](https://supabase.com/docs)
- [Supabase Discord Community](https://discord.supabase.com)
