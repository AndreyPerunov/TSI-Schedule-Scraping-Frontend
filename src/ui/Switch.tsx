"use client"
import { useSwitch } from "@/hooks"
import { useEffect } from "react"

export default function Switch({ options, onChange, className, ...props }: { options: [option1: string, option2: string]; onChange: (option: string) => void; className?: string }) {
  const [option1, option2] = options
  const [option, changeOption] = useSwitch(option1, option2)

  useEffect(() => {
    onChange(option)
  }, [option])

  function handleKeyPress(e: React.KeyboardEvent<HTMLDivElement>) {
    if (e.key === "Enter") {
      changeOption()
    }
    if (e.key === "ArrowRight" && option === option1) {
      changeOption()
    }
    if (e.key === "ArrowLeft" && option === option2) {
      changeOption()
    }
  }

  function handleClick1() {
    option === option2 && changeOption()
  }

  function handleClick2() {
    option === option1 && changeOption()
  }

  return (
    <div className={`relative mt-10 flex justify-center items-center border-[3px] rounded-lg border-primary ${className}`} {...props} tabIndex={0} onKeyDown={handleKeyPress}>
      <div className={`capitalize select-none text-nowrap font-semibold z-10 px-7 py-3 transition-colors duration-150 ${option === option1 ? "text-white" : "text-primary hover:text-dark cursor-pointer"}`} onClick={handleClick1}>
        {option1}
      </div>
      <div className={`capitalize select-none text-nowrap text-primary z-10 font-semibold px-7 py-3 transition-colors duration-150 ${option === option2 ? "text-white" : "text-primary hover:text-dark cursor-pointer"}`} onClick={handleClick2}>
        {option2}
      </div>
      <div className={`bg-primary absolute h-full w-1/2 transition-all duration-500 ease-in-out ${option === option1 ? "rounded-l-sm rounded-r-lg left-0" : "rounded-l-lg rounded-r-sm left-1/2"}`}></div>
    </div>
  )
}
