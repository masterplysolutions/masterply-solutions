import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '../../lib/utils';
import logoLight from '../../assets/logo-light.svg';
import { Button } from '../ui/button';
import { NewsletterInput } from '../ui/NewsletterInput';
import { TextLink } from '../ui/TextLink';
import { STATIC_PRODUCTS } from '../../data/mocks';

export function Footer({ className, activePath = "/", ...props }) {
  const quickLinks = [
    { label: 'Início', href: '/' },
    { label: 'Sobre nós', href: '/sobre-nos' },
    { label: 'Aplicações', href: '/aplicacoes' },
    { label: 'Serviços', href: '/servicos' },
    { label: 'Blog', href: '/blog' }
  ];

  const serviceLinks = STATIC_PRODUCTS.map((p) => ({
    label: p.title,
    href: `/servicos#${p.id}`,
  }));

  const legalLinks = [
    { label: 'Políticas de privacidade', href: '/politica-de-privacidade' },
    { label: 'Termos de Uso', href: '/termos-de-uso' },
    { label: 'Política de Cookies', href: '/politica-de-cookies' }
  ];

  return (
    <footer
      // AJUSTE CRÍTICO 1: Sincronização exata de padding com o Hero e a Navbar (px-6 md:px-16 lg:px-20 xl:px-24)
      className={cn("bg-[#18213c] text-[#fafafa] font-sans w-full relative px-6 md:px-16 lg:px-20 xl:px-24", className)}
      {...props}
    >
      {/* Main Content Area */}
      {/* AJUSTE CRÍTICO 2: Removido o max-w-7xl e o px-12 antigo. Agora ele preenche 100% alinhado com a borda do site */}
      <div className="w-full pt-16 pb-10 md:pt-20 md:pb-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 lg:grid-cols-12 gap-10 sm:gap-8 md:gap-10 lg:gap-8 xl:gap-12 items-start">

        {/* Brand Column */}
        <div className="flex flex-col gap-6 max-w-sm w-full sm:col-span-2 md:col-span-6 lg:col-span-3">
          <a
            href="/"
            className="flex items-center shrink-0 w-[240px] md:w-[300px] lg:w-[300px] xl:w-[360px] h-[26px] md:h-[32px] lg:h-[36px] xl:h-[40px] relative transition-transform duration-200 active:scale-[0.98]"
          >
            <img
              src={logoLight}
              alt="Masterply Solutions Logo"
              className="w-full h-full object-contain object-left block"
            />
          </a>
          <p className="font-sans text-[14px] leading-[22px] text-[#9ca3af] font-normal">
            Líder em fornecimento técnico de compensados para grandes obras industriais e corporativas no Brasil.
          </p>
        </div>

        {/* Quick Links Column */}
        <div className="flex flex-col gap-6 shrink-0 min-w-[140px] sm:col-span-1 md:col-span-4 lg:col-span-2">
          <h6 className="font-sans text-[12px] font-bold text-[#c89b3d] uppercase tracking-wider">
            Links Rápidos
          </h6>
          <nav className="flex flex-col gap-1">
            {quickLinks.map((item) => {
              const isActive = activePath === item.href;
              return (
                <div
                  key={item.label}
                  className={cn(
                    "flex items-center gap-1 min-h-[36px] pr-4 py-1.5 border-b border-transparent transition-all duration-300",
                    isActive && "border-[#c89b3d]"
                  )}
                >
                  <a
                    href={item.href}
                    className="font-sans text-[14px] font-medium text-[#fafafa] hover:text-[#c89b3d] transition-colors duration-200"
                  >
                    {item.label}
                  </a>
                </div>
              );
            })}
          </nav>

          <Button
            as="a"
            href="/contato"
            variant="primary"
            className={cn(
              "px-8 py-3 h-12 text-[14px] font-sans font-semibold transition-all duration-300 rounded-none w-fit",
              "bg-[#c89b3d] text-[#18213c] hover:bg-[#ae7d30] hover:text-[#372111] border border-transparent shadow-md flex items-center gap-2"
            )}
          >
            <span>Contato</span>
            <ArrowUpRight className="w-4 h-4 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Button>
        </div>

        {/* Services Column */}
        <div className="flex flex-col gap-6 shrink-0 min-w-[180px] sm:col-span-1 md:col-span-4 lg:col-span-2">
          <h6 className="font-sans text-[12px] font-bold text-[#c89b3d] uppercase tracking-wider">
            Serviços
          </h6>
          <ul className="flex flex-col gap-1 items-start">
            {serviceLinks.map((item) => {
              const isActive = activePath === item.href;
              return (
                <li key={item.label}>
                  <TextLink
                    href={item.href}
                    active={isActive}
                    className={cn(
                      "px-0 text-[14px] font-normal text-[#9ca3af] hover:text-[#fafafa]",
                      isActive
                        ? "border-[#c89b3d] text-[#fafafa]"
                        : "hover:border-[#c89b3d]"
                    )}
                  >
                    {item.label}
                  </TextLink>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Legal Column */}
        <div className="flex flex-col gap-6 shrink-0 min-w-[140px] sm:col-span-1 md:col-span-4 lg:col-span-2">
          <h6 className="font-sans text-[12px] font-bold text-[#c89b3d] uppercase tracking-wider">
            Legal
          </h6>
          <ul className="flex flex-col gap-1 items-start">
            {legalLinks.map((item) => {
              const isActive = activePath === item.href;
              return (
                <li key={item.label}>
                  <TextLink
                    href={item.href}
                    active={isActive}
                    className={cn(
                      "px-0 text-[14px] font-normal text-[#9ca3af] hover:text-[#fafafa]",
                      isActive
                        ? "border-[#c89b3d] text-[#fafafa]"
                        : "hover:border-[#c89b3d]"
                    )}
                  >
                    {item.label}
                  </TextLink>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Newsletter Column */}
        <div className="flex flex-col gap-5 max-w-[284px] w-full sm:col-span-1 md:col-span-6 lg:col-span-3 lg:max-w-none">
          <h6 className="font-sans text-[12px] font-bold text-[#c89b3d] uppercase tracking-wider">
            Newsletter
          </h6>
          <p className="font-sans text-[12px] leading-5 text-[#9ca3af] font-normal">
            Assine para receber especificações técnicas e novidades do setor.
          </p>
          <NewsletterInput className="w-full" />
        </div>

      </div>

      {/* Bottom Copyright Area */}
      {/* AJUSTE CRÍTICO 3: Alinhado e limpo sem o limitador max-w */}
      <div className="border-t border-white/5 py-8 text-center w-full">
        <div className="w-full flex justify-center items-center">
          <p className="font-sans text-[14px] leading-5 text-[#9ca3af] font-normal">
            &copy; Masterply Solutions. Todos os Direitos reservados
          </p>
        </div>
      </div>
    </footer>
  );
}