"use client"
import type { ILink } from "../types"
import Link from "next/link"
import { FaExternalLinkAlt } from "react-icons/fa"
import { IoMdSettings } from "react-icons/io"
import Image from "next/image"
import { HeaderButton } from "@/components"
import { useAppSelector } from "@/hooks"

export default function Navbar({ links, className, ...props }: { links: ILink[]; className?: string }) {
  const { isAuth, googleName, googlePicture } = useAppSelector(state => state.authReducer)

  return (
    <nav className={className} {...props}>
      {links.map(link => {
        return (
          <Link key={link.href} href={link.href} className="flex justify-center items-center text-sm text-white ml-7 active:text-dark hover:underline active">
            {link.name}
            {link.external && <FaExternalLinkAlt className="inline ml-1" />}
          </Link>
        )
      })}
      {isAuth ? (
        <>
          <HeaderButton href={["/logout", "/dashboard"]}>
            <span>Log Out</span>
            <span>Dashboard</span>
          </HeaderButton>
          <span className="flex justify-center font-semibold items-center text-white ml-5">Welcome, {googleName || "User"}!</span>

          <Link href="/profile" className="flex justify-center items-center text-sm ml-2 active:text-dark hover:underline active">
            <div className="bg-white bg-opacity-0 rounded-full size-11 flex justify-center items-center transition-all duration-200 hover:rotate-180 hover:bg-opacity-20">
              <IoMdSettings className="inline text-white text-2xl" />
            </div>
          </Link>
          <Image src={googlePicture} width={50} height={50} alt="Profile" className="ml-2 rounded-full size-11" />
        </>
      ) : (
        <HeaderButton href={["/login", "/signup"]}>
          <span>Sign In</span>
          <span>Get Started</span>
        </HeaderButton>
      )}
    </nav>
  )
}
