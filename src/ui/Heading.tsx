export default function Heading({ children, className, ...props }: { children: string; className?: string }) {
  return (
    <h1 className={className + " " + "text-primary text-5xl font-semibold m-0 p-0"} {...props}>
      {children}
    </h1>
  )
}
