import { createServerClient } from "@supabase/ssr";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {

  // ==========================================
  // SUPABASE AUTH SESSION
  // ==========================================

  let supabaseResponse = NextResponse.next({
    request,
  });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },

        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) => {
            request.cookies.set(name, value);
          });

          supabaseResponse = NextResponse.next({
            request,
          });

          cookiesToSet.forEach(({ name, value, options }) => {
            supabaseResponse.cookies.set(name, value, options);
          });
        },
      },
    }
  );

  // Refresh / validate Supabase session
  await supabase.auth.getClaims();


  // ==========================================
  // EXISTING ADMIN LOGIN PROTECTION
  // ==========================================

  const token = request.cookies.get("admin-auth");

  if (
    request.nextUrl.pathname.startsWith("/admin") &&
    !request.nextUrl.pathname.startsWith("/admin/login")
  ) {

    if (!token || token.value !== "loggedin") {
      return NextResponse.redirect(
        new URL("/admin/login", request.url)
      );
    }
  }


  // ==========================================
  // RETURN RESPONSE
  // ==========================================

  return supabaseResponse;
}


export const config = {
  matcher: [
    /*
     * Run middleware on pages/routes,
     * but skip static files and images.
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};