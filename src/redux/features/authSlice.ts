import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type AuthState = {
  isAuth: boolean
  googleEmail: string
  googleName: string
  googlePicture: string
  role: string
  group: string
  name: string
  accessToken: string
  refreshToken: string
}

const googleEmail = localStorage.getItem("googleEmail") || ""
const googleName = localStorage.getItem("googleName") || ""
const googlePicture = localStorage.getItem("googlePicture") || ""
const role = localStorage.getItem("role") || ""
const group = localStorage.getItem("group") || ""
const name = localStorage.getItem("name") || ""
const accessToken = localStorage.getItem("accessToken") || ""
const refreshToken = localStorage.getItem("refreshToken") || ""

const initialState: AuthState = {
  isAuth: !!accessToken,
  googleEmail: googleEmail,
  googleName: googleName,
  googlePicture: googlePicture,
  role: role,
  group: group,
  name: name,
  accessToken: accessToken,
  refreshToken: refreshToken
}

export const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: state => {
      // Removing user from local storage
      localStorage.removeItem("googleEmail")
      localStorage.removeItem("googleName")
      localStorage.removeItem("googlePicture")
      localStorage.removeItem("role")
      localStorage.removeItem("group")
      localStorage.removeItem("name")
      localStorage.removeItem("accessToken")
      localStorage.removeItem("refreshToken")
      // Reset state
      state.isAuth = false
      state.googleEmail = ""
      state.googleName = ""
      state.googlePicture = ""
      state.role = ""
      state.group = ""
      state.name = ""
      state.accessToken = ""
      state.refreshToken = ""
    },
    login: (state, action: PayloadAction<AuthState>) => {
      // Saving user to local storage
      localStorage.setItem("googleEmail", action.payload.googleEmail)
      localStorage.setItem("googleName", action.payload.googleName)
      localStorage.setItem("googlePicture", action.payload.googlePicture)
      localStorage.setItem("role", action.payload.role)
      localStorage.setItem("group", action.payload.group)
      localStorage.setItem("name", action.payload.name)
      localStorage.setItem("accessToken", action.payload.accessToken)
      localStorage.setItem("refreshToken", action.payload.refreshToken)

      // Updating state
      state.isAuth = true
      state.googleEmail = action.payload.googleEmail
      state.googleName = action.payload.googleName
      state.googlePicture = action.payload.googlePicture
      state.role = action.payload.role
      state.group = action.payload.group
      state.name = action.payload.name
      state.accessToken = action.payload.accessToken
      state.refreshToken = action.payload.refreshToken
    }
  }
})

export const { logout, login } = auth.actions
export default auth.reducer
