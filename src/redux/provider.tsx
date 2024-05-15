"use client"

import { store } from "./store"
import { Provider } from "react-redux"

export function ReduxProvider({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <UserDataLoader />
      {children}
    </Provider>
  )
}

import React, { useEffect } from "react"
import { useAppDispatch } from "@/hooks"
import { fetchUserData } from "@/redux/features/authSlice"

export function UserDataLoader() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchUserData())
  }, [dispatch])

  return null // This component doesn't render anything itself
}
