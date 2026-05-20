import React from 'react'
import { cn } from '../../lib/utils'
import { Construction } from 'lucide-react'

export const SegmentCard = React.forwardRef(({
  className,
  title,
  description,
  imageSrc,
  icon: IconComponent = Construction,
  href = "#",
  forceHover = false,
  ...props
}, ref) => {
  return (
    <a
      ref={ref}
      href={href}
      aria-label={title}
      className={cn(
        "group relative flex flex-col justify-end w-full aspect-[3/4] min-h-[440px] p-8 overflow-hidden rounded-none transition-all duration-300 hover:shadow-xl cursor-pointer bg-[#100900]",
        forceHover && "shadow-xl",
        className
      )}
      {...props}
    >
      {/* Background and Image Container */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        {/* Image with zoom effect */}
        <div className="absolute inset-0 overflow-hidden">
          {imageSrc ? (
            <img
              src={imageSrc}
              alt=""
              className={cn(
                "absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]",
                forceHover && "scale-[1.06]"
              )}
            />
          ) : (
            <div className="w-full h-full bg-primary-950 flex items-center justify-center text-muted" />
          )}
        </div>
        
        {/* Dark gradient overlay matching Figma perfectly */}
        <div 
          className="absolute inset-0 bg-gradient-to-t from-[#100900] via-[rgba(16,9,0,0.6)] via-[60%] to-transparent transition-opacity duration-300" 
        />
      </div>

      {/* Content Container */}
      <div className="relative flex flex-col gap-4 items-start w-full z-10">
        {/* Icon with hover color transition */}
        <div className={cn(
          "text-[#c89b3d] group-hover:text-white transition-colors duration-300 shrink-0",
          forceHover && "text-white"
        )}>
          <IconComponent className="w-6 h-6 stroke-[1.5]" />
        </div>

        {/* Title with hover color transition */}
        <h4 className={cn(
          "font-sans font-semibold text-[24px] leading-8 text-white tracking-[-0.6px] transition-colors duration-300 group-hover:text-[#c89b3d]",
          forceHover && "text-[#c89b3d]"
        )}>
          {title}
        </h4>

        {/* Description */}
        {description && (
          <p className="font-sans font-normal text-[14px] leading-5 text-[#f4f4f5]">
            {description}
          </p>
        )}
      </div>
    </a>
  )
})

SegmentCard.displayName = 'SegmentCard'

export default SegmentCard
