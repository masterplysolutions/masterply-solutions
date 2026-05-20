import React, { useState, useEffect, useRef } from 'react'
import { ArrowUpRight, Menu, X, ChevronDown } from 'lucide-react'
import { cn } from '../../lib/utils'
import { Button } from '../ui/button'
import logoDark from '../../assets/logo-dark.svg'
import logoLight from '../../assets/logo-light.svg'

export const Navbar = React.forwardRef(({
  className,
  activePath = "/",
  forceScrolled = false,
  ...props
}, ref) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false)
  const dropdownRef = useRef(null)

  // Listen to scroll events
  useEffect(() => {
    if (forceScrolled) return

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [forceScrolled])

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsServicesOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const scrolled = forceScrolled || isScrolled

  const navItems = [
    { label: 'Início', href: '/' },
    { label: 'Sobre nós', href: '#sobre-nos' },
    { label: 'Aplicações', href: '#aplicacoes' },
  ]

  const serviceItems = [
    { label: 'Compensado Plastificado', href: '#compensado-plastificado' },
    { label: 'Filme Faced', href: '#filme-faced' },
    { label: 'Compensado Naval', href: '#compensado-naval' },
  ]

  return (
    <header
      ref={ref}
      className={cn(
        // AJUSTE CRÍTICO: Sincronização perfeita do padding lateral com o Grid do Hero
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6 md:px-16 lg:px-20 xl:px-24 border-b border-transparent",
        scrolled
          ? "bg-[#18213c] shadow-lg border-[#1e294b]/30 py-4"
          : "bg-transparent py-6",
        className
      )}
      {...props}
    >
      {/* AJUSTE CRÍTICO: Removido o max-w-7xl que esmagava o alinhamento em telas largas */}
      <div className="w-full flex items-center justify-between">

        {/* Logo Link */}
        <a href="/" className="flex items-center shrink-0 w-[240px] md:w-[302px] h-[33px] relative transition-transform duration-200 active:scale-[0.98]">
          <img
            // AJUSTE CRÍTICO: Logo dinâmico. Escuro no topo (fundo claro) e Claro ao scrollar (fundo Navy)
            src={scrolled ? logoLight : logoDark}
            alt="Masterply Solutions Logo"
            className="w-full h-full object-contain object-left block"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activePath === item.href
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={cn(
                    "relative font-sans text-sm font-normal tracking-wide px-4 py-2 border-b transition-all duration-300",
                    isActive
                      ? "border-[#c89b3d] text-white font-semibold"
                      : "border-transparent text-white/80 hover:text-white hover:border-[#c89b3d]/50"
                  )}
                >
                  {item.label}
                </a>
              )
            })}

            {/* Dropdown Menu Trigger */}
            <div ref={dropdownRef} className="relative inline-block text-left">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                onMouseEnter={() => setIsServicesOpen(true)}
                className={cn(
                  "inline-flex items-center gap-1 font-sans text-sm font-normal tracking-wide px-4 py-2 border-b transition-all duration-300 bg-transparent outline-none cursor-pointer",
                  isServicesOpen
                    ? "border-[#c89b3d] text-white"
                    : "border-transparent text-white/80 hover:text-white hover:border-[#c89b3d]/50"
                )}
              >
                <span>Serviços</span>
                <ChevronDown className={cn("w-3.5 h-3.5 transition-transform duration-300", isServicesOpen && "rotate-180")} />
              </button>

              {/* Desktop Dropdown Panel */}
              {isServicesOpen && (
                <div
                  onMouseLeave={() => setIsServicesOpen(false)}
                  className="absolute right-0 mt-2 w-64 bg-white border border-slate-200 shadow-xl z-50 rounded-none overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200"
                  role="menu"
                >
                  <div className="py-1">
                    {serviceItems.map((item, idx) => (
                      <a
                        key={idx}
                        href={item.href}
                        className="block px-6 py-3.5 text-[14px] font-sans font-medium text-[#18213c] bg-transparent hover:bg-[#c89b3d] hover:text-[#372111] transition-all duration-150 cursor-pointer select-none"
                        role="menuitem"
                        onClick={() => setIsServicesOpen(false)}
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Contact Button */}
          <Button
            as="a"
            href="#contato"
            variant="primary"
            className={cn(
              "px-8 py-3 h-12 text-sm font-sans font-semibold transition-all duration-300 rounded-none",
              "bg-[#c89b3d] text-[#18213c] hover:bg-[#ae7d30] hover:text-[#372111] border border-transparent shadow-md"
            )}
          >
            <span>Contato</span>
            <ArrowUpRight className="w-4 h-4 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Button>
        </nav>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
          className={cn(
            "md:hidden p-2 rounded-none transition-colors duration-200 focus:outline-none text-white hover:bg-white/10"
          )}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed top-[74px] left-0 w-full h-[calc(100vh-74px)] z-40 transition-all duration-300 flex flex-col p-6 animate-in fade-in slide-in-from-top-4 duration-200 bg-[#18213c] text-white">
          <nav className="flex flex-col gap-4 mt-4 mb-8">
            {navItems.map((item) => {
              const isActive = activePath === item.href
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "font-sans text-lg font-medium py-2 border-b transition-all duration-200",
                    isActive
                      ? "border-[#c89b3d] text-white font-semibold"
                      : "border-transparent text-white/70"
                  )}
                >
                  {item.label}
                </a>
              )
            })}

            <div className="flex flex-col">
              <button
                onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                className="flex items-center justify-between font-sans text-lg font-medium py-2 border-b border-transparent transition-all duration-200 bg-transparent text-left text-white/70"
              >
                <span>Serviços</span>
                <ChevronDown className={cn("w-5 h-5 transition-transform duration-300", isMobileServicesOpen && "rotate-180")} />
              </button>

              {isMobileServicesOpen && (
                <div className="flex flex-col pl-4 mt-2 gap-2 animate-in slide-in-from-top-1 duration-200">
                  {serviceItems.map((item, idx) => (
                    <a
                      key={idx}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="font-sans text-base py-2 transition-colors duration-200 text-white/50 hover:text-white"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </nav>

          <div className="mt-auto pb-8">
            <Button
              as="a"
              href="#contato"
              onClick={() => setIsMobileMenuOpen(false)}
              variant="primary"
              className="w-full justify-center bg-[#c89b3d] text-[#18213c] hover:bg-[#ae7d30] py-4 h-14 rounded-none text-base"
            >
              <span>Contato</span>
              <ArrowUpRight className="w-5 h-5 shrink-0" />
            </Button>
          </div>
        </div>
      )}
    </header>
  )
})

Navbar.displayName = 'Navbar'
export default Navbar