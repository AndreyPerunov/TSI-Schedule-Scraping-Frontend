import type { ILink } from "../types"

export default function Navbar({ links }: { links: ILink[] }) {
  return (
    <div className="flex items-center">
      {links.map(link => {
        return (
          <a key={link.href} href={link.href}>
            {link.name}
          </a>
        )
      })}
    </div>
  )
}
