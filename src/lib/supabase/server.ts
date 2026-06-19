import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

/**
 * Cookie-based server Supabase client. Use in Server Components, Route
 * Handlers, and Server Actions. `cookies()` is async in Next.js 15+.
 */
export async function createClient() {
  const cookieStore = await cookies();

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options),
            );
          } catch {
            // `setAll` was called from a Server Component. Safe to ignore
            // when middleware is refreshing user sessions.
          }
        },
      },
    },
  );
}
