"use client"
import type { ILink } from "../types"
import { ModalSidebar } from "../layouts"
import { useState } from "react"
import Link from "next/link"
import { FaExternalLinkAlt } from "react-icons/fa"
import LinkButton from "./LinkButton"
import { useAppSelector } from "@/hooks"
import Image from "next/image"
import { IoMdSettings } from "react-icons/io"

export default function MobileNavbar({ links, className, ...props }: { links: ILink[]; className?: string }) {
  const [open, setOpen] = useState(false)
  const { isAuth, googleName, googlePicture } = useAppSelector(state => state.authReducer)

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
            {isAuth ? (
              <>
                <div className="flex items-center">
                  <span className="font-semibold items-center text-white ml-5">Welcome, {googleName || "User"}!</span>

                  <Link href="/profile" className="text-sm ml-2 active:text-dark hover:underline active">
                    <div className="bg-white bg-opacity-0 rounded-full size-11 flex justify-center items-center transition-all duration-200 hover:rotate-180 hover:bg-opacity-20">
                      <IoMdSettings className="inline text-white text-2xl" />
                    </div>
                  </Link>
                  <Image src={googlePicture} width={50} height={50} alt="Profile" className="ml-2 rounded-full size-11" />
                </div>
                <LinkButton href="/logout" className="mb-4 mt-4" hollow={true}>
                  Log Out
                </LinkButton>
                <LinkButton href="/dashboard" className="mb-4">
                  Dashboard
                </LinkButton>
              </>
            ) : (
              <>
                <LinkButton href="/login" className="mb-4 mt-4" hollow={true}>
                  Sign In
                </LinkButton>
                <LinkButton href="/signup" className="mb-4">
                  Get Started
                </LinkButton>
              </>
            )}
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
