"use client"
import { useState } from "react"

export default function useToggle(initialState: boolean): [boolean, () => void] {
  const [value, setValue] = useState(initialState)

  function toggle(): void {
    setValue(prev => !prev)
  }

  return [value, toggle]
}
