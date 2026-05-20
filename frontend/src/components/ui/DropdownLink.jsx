import React, { useState, useEffect, useRef } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '../../lib/utils'

export const DropdownLink = ({ className, title, items = [], ...props }) => {
  const [isOpen, setIsOpen] = useState(false)
  const containerRef = useRef(null)

  // Fechar ao clicar fora do componente
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div ref={containerRef} className="relative inline-block text-left" {...props}>
      {/* Gatilho principal */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "inline-flex items-center gap-[4px] px-2 py-2 border-b-2 font-sans text-sm font-medium text-ink transition-all duration-200 cursor-pointer select-none bg-transparent outline-none focus-visible:ring-2 focus-visible:ring-secondary",
          isOpen ? "border-secondary-700" : "border-transparent hover:border-secondary-700",
          className
        )}
      >
        <span className="px-1">{title}</span>
        <ChevronDown className={cn("w-3.5 h-3.5 text-ink transition-transform duration-200", isOpen && "rotate-180")} />
      </button>

      {/* Painel Flutuante (Dropdown Menu) */}
      {isOpen && (
        <div 
          className="absolute left-0 mt-1.5 w-56 bg-canvas border border-hairline shadow-lg z-50 rounded-none overflow-hidden animate-in fade-in slide-in-from-top-2 duration-150"
          role="menu"
        >
          <div className="py-1">
            {items.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                className="block px-6 py-3 text-[14px] font-sans font-medium text-ink bg-transparent hover:bg-secondary hover:text-on-secondary transition-all duration-150 cursor-pointer select-none"
                role="menuitem"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default DropdownLink
