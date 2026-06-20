import { createBrowserClient } from "@supabase/auth-helpers-nextjs";

console.log("URL:", process.env.NEXT_PUBLIC_SUPABASE_URL);
console.log(
  "KEY:",
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? "FOUND" : "MISSING"
);

export const supabase = createBrowserClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);