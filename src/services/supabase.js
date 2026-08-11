import { createClient } from '@supabase/supabase-js'
export const supabaseUrl = 'https://elpvgfdexutjerqmgafb.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVscHZnZmRleHV0amVycW1nYWZiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODU2NTMzNzAsImV4cCI6MjEwMTIyOTM3MH0.b61YgJcMhu1jAKEsvgb16n3Ap4y6DnapJiVTOZnL2F0'
const supabase = createClient(supabaseUrl, supabaseKey);


export default supabase;