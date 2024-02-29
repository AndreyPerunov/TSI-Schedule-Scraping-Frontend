import type { ILink } from "../types"
import Link from "next/link"
import { FaExternalLinkAlt } from "react-icons/fa"

export default function Navbar({ links, className, ...props }: { links: ILink[]; className?: string }) {
  return (
    <nav className={className} {...props}>
      {links.map(link => {
        return (
          <>
            <Link key={link.href} href={link.href} className={`text-sm text-white pl-7 active:text-dark hover:underline active`}>
              {link.name}
              {link.external && <FaExternalLinkAlt className="inline ml-1 translate-y-[-1px]" />}
            </Link>
          </>
        )
      })}
    </nav>
  )
}
