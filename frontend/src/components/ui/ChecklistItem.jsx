import React from 'react'
import { CheckCheck } from 'lucide-react'
import { cn } from '../../lib/utils'

export const ChecklistItem = React.forwardRef(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "flex items-center gap-[8px] group cursor-pointer select-none",
        className
      )}
      {...props}
    >
      <CheckCheck className="w-[24px] h-[24px] text-secondary shrink-0" />
      <span 
        className="font-sans text-[18px] leading-snug text-muted font-normal group-hover:text-ink group-hover:font-medium transition-all duration-200"
      >
        {children}
      </span>
    </div>
  )
})

ChecklistItem.displayName = 'ChecklistItem'

export default ChecklistItem
