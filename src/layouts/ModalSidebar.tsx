"use client"
import { useEffect, useState, useCallback } from "react"

export default function ModalSidebar({ children, onClose }: { children: React.ReactNode; onClose: () => void }) {
  const [closing, setClosing] = useState(false)
  const handleClose = useCallback(
    async (e: React.MouseEvent | KeyboardEvent) => {
      e.stopPropagation() // Prevent the click event from propagating to the parent
      setClosing(true)
      await new Promise(resolve => setTimeout(resolve, 210)) // Wait for the animation to finish
      onClose()
    },
    [onClose]
  )

  useEffect(() => {
    const onEscPress = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose(e) // Pass the missing argument to handleClose function
      }
    }
    document.addEventListener("keydown", onEscPress)
    return () => document.removeEventListener("keydown", onEscPress)
  }, [handleClose])

  return (
    <div className={`${closing && "bg-transparent  duration-200 ease-in-out"} animate-darkIn fixed z-10 left-0 top-0 w-full h-full overflow-auto bg-black/50`} onClick={handleClose}>
      <div className={`${closing && "translate-x-full duration-200 ease-in-out"} animate-slideIn absolute z-20 top-0 right-0 bg-primary w-1/2 h-full p-5`} onClick={e => e.stopPropagation()}>
        <div className="relative w-7 h-7 flex items-center justify-center" onClick={handleClose}>
          <div className={`${closing && "rotate-0 duration-100 ease-in-out"} w-7 h-1 rounded bg-white absolute origin-center rotate-[45deg]`}></div>
          <div className={`${closing && "rotate-0 duration-100 ease-in-out"} w-7 h-1 rounded bg-white absolute origin-center rotate-[-45deg]`}></div>
        </div>
        {children}
      </div>
    </div>
  )
}
