import React, { forwardRef } from 'react'
import { cn } from '../../lib/utils'

export const Textarea = forwardRef(({ className, label, error, ...props }, ref) => {
  return (
    <div className="w-full flex flex-col gap-2">
      {label && (
        <label className="font-sans font-medium text-sm leading-5 text-primary-900">
          {label}
        </label>
      )}
      <textarea
        ref={ref}
        className={cn(
          "w-full bg-white border border-[#e2e8f0] px-3 py-[10px] text-sm leading-5 text-primary-900 placeholder-[#a1a1aa] font-sans font-normal transition-colors focus:outline-none focus:border-secondary-500 focus:ring-1 focus:ring-secondary-500/20 disabled:cursor-not-allowed disabled:opacity-50 min-h-[102px] resize-y",
          error && "border-red-500 focus:border-red-500 focus:ring-red-500/20",
          className
        )}
        {...props}
      />
      {error && (
        <span className="text-xs text-red-500 font-sans font-medium mt-0.5">{error}</span>
      )}
    </div>
  )
})

Textarea.displayName = 'Textarea'
