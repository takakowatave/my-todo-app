import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
export const supabase = createClient('https://xyujuzkkiifzsmaoostv.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh5dWp1emtraWlmenNtYW9vc3R2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc3ODA0NzIsImV4cCI6MjA1MzM1NjQ3Mn0.mnfBwJkcMHVvHwK0jDZ7vJ1hhS-1XjzNAsklrJZoEtE');

