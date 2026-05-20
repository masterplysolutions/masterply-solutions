import React from 'react'
import { cn } from '../../lib/utils'

export const ServiceCard = React.forwardRef(({
  className,
  title,
  description,
  imageSrc,
  href = "#",
  ...props
}, ref) => {
  return (
    <a
      ref={ref}
      href={href}
      aria-label={title}
      className={cn(
        "group relative flex items-end justify-between w-full aspect-[16/9] md:aspect-[21/9] p-6 md:p-10 overflow-hidden rounded-none transition-all duration-300 hover:shadow-lg cursor-pointer bg-[#100900]",
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
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
            />
          ) : (
            <div className="w-full h-full bg-primary-950 flex items-center justify-center text-muted" />
          )}
        </div>
        
        {/* Dark gradient overlay matching Figma perfectly */}
        <div 
          className="absolute inset-0 bg-gradient-to-t from-[#100900] via-[rgba(16,9,0,0.5)] via-[59.37%] to-[rgba(16,9,0,0)] to-[79.587%]" 
        />
      </div>

      {/* Content wrapper */}
      <div className="relative flex flex-col items-start gap-2 max-w-xl z-10">
        <h4 className="font-sans font-semibold text-[24px] leading-none text-[#f4e0b5] tracking-[-0.6px] transition-colors duration-300 group-hover:text-[#c89b3d]">
          {title}
        </h4>
        {description && (
          <p className="font-sans font-normal text-[16px] leading-snug text-[#f4f4f5]">
            {description}
          </p>
        )}
      </div>
    </a>
  )
})

ServiceCard.displayName = 'ServiceCard'

export default ServiceCard
