import React from 'react'
import { cn } from '../../lib/utils'
import { WhatsAppButton } from './WhatsAppButton'

export const WhatsAppCard = React.forwardRef(({ 
  className, 
  title = "Atendimento rápido pelo WhatsApp", 
  description = "Para um atendimento mais ágil, utilize o WhatsApp. Nossa equipe está disponível para responder dúvidas iniciais e orientar sobre os próximos passos.",
  phoneNumber, 
  ...props 
}, ref) => {
  return (
    <div
      ref={ref}
      aria-label={title}
      className={cn(
        "w-full flex flex-col gap-8 border-t border-b border-hairline py-8 transition-all duration-200 group bg-transparent",
        className
      )}
      {...props}
    >
      <div className="flex gap-4 items-start w-full">
        {/* Content Area */}
        <div className="flex flex-col gap-2 items-start justify-center">
          <h4 className="font-sans font-semibold text-[20px] leading-snug text-muted tracking-[-0.6px] group-hover:text-secondary transition-colors duration-200">
            {title}
          </h4>
          <p className="font-sans font-normal text-[16px] leading-relaxed text-muted max-w-xl">
            {description}
          </p>
          <div className="mt-2">
            <WhatsAppButton phoneNumber={phoneNumber} />
          </div>
        </div>
      </div>
    </div>
  )
})

WhatsAppCard.displayName = 'WhatsAppCard'

export default WhatsAppCard
