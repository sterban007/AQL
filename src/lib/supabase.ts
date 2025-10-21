import { createClient } from '@supabase/supabase-js'

// Get Supabase project credentials from environment variables
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || ''
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || ''

// Log initialization values (will be removed in production)
console.log('Supabase initialization:', { 
  url: supabaseUrl ? 'URL is set' : 'URL is missing',
  key: supabaseAnonKey ? 'Key is set' : 'Key is missing'
})

// Create and export the Supabase client
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: false // This can help with some RLS issues
  }
})
