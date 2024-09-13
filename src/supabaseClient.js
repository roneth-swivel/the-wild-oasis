// supabaseClient.js
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://qpdaokefcxkjoptafoat.supabase.co";
const supabaseKey = "qpdaokefcxkjoptafoat";
export const supabase = createClient(supabaseUrl, supabaseKey);
