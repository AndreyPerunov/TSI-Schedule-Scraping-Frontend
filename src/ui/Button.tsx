export default function Button({ children, onClick, className, hollow, icon, disabled, ...props }: { children: React.ReactNode; onClick: () => void; className?: string; hollow?: boolean; icon?: React.ReactNode; disabled?: boolean }) {
  let styles = "px-7 py-3.5 font-semibold rounded-lg transition-colors duration-300 "
  if (hollow) styles += "border-2 border-primary text-primary hover:bg-primary hover:text-white active:text-dark"
  else styles += "bg-primary text-white hover:bg-dark hover:text-primary active:text-white disabled:opacity-50 disabled:cursor-not-allowed"

  return (
    <button type="button" onClick={onClick} className={styles + " " + className} {...props} disabled={disabled}>
      {icon}
      {children}
    </button>
  )
}
