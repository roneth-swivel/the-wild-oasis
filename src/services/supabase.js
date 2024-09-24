import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://dbshfczpqlpobgrcggtw.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRic2hmY3pwcWxwb2JncmNnZ3R3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjYwMzQ4MzIsImV4cCI6MjA0MTYxMDgzMn0.24A2yXEI7Kq9tVjLGo8zTKKjzNWOlcT5JnKzxSt7f94";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
