import React from 'react'
import { cn } from '../../lib/utils'

export const ProductTypeCard = React.forwardRef(({
  className,
  title,
  description,
  imageSrc,
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
        "group flex flex-col items-start justify-between p-10 bg-[#f3f3f3] transition-all duration-300 w-full aspect-[4/5] min-h-[460px] rounded-none cursor-pointer hover:shadow-md",
        className
      )}
      {...props}
    >
      {/* Text Container */}
      <div className="flex flex-col gap-4 items-start pb-8 w-full">
        <h4 className={cn(
          "font-sans font-semibold text-[24px] leading-tight tracking-[-0.6px] transition-colors duration-300",
          forceHover 
            ? "text-[#101527]" 
            : "text-[#c89b3d] group-hover:text-[#101527]"
        )}>
          {title}
        </h4>
        {description && (
          <p className="font-sans font-normal text-[16px] leading-normal text-[#4e4637]">
            {description}
          </p>
        )}
      </div>

      {/* Image Container with Overflow Hidden for zoom effect */}
      {imageSrc && (
        <div className="h-[256px] relative w-full overflow-hidden shrink-0">
          <img
            alt={title}
            src={imageSrc}
            onError={(e) => {
              if (e.target.src.includes('localhost')) {
                e.target.src = "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=800&q=80";
              }
            }}
            className={cn(
              "w-full h-full object-cover transition-transform duration-700 ease-out",
              forceHover ? "scale-[1.06]" : "group-hover:scale-[1.06]"
            )}
          />
        </div>
      )}
    </a>
  )
})

ProductTypeCard.displayName = 'ProductTypeCard'

export default ProductTypeCard
