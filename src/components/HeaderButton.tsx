import Link from "next/link"

export default function HeaderButton({ children, href, className, ...props }: { children: [React.ReactNode, React.ReactNode]; href: [string, string]; className?: string }) {
  const [Left, Right] = children
  const [LeftHref, RightHref] = href
  return (
    <div className={`ml-7 flex justify-center	items-center ${className}`} {...props}>
      <Link href={LeftHref} className="text-nowrap border-[3px] rounded-lg border-white text-sm text-white font-semibold pl-8 pr-9 py-2.5 hover:bg-dark hover:border-dark hover:text-primary focus-within:text-primary active:text-white">
        {Left}
      </Link>
      <Link href={RightHref} className="text-nowrap ml-[-13px] border-[3px] rounded-lg border-white bg-white text-sm hover:bg-dark hover:border-dark text-primary font-semibold px-7 py-2.5 hover:text-primary focus-within:text-primary active:text-white">
        {Right}
      </Link>
    </div>
  )
}
