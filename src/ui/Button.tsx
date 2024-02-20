export default function Button({ children, className, ...props }: { children: React.ReactNode; className?: string }) {
  return (
    <button className={`bg-primary text-white font-semibold px-7 py-3.5 rounded-lg hover:bg-dark hover:text-primary focus-within:bg-dark focus-within:text-primary active:text-white ${className}`} {...props}>
      {children}
    </button>
  )
}
