"use client"
import type { ILink } from "../types"
import Link from "next/link"
import { FaExternalLinkAlt } from "react-icons/fa"
import { HeaderButton } from "@/components"
import { useAppSelector } from "@/hooks"

export default function Navbar({ links, className, ...props }: { links: ILink[]; className?: string }) {
  const { isAuth } = useAppSelector(state => state.authReducer)

  return (
    <nav className={className} {...props}>
      {links.map(link => {
        return (
          <Link key={link.href} href={link.href} className="flex justify-center	items-center text-sm text-white ml-7 active:text-dark hover:underline active">
            {link.name}
            {link.external && <FaExternalLinkAlt className="inline ml-1" />}
          </Link>
        )
      })}
      {isAuth ? (
        <HeaderButton href={["/logout", "/dashboard"]}>
          <span>Log Out</span>
          <span>Dashboard</span>
        </HeaderButton>
      ) : (
        <HeaderButton href={["/login", "/signup"]}>
          <span>Sign In</span>
          <span>Get Started</span>
        </HeaderButton>
      )}
    </nav>
  )
}
