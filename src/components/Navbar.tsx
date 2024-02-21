"use client"
import type { ILink } from "../types"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Navbar({ links }: { links: ILink[] }) {
  const pathname = usePathname()
  return (
    <div className="flex items-center">
      {links.map(link => {
        const isActive = pathname.startsWith(link.href)
        return (
          <Link key={link.href} href={link.href} className={`text-sm text-white pl-7 active:text-dark hover:underline active ${isActive && "font-bold"}`}>
            {link.name}
          </Link>
        )
      })}
    </div>
  )
}
