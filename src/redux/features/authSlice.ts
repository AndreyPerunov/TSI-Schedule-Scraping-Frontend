import { createSlice, createAsyncThunk, Slice } from "@reduxjs/toolkit"
import axios from "axios"
axios.defaults.baseURL = process.env.NEXT_PUBLIC_SERVER_ENDPOINT
axios.defaults.withCredentials = true

type AuthState = {
  isAuth: boolean
  googleEmail: string
  googleName: string
  googlePicture: string
  role: "student" | "lecturer" | ""
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

export const fetchUserData = createAsyncThunk("auth/fetchUserData", async () => {
  try {
    const response = await axios.get<AuthState>("/api/user")
    return response.data
  } catch (error) {
    throw error
  }
})

export const logoutUser = createAsyncThunk("auth/logoutUser", async () => {
  try {
    await axios.get("/api/user/logout")
  } catch (error) {
    throw error
  }
})

export const auth: Slice<AuthState> = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchUserData.fulfilled, (state, action) => {
      state.isAuth = true
      state.googleEmail = action.payload.googleEmail
      state.googleName = action.payload.googleName
      state.googlePicture = action.payload.googlePicture
      state.role = action.payload.role
      state.group = action.payload.group
      state.name = action.payload.name
      state.iat = action.payload.iat
      state.exp = action.payload.exp
    }),
      builder.addCase(fetchUserData.rejected, state => {
        Object.assign(state, initialState)
      }),
      builder.addCase(logoutUser.fulfilled, state => {
        Object.assign(state, initialState)
      }),
      builder.addCase(logoutUser.rejected, state => {
        Object.assign(state, initialState)
      })
  }
})

export default auth.reducer
