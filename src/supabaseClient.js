import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database 
const supabaseUrl = 'https://pznlsdobwghrqfzoeeed.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB6bmxzZG9id2docnFmem9lZWVkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDU0ODM4MDYsImV4cCI6MTk2MTA1OTgwNn0.pxsVY7CfPf-rYhu9TDdYxSm6_0WIuKjdYANGB9Q_AZc'
export const supabase = createClient(supabaseUrl, supabaseKey);
