import type { ILink } from "../types"
import Link from "next/link"

export default function Navbar({ links, className, ...props }: { links: ILink[]; className?: string }) {
  return (
    <nav className={className} {...props}>
      {links.map(link => {
        return (
          <>
            <Link key={link.href} href={link.href} className={`text-sm text-white pl-7 active:text-dark hover:underline active`}>
              {link.name}
            </Link>
          </>
        )
      })}
    </nav>
  )
}
