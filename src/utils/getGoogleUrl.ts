type LoginData = {
  role: "student" | "teacher"
  group: string
  name: string
}

function getGoogleOAuthUrl({ role, group, name }: LoginData) {
  const rootUrl = "https://accounts.google.com/o/oauth2/v2/auth"

  const options = {
    redirect_uri: process.env.NEXT_PUBLIC_AUTH_REDIRECT_URI as string,
    client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID as string,
    access_type: "offline",
    response_type: "code",
    prompt: "consent",
    scope: ["https://www.googleapis.com/auth/userinfo.email", "https://www.googleapis.com/auth/userinfo.profile", "https://www.googleapis.com/auth/calendar"].join(" "),
    state: JSON.stringify({ role, group, name })
  }

  const qs = new URLSearchParams(options)

  return `${rootUrl}?${qs.toString()}`
}

export default getGoogleOAuthUrl
