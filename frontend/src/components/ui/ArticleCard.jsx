import React from 'react'
import { cn } from '../../lib/utils'

export const ArticleCard = React.forwardRef(({
  className,
  category,
  title,
  description,
  buttonText = "Ver artigo completo",
  href = "#",
  forceHover = false,
  ...props
}, ref) => {
  return (
    <a
      ref={ref}
      href={href}
      aria-label={`${category ? category + ' - ' : ''}${title}`}
      className={cn(
        "group flex flex-col items-start justify-between p-8 bg-[#f3f4f8] transition-all duration-300 w-full aspect-square min-h-[380px] rounded-none cursor-pointer hover:shadow-md shadow-sm border border-transparent",
        className
      )}
      {...props}
    >
      {/* Category Badge */}
      {category && (
        <div className="flex gap-[6px] items-center overflow-hidden py-1 relative shrink-0">
          <div className={cn(
            "h-[2px] w-[13px] transition-colors duration-300",
            forceHover ? "bg-[#c89b3d]" : "bg-[#18213c] group-hover:bg-[#c89b3d]"
          )} />
          <span className={cn(
            "font-sans text-[12px] font-normal leading-4 transition-colors duration-300",
            forceHover ? "text-[#c89b3d]" : "text-[#0f172a] group-hover:text-[#c89b3d]"
          )}>
            {category}
          </span>
        </div>
      )}

      {/* Title */}
      <h4 className={cn(
        "font-sans font-semibold text-[20px] leading-7 tracking-[-0.6px] transition-colors duration-300 w-full text-left",
        forceHover ? "text-[#c89b3d]" : "text-[#100900] group-hover:text-[#c89b3d]"
      )}>
        {title}
      </h4>

      {/* Description */}
      {description && (
        <p className="font-sans font-normal text-[14px] leading-5 text-[#575e70] text-left w-full">
          {description}
        </p>
      )}

      {/* Action Button */}
      <div className={cn(
        "flex items-center justify-center px-8 py-3 transition-colors duration-300 shrink-0",
        forceHover 
          ? "bg-[#c89b3d]" 
          : "bg-[#f4e0b5] group-hover:bg-[#c89b3d]"
      )}>
        <span className={cn(
          "font-sans font-semibold text-[14px] leading-6 transition-colors duration-300",
          forceHover 
            ? "text-[#372111]" 
            : "text-[#c89b3d] group-hover:text-[#372111]"
        )}>
          {buttonText}
        </span>
      </div>
    </a>
  )
})

ArticleCard.displayName = 'ArticleCard'

export default ArticleCard
