"use client"
import type { ILink } from "../types"
import { ModalSidebar } from "../layouts"
import { useState } from "react"

export default function MobileNavbar({ links, className, ...props }: { links: ILink[]; className?: string }) {
  const [open, setOpen] = useState(false)

  return (
    <div className={`${className}`} {...props} onClick={() => setOpen(true)}>
      <div>
        <div className="w-7 h-1 rounded bg-white mb-1"></div>
        <div className="w-7 h-1 rounded bg-white mb-1"></div>
        <div className="w-7 h-1 rounded bg-white"></div>
      </div>
      {open && <ModalSidebar onClose={() => setOpen(false)}>test</ModalSidebar>}
    </div>
  )
}
