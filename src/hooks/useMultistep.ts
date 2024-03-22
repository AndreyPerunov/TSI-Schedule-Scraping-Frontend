"use client"
import { useState, ReactElement, cloneElement } from "react"

export default function useMultistep(steps: ReactElement[]) {
  const [stepIndex, setStepIndex] = useState(0)

  function next() {
    setStepIndex(prev => {
      if (prev >= steps.length - 1) return prev
      return prev + 1
    })
  }

  function back() {
    setStepIndex(prev => {
      if (prev <= 0) return prev
      return prev - 1
    })
  }

  function goTo(index: number) {
    setStepIndex(index)
  }

  const step = cloneElement(steps[stepIndex], { next, ...steps[stepIndex].props })

  return {
    stepIndex,
    step,
    steps
  }
}
