export default function Button({ children, onClick, className, hollow, icon, disabled, loading, ...props }: { children: React.ReactNode; onClick: () => void; className?: string; hollow?: boolean; icon?: React.ReactNode; disabled?: boolean; loading?: boolean }) {
  let styles = "px-7 py-3.5 font-semibold rounded-lg transition-colors duration-300 "
  if (hollow) styles += "border-2 border-primary text-primary hover:bg-primary hover:text-white active:text-dark"
  else styles += "bg-primary text-white hover:bg-dark hover:text-primary active:text-white"
  if (disabled) styles += " cursor-not-allowed opacity-50"
  if (loading) styles += " cursor-wait opacity-50"
  return (
    <button type="button" onClick={onClick} className={styles + " " + className} {...props} disabled={disabled || loading}>
      {icon}
      {children}
    </button>
  )
}
