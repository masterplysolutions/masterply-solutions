import React from 'react'
import { cn } from '../../lib/utils'

export const TextLink = React.forwardRef(({ className, children, href, active, ...props }, ref) => {
  return (
    <a
      ref={ref}
      href={href}
      className={cn(
        "inline-flex items-center justify-center px-2 py-2 border-b-2 font-sans text-sm font-medium text-ink transition-all duration-200 cursor-pointer select-none",
        active 
          ? "border-secondary-700 text-ink" 
          : "border-transparent hover:border-secondary-700 text-ink/90",
        className
      )}
      {...props}
    >
      <span className="px-1">{children}</span>
    </a>
  )
})

TextLink.displayName = 'TextLink'

export default TextLink
