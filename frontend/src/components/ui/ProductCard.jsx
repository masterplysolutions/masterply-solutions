import React from 'react'
import { cn } from '../../lib/utils'

export const ProductCard = React.forwardRef(({
  className,
  number = "01",
  title,
  description,
  ...props
}, ref) => {
  return (
    <div
      ref={ref}
      aria-label={`${number} - ${title}`}
      className={cn(
        "group flex flex-col items-start gap-4 p-8 bg-[#18213c] border border-transparent rounded-none transition-all duration-300 w-full select-none text-left",
        className
      )}
      {...props}
    >
      {/* Number digit */}
      <div className="font-sans font-semibold text-[48px] leading-none tracking-[-1.2px] text-[#ebc784] transition-colors duration-300 group-hover:text-[#c89b3d] h-[48px] flex items-center justify-center">
        {number}
      </div>

      {/* Title */}
      <h4 className="font-sans font-semibold text-[24px] leading-[32px] text-white tracking-[-0.6px]">
        {title}
      </h4>

      {/* Description */}
      <p className="font-sans text-[14px] leading-[22.75px] text-[#94a3b8]">
        {description}
      </p>
    </div>
  )
})

ProductCard.displayName = 'ProductCard'

export default ProductCard
