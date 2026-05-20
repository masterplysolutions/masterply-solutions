import React from 'react'
import { cn } from '../../lib/utils'

export const Eyebrow = React.forwardRef(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "inline-flex items-center gap-[6px] text-ink hover:text-secondary transition-colors duration-200 cursor-pointer select-none",
        className
      )}
      {...props}
    >
      <span className="w-[13px] h-[2px] bg-current shrink-0 transition-colors duration-200" />
      <span className="font-sans text-[12px] font-medium tracking-[0.2px] uppercase transition-colors duration-200">
        {children}
      </span>
    </div>
  )
})

Eyebrow.displayName = 'Eyebrow'

export default Eyebrow
