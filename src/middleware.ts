import { NextRequest, NextResponse } from "next/server"

export async function middleware(request: NextRequest) {
  const session = request.cookies.get("session")
  console.log("session", session?.value)

  let user
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_ENDPOINT}/api/user`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Cookie: `session=${session?.value}`
      }
    })
    user = await response.json()
  } catch (error) {
    console.error(error)
    return NextResponse.redirect(new URL("/", request.url))
  }
  console.log({ user })

  const isAuthenticated = user.googleEmail ? true : false
  console.log({ isAuthenticated })

  // Protected routes for authenticated users
  const protectedRoutesForAuthenticated = ["/login", "/signup", "/login/error"]
  if (protectedRoutesForAuthenticated.includes(request.nextUrl.pathname) && isAuthenticated) {
    return NextResponse.redirect(new URL("/", request.url))
  }

  // Protected routes for unauthenticated users
  const protectedRoutesForUnauthenticated = ["/dashboard", "/profile", "/profile/update", "/profile/delete"]
  if (protectedRoutesForUnauthenticated.includes(request.nextUrl.pathname) && !isAuthenticated) {
    return NextResponse.redirect(new URL("/login", request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/dashboard", "/login", "/signup", "/login/error"]
}
