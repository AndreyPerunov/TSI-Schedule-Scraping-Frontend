import { NextRequest, NextResponse } from "next/server"

export async function middleware(request: NextRequest) {
  const session = request.cookies.get("session")

  const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_ENDPOINT}/api/user`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Cookie: `session=${session?.value}`
    }
  })
  const user = await response.json()
  const isAuthenticated = user.googleEmail ? true : false

  // Protected routes for authenticated users
  const protectedRoutesForAuthenticated = ["/login", "/signup", "/login/error"]
  if (protectedRoutesForAuthenticated.includes(request.nextUrl.pathname) && isAuthenticated) {
    return NextResponse.redirect(new URL("/", request.url))
  }

  // Protected routes for unauthenticated users
  const protectedRoutesForUnauthenticated = ["/dashboard"]
  if (protectedRoutesForUnauthenticated.includes(request.nextUrl.pathname) && !isAuthenticated) {
    return NextResponse.redirect(new URL("/login", request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/dashboard", "/login", "/signup", "/login/error"]
}
