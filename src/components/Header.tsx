import Image from "next/image"
import { Split, Wrapper } from "../layouts"
import { Navbar, MobileNavbar } from "./index"
import type { ILink } from "../types"

const links: ILink[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Reviews", href: "/reviews" },
  { name: "Author", href: "https://www.andreyperunov.com/" }
]

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-primary to-secondary py-3">
      <Wrapper>
        <Split>
          <div className="flex items-center">
            <Image className="size-9 mr-3" src="/logo.png" width={40} height={40} alt="Logo" />
            <span className="font-bold text-white text-sm">TSI Schedule Scraper</span>
          </div>
          <div className="flex items-center">
            <Navbar links={links} className="hidden md:block" />
            <MobileNavbar links={links} className="block md:hidden" />
          </div>
        </Split>
      </Wrapper>
    </header>
  )
}

//
