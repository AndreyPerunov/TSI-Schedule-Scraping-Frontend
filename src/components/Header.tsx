import Image from "next/image"
import { Split, Wrapper } from "../layouts"
import { Navbar, MobileNavbar } from "./index"
import Link from "next/link"
import type { ILink } from "../types"

const links: ILink[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Terms", href: "/terms" },
  { name: "Privacy", href: "/privacy" },
  { name: "Author", href: "https://www.andreyperunov.com/", external: true }
]

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-primary to-secondary py-3">
      <Wrapper>
        <Split>
          <Link className="flex items-center" href="/">
            <Image className="size-9 mr-3" src="/logo.png" width={40} height={40} alt="Logo" />
            <span className="font-bold text-white text-sm truncate">TSI Schedule Scraper</span>
          </Link>
          <div className="flex items-center">
            <Navbar links={links} className="hidden md:flex" />
            <MobileNavbar links={links} className="block md:hidden" />
          </div>
        </Split>
      </Wrapper>
    </header>
  )
}
