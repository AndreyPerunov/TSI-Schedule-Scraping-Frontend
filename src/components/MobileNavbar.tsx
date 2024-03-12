"use client"
import type { ILink } from "../types"
import { ModalSidebar } from "../layouts"
import { useState } from "react"
import Link from "next/link"
import { FaExternalLinkAlt } from "react-icons/fa"
import LinkButton from "./LinkButton"

export default function MobileNavbar({ links, className, ...props }: { links: ILink[]; className?: string }) {
  const [open, setOpen] = useState(false)

  return (
    <div className={`${className}`} {...props} onClick={() => setOpen(true)}>
      <div>
        <div className="w-7 h-1 rounded bg-white mb-1"></div>
        <div className="w-7 h-1 rounded bg-white mb-1"></div>
        <div className="w-7 h-1 rounded bg-white"></div>
      </div>
      {open && (
        <ModalSidebar onClose={() => setOpen(false)}>
          <div className="flex flex-col">
            <LinkButton href="/login" className="mb-4 mt-4" hollow={true}>
              Sign In
            </LinkButton>
            <LinkButton href="/signup" className="mb-4">
              Get Started
            </LinkButton>
          </div>
          <div className="divide-y-2 divide-white flex flex-col">
            {links.map(link => {
              return (
                <Link key={link.href} href={link.href} className="py-5 w-full text-center text-lg font-semibold text-white active:text-dark hover:underline active">
                  {link.name}
                  {link.external && <FaExternalLinkAlt className="inline ml-1 translate-y-[-1px]" />}
                </Link>
              )
            })}
          </div>
        </ModalSidebar>
      )}
    </div>
  )
}
