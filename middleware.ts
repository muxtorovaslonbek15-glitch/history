import { NextResponse, type NextRequest } from 'next/server'

// Auth/signup is disabled in this deployment.
// The original middleware refreshed a Supabase session on every request, which
// crashed when the Supabase env vars were missing. It is now a pass-through.
export async function middleware(request: NextRequest) {
  return NextResponse.next({ request })
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}
