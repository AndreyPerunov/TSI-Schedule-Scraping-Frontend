import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type AuthState = {
  isAuth: boolean
  googleEmail: string
  googleName: string
  googlePicture: string
  role: "student" | "teacher" | ""
  group: string
  name: string
  iat: number
  exp: number
}

const initialState: AuthState = {
  isAuth: false,
  googleEmail: "",
  googleName: "",
  googlePicture: "",
  role: "",
  group: "",
  name: "",
  iat: 0,
  exp: 0
}

export const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: state => {
      // Reset state
      state.isAuth = false
      state.googleEmail = ""
      state.googleName = ""
      state.googlePicture = ""
      state.role = ""
      state.group = ""
      state.name = ""
      state.iat = 0
      state.exp = 0
    },
    login: (state, action: PayloadAction<AuthState>) => {
      // Updating state
      state.isAuth = true
      state.googleEmail = action.payload.googleEmail
      state.googleName = action.payload.googleName
      state.googlePicture = action.payload.googlePicture
      state.role = action.payload.role
      state.group = action.payload.group
      state.name = action.payload.name
      state.iat = action.payload.iat
      state.exp = action.payload.exp
    }
  }
})

export const { logout, login } = auth.actions
export default auth.reducer
