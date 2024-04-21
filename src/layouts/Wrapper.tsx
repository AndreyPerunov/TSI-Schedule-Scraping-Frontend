export default function Wrapper({ children, className, ...props }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={className + " px-8 md:px-20"} {...props}>
      {children}
    </div>
  )
}
