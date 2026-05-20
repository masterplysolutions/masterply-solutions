import React from 'react'
import { cn } from '../../lib/utils'

export const ProjectCard = React.forwardRef(({
  className,
  number,
  title,
  description,
  href = "#",
  ...props
}, ref) => {
  return (
    <a
      ref={ref}
      href={href}
      aria-label={title}
      className={cn(
        "group relative flex flex-col items-start justify-start gap-6 p-8 md:p-12 w-full md:aspect-[2.2/1] bg-white border border-[#e3e6f0] transition-all duration-300 hover:bg-[#f3f4f8] hover:border-transparent cursor-pointer rounded-none",
        className
      )}
      {...props}
    >
      {/* Big number on top right */}
      {number && (
        <span 
          className="absolute right-8 top-8 font-sans font-semibold text-[60px] leading-none text-[#e3e6f0] tracking-[-1.5px] select-none transition-colors duration-300"
        >
          {number}
        </span>
      )}

      {/* Title */}
      <h4 className="font-sans font-semibold text-[24px] leading-8 text-[#1a1c1c] tracking-[-0.6px] max-w-[75%] pr-4">
        {title}
      </h4>

      {/* Description */}
      {description && (
        <p className="font-sans font-normal text-[18px] leading-normal text-[#4e4637] w-full transition-colors duration-300 group-hover:text-[#737373]">
          {description}
        </p>
      )}
    </a>
  )
})

ProjectCard.displayName = 'ProjectCard'

export default ProjectCard
