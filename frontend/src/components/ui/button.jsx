import React from 'react'
import { cn } from '../../lib/utils'

export const Button = React.forwardRef(({ className, variant = 'primary', as: Component = 'button', ...props }, ref) => {
  const ComponentToRender = props.href ? 'a' : Component
  return (
    <ComponentToRender
      ref={ref}
      className={cn(
        'inline-flex items-center justify-center font-sans font-semibold tracking-wide transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary disabled:pointer-events-none disabled:opacity-50 px-8 py-3 text-sm cursor-pointer h-12 rounded-none gap-2 select-none',
        variant === 'primary' && 'bg-secondary text-ink hover:bg-secondary-700 hover:text-secondary-50 active:scale-[0.98]',
        variant === 'secondary' && 'bg-secondary-100 text-secondary-500 hover:bg-secondary-500 hover:text-on-secondary active:scale-[0.98]',
        variant === 'outline' && 'border border-hairline bg-transparent hover:bg-surface-soft text-ink active:scale-[0.98]',
        className
      )}
      {...props}
    />
  )
})

Button.displayName = 'Button'

export default Button

