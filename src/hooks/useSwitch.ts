"use client"
import { useState } from "react"

export default function useSwitch<Type>(option1: Type, option2: Type): [Type, () => void] {
  const [value, setValue] = useState(option1)

  function changeOption(): void {
    setValue(prev => (prev === option1 ? option2 : option1))
  }

  return [value, changeOption]
}
