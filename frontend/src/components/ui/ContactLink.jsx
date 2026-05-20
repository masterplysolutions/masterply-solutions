import React from 'react'
import { cn } from '../../lib/utils'

export const ContactLink = React.forwardRef(({ className, icon: Icon, text, href, ...props }, ref) => {
  const Component = href ? 'a' : 'div'
  
  return (
    <Component
      ref={ref}
      href={href}
      className={cn(
        'flex items-center gap-[16px] group transition-colors duration-300 outline-none',
        href && 'cursor-pointer',
        className
      )}
      {...props}
    >
      {Icon && (
        <Icon className="w-[24px] h-[24px] text-secondary flex-shrink-0" />
      )}
      <span className="font-sans font-normal text-[18px] leading-none text-zinc-500 group-hover:text-secondary transition-colors duration-300">
        {text}
      </span>
    </Component>
  )
})

ContactLink.displayName = 'ContactLink'

export default ContactLink
