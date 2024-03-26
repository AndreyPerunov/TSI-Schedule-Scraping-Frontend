import Link from "next/link"

export default function LinkButton({ children, href, hollow, className, ...props }: { children: React.ReactNode; href: string; hollow?: boolean; className?: string }) {
  return (
    <Link href={href} className={`${className} text-nowrap border-[3px] text-center rounded-lg border-white text-lg font-semibold pl-8 pr-9 py-2.5 transition-colors duration-300 ${hollow ? "text-white hover:text-primary hover:bg-white active:text-dark" : "bg-white text-primary active:text-white hover:bg-dark hover:border-dark"}`} {...props}>
      {children}
    </Link>
  )
}
