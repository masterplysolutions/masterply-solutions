import React from 'react'
import { cn } from '../../lib/utils'
import { CalendarPlus } from 'lucide-react'

export const FeatureCard = React.forwardRef(({
  className,
  title,
  description,
  icon: IconComponent = CalendarPlus,
  href,
  forceHover = false,
  ...props
}, ref) => {
  const Component = href ? 'a' : 'div'
  return (
    <Component
      ref={ref}
      href={href || undefined}
      aria-label={title}
      className={cn(
        "group relative flex flex-col gap-6 items-start w-full bg-[#f3f4f8] border-l-4 border-solid pl-11 pr-10 py-10 transition-all duration-300 rounded-none",
        href && "cursor-pointer",
        !href && "cursor-default",
        forceHover 
          ? "border-[#c89b3d] shadow-md" 
          : "border-[#18213c] hover:border-[#c89b3d] hover:shadow-md",
        className
      )}
      {...props}
    >
      {/* Icon */}
      <div className="text-[#18213c] shrink-0">
        <IconComponent className="w-6 h-6 stroke-[1.5]" />
      </div>

      {/* Text Content Container */}
      <div className="flex flex-col gap-4 items-start w-full">
        {/* Title with hover color transition (from gold to navy) */}
        <h4 className={cn(
          "font-sans font-semibold text-[20px] leading-7 tracking-[-0.6px] transition-colors duration-300",
          forceHover 
            ? "text-[#18213c]" 
            : "text-[#c89b3d] group-hover:text-[#18213c]"
        )}>
          {title}
        </h4>

        {/* Description */}
        {description && (
          <p className="font-sans font-normal text-[14px] leading-5 text-[#575e70]">
            {description}
          </p>
        )}
      </div>
    </Component>
  )
})

FeatureCard.displayName = 'FeatureCard'

export default FeatureCard
