export default function AnimatedNumber({ children, className, ...props }: { children: string; className?: string }) {
  return (
    <div className={className + " " + "inline-block"} {...props}>
      <span className="text-slate-500/0 tabular-nums absolute z-10">{children}</span>
      {children.split("").map((digit, index) => (
        <span key={index} className="relative inline-block h-9 tabular-nums overflow-hidden">
          {"0123456789".includes(digit) ? <span className="opacity-0">{digit}</span> : <span>{digit}</span>}
          {"0123456789".includes(digit) && (
            <div className={`flex flex-col absolute select-none animate-fromBottomToTop`}>
              {"0123456789"
                .repeat(children.length - index)
                .concat("0123456789".slice(0, Number(digit) + 1))
                .split("")
                .map((d, i) => (
                  <span key={i}>{d}</span>
                ))}
            </div>
          )}
        </span>
      ))}
    </div>
  )
}
