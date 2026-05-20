import { useState } from "react";
import { 
  Check, 
  Copy, 
  Layers, 
  Component, 
  ArrowUpRight, 
  Search,
  ExternalLink,
  FileCode,
  Eye,
  Info,
  PhoneCall,
  Mail
} from "lucide-react";
import { Button } from "../components/ui/button";
import { ContactLink } from "../components/ui/ContactLink";
import { WhatsAppButton } from "../components/ui/WhatsAppButton";
import { TextLink } from "../components/ui/TextLink";
import { DropdownLink } from "../components/ui/DropdownLink";
import { ChecklistItem } from "../components/ui/ChecklistItem";
import { Eyebrow } from "../components/ui/Eyebrow";
import { WhatsAppCard } from "../components/ui/WhatsAppCard";
import { ProductCard } from "../components/ui/ProductCard";
import { ServiceCard } from "../components/ui/ServiceCard";
import { ProjectCard } from "../components/ui/ProjectCard";
import { SegmentCard } from "../components/ui/SegmentCard";
import { FeatureCard } from "../components/ui/FeatureCard";
import { ProductTypeCard } from "../components/ui/ProductTypeCard";
import { ArticleCard } from "../components/ui/ArticleCard";
import { Navbar } from "../components/layout/Navbar";
import { Input } from "../components/ui/Input";
import { Textarea } from "../components/ui/Textarea";
import { MultiStepForm } from "../components/ui/MultiStepForm";
import { NewsletterInput } from "../components/ui/NewsletterInput";
import { Footer } from "../components/layout/Footer";
// ==========================================
// Subcomponente de Bloco de Código
// ==========================================
function CodeBlock({ code, language = "jsx" }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code.trim());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative flex flex-col bg-[#0b0f19] border border-hairline/30 rounded-none overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2 bg-[#101524] border-b border-hairline/20">
        <div className="flex items-center gap-2">
          <FileCode className="w-3.5 h-3.5 text-muted-soft" />
          <span className="text-[11px] font-mono text-muted-soft uppercase tracking-wider">{language}</span>
        </div>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 text-[12px] text-muted-soft hover:text-white transition-colors cursor-pointer"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-success" />
              <span className="text-success font-medium">Copiado!</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span>Copiar</span>
            </>
          )}
        </button>
      </div>
      <div className="p-4 overflow-x-auto">
        <pre className="text-[13px] font-mono text-[#c9d1d9] whitespace-pre-wrap leading-[1.6]">
          <code>{code.trim()}</code>
        </pre>
      </div>
    </div>
  );
}

// ==========================================
// Componente Wrapper de Item da Biblioteca
// ==========================================
function LibraryComponentItem({ title, description, code, noPadding, children }) {
  const [showCode, setShowCode] = useState(false);

  return (
    <div className="border border-hairline bg-canvas rounded-none overflow-hidden flex flex-col">
      {/* Header Info */}
      <div className="p-6 border-b border-hairline bg-canvas flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h3 className="text-[18px] font-bold text-ink tracking-tight font-sans">{title}</h3>
          {description && <p className="text-[14px] text-body mt-1">{description}</p>}
        </div>
        <button
          onClick={() => setShowCode(!showCode)}
          className="flex items-center gap-1.5 px-3 py-1.5 text-[13px] font-medium border border-hairline hover:bg-surface-soft transition-colors cursor-pointer self-start md:self-auto rounded-none text-ink"
        >
          {showCode ? (
            <>
              <Eye className="w-4 h-4" />
              <span>Ver Preview</span>
            </>
          ) : (
            <>
              <FileCode className="w-4 h-4" />
              <span>Ver Código</span>
            </>
          )}
        </button>
      </div>

      {/* Preview Canvas */}
      <div className={`bg-surface-soft/60 flex items-center justify-center min-h-[160px] border-b border-hairline ${noPadding ? 'p-0' : 'p-8'} ${showCode ? 'hidden' : 'block'}`}>
        <div className="w-full flex justify-center">{children}</div>
      </div>

      {/* Code Area */}
      <div className={showCode ? 'block' : 'hidden'}>
        <CodeBlock code={code} />
      </div>
    </div>
  );
}

// ==========================================
// Página Principal da Biblioteca
// ==========================================
export function ComponentLibrary() {
  const [activeComponent, setActiveComponent] = useState("buttons");
  const [searchQuery, setSearchQuery] = useState("");

  const navItems = [
    { id: "buttons", label: "Buttons" },
    { id: "navigation", label: "Navigation" },
    { id: "eyebrow", label: "Eyebrow & Lists" },
    { id: "cards", label: "Cards" },
    { id: "forms", label: "Forms" }
  ];

  const filteredNavItems = navItems.filter(item => 
    item.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex h-screen w-full font-sans overflow-hidden bg-surface-soft text-ink">
      
      {/* Sidebar (Clean Unified Style) */}
      <div className="w-72 bg-canvas flex flex-col border-r border-hairline shrink-0 sticky top-0 h-full">
        {/* Sidebar Header */}
        <div className="flex items-center gap-3 px-6 py-8 border-b border-hairline">
          <div className="bg-secondary-500/10 p-2 rounded-none flex items-center justify-center">
            <Layers className="w-5 h-5 text-secondary" />
          </div>
          <div className="flex flex-col">
            <h1 className="font-bold text-[18px] text-ink leading-tight tracking-tight uppercase">Masterply</h1>
            <span className="text-[10px] font-bold text-muted uppercase tracking-widest mt-0.5">
              Design System Library
            </span>
          </div>
        </div>

        {/* Search Bar */}
        <div className="p-4 border-b border-hairline">
          <div className="relative">
            <Search className="w-4 h-4 text-muted absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Filtrar componentes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-surface-soft border border-hairline text-[13px] py-2 pl-9 pr-4 rounded-none outline-none focus:border-secondary transition-colors"
            />
          </div>
        </div>

        {/* Sidebar Menu */}
        <nav className="flex-1 px-3 py-4 gap-1 overflow-y-auto flex flex-col">
          {filteredNavItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveComponent(item.id)}
              className={`text-left px-4 py-3 text-[14px] font-semibold rounded-none transition-colors flex items-center justify-between cursor-pointer ${
                activeComponent === item.id 
                  ? "bg-surface-soft text-ink border-l-4 border-secondary" 
                  : "text-muted hover:text-ink hover:bg-surface-soft/50 border-l-4 border-transparent"
              }`}
            >
              <span className="font-sans tracking-tight">{item.label}</span>
              <Component className="w-4 h-4 opacity-40" />
            </button>
          ))}
          {filteredNavItems.length === 0 && (
            <span className="text-xs text-muted p-4 text-center">Nenhum componente encontrado.</span>
          )}
        </nav>

        {/* Sidebar Footer Info */}
        <div className="p-4 border-t border-hairline bg-surface-soft/40 flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-xs text-muted">
            <Info className="w-3.5 h-3.5" />
            <span>Versão 1.0.0 (Alpha)</span>
          </div>
          <a
            href="/"
            className="text-xs text-secondary hover:text-secondary-hover font-semibold flex items-center gap-0.5 transition-colors"
          >
            <span>Voltar ao site</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* Content Area (Canvas) */}
      <div className="flex-1 flex flex-col overflow-y-auto">
        <div className="p-10 md:p-16 max-w-5xl w-full mx-auto flex flex-col gap-12 pb-24">
          
          {/* Page Title */}
          <div>
            <div className="text-secondary font-bold text-xs uppercase tracking-widest mb-2 flex items-center gap-2">
              <span className="inline-block w-6 h-[1px] bg-secondary"></span>
              Especificação Técnica UI
            </div>
            <h2 className="text-[40px] font-extrabold text-ink capitalize tracking-tight font-sans leading-none mb-4">
              {activeComponent}
            </h2>
            <p className="text-[16px] text-body leading-[1.6] max-w-2xl">
              Confira os estados interativos, comportamentos e código-fonte oficial da categoria{" "}
              <strong className="text-secondary font-bold uppercase">{activeComponent}</strong>.
            </p>
          </div>

          <hr className="border-t border-hairline" />

          {/* Render Active Component Group */}
          <div className="flex flex-col gap-10">
            
            {activeComponent === "buttons" && (
              <>
                <LibraryComponentItem
                  title="Primary Button"
                  description="Botão principal da marca. Fundo Gold e texto Navy em Montserrat. Cantos retos."
                  code={`
<Button variant="primary">
  Solicitar Orçamento
  <ArrowUpRight className="ml-2 w-4 h-4" />
</Button>
                  `}
                >
                  <Button variant="primary">
                    Solicitar Orçamento
                    <ArrowUpRight className="ml-2 w-4 h-4" />
                  </Button>
                </LibraryComponentItem>

                <LibraryComponentItem
                  title="Secondary Button"
                  description="Botão de ação secundária. Fundo suave e texto gold no estado inicial, preenchimento gold no hover."
                  code={`
<Button variant="secondary">
  Saiba mais
</Button>
                  `}
                >
                  <Button variant="secondary">
                    Saiba mais
                  </Button>
                </LibraryComponentItem>

                <div className="mt-6">
                  <h3 className="text-[24px] font-bold text-ink mt-10 mb-4">WhatsApp Button</h3>
                  <LibraryComponentItem
                    title="WhatsApp Button"
                    description="Botão oficial do WhatsApp com ícone de balão de mensagem e ícone de seta externa. Possui gradiente verde e transição de cor suave no hover."
                    code={`
<WhatsAppButton phone="5511999999999" />
                    `}
                  >
                    <WhatsAppButton phone="5511999999999" />
                  </LibraryComponentItem>
                </div>
              </>
            )}

            {activeComponent === "navigation" && (
              <>
                <LibraryComponentItem
                  title="Contact Links"
                  description="Links de contato e navegação corporativos com ícone em ouro e transição de cor de texto no hover para ouro."
                  code={`import { ContactLink } from "../components/ui/ContactLink";
import { PhoneCall, Mail } from "lucide-react";

function ContactSection() {
  return (
    <div className="flex gap-8">
      <ContactLink
        icon={PhoneCall}
        text="(DD) 9 XXXX-XXXX"
        href="tel:+5511999999999"
      />
      <ContactLink
        icon={Mail}
        text="contato@nome.com.br"
        href="mailto:contato@nome.com.br"
      />
    </div>
  );
}`}
                >
                  <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
                    <ContactLink
                      icon={PhoneCall}
                      text="(DD) 9 XXXX-XXXX"
                      href="tel:+5511999999999"
                    />
                    <ContactLink
                      icon={Mail}
                      text="contato@nome.com.br"
                      href="mailto:contato@nome.com.br"
                    />
                  </div>
                </LibraryComponentItem>

                <div className="mt-6">
                  <h3 className="text-[24px] font-bold text-ink mt-10 mb-4">Text Link</h3>
                  <LibraryComponentItem
                    title="Text Link"
                    description="Link de navegação textual (estilo NavLink). Possui borda inferior de 2px no hover e no estado ativo (Active)."
                    code={`
// Link padrão (Hover adiciona borda inferior)
<TextLink href="#">Início</TextLink>

// Link ativo/selecionado (Borda inferior permanente)
<TextLink href="#" active>Início</TextLink>
                    `}
                  >
                    <div className="flex gap-12 items-center">
                      <div className="flex flex-col items-center gap-2">
                        <span className="text-[12px] text-muted uppercase font-semibold">Padrão (Hover me)</span>
                        <TextLink href="#">Início</TextLink>
                      </div>
                      <div className="flex flex-col items-center gap-2">
                        <span className="text-[12px] text-muted uppercase font-semibold">Ativo / Selecionado</span>
                        <TextLink href="#" active>Início</TextLink>
                      </div>
                    </div>
                  </LibraryComponentItem>
                </div>

                <div className="mt-6">
                  <h3 className="text-[24px] font-bold text-ink mt-10 mb-4">Dropdown Link</h3>
                  <LibraryComponentItem
                    title="Dropdown Link"
                    description="Link com menu suspenso (Dropdown). Exibe um painel flutuante absoluto ao ser clicado, com suporte a itens de menu customizados e transição premium no hover."
                    code={`
import DropdownLink from "../components/ui/DropdownLink";

const menuItems = [
  { label: "Compensado Plastificado", href: "#" },
  { label: "Filme Faced", href: "#" },
  { label: "Compensado Naval", href: "#" }
];

<DropdownLink title="Produtos" items={menuItems} />
                    `}
                  >
                    <div className="min-h-[220px] flex items-start pt-4 justify-center">
                      <DropdownLink 
                        title="Produtos" 
                        items={[
                          { label: "Compensado Plastificado", href: "#" },
                          { label: "Filme Faced", href: "#" },
                          { label: "Compensado Naval", href: "#" }
                        ]} 
                      />
                    </div>
                  </LibraryComponentItem>
                </div>

                <div className="mt-10">
                  <h3 className="text-[24px] font-bold text-ink mt-10 mb-4 font-sans tracking-tight">Navbar (Header Menu)</h3>
                  <LibraryComponentItem
                    title="Navbar (Header Menu)"
                    description="Menu de navegação completo e responsivo do site. Possui estado transparente (padrão) com logo escuro e estado de rolagem (scrolled) com fundo azul escuro, logo claro e transição suave. Contém dropdown de serviços com hover no desktop e sanfona (accordion) no mobile."
                    code={`
import Navbar from "../components/layout/Navbar";

{/* Estado Default (Fundo Claro / Transparente) */}
<Navbar className="relative top-auto left-auto w-full" activePath="/" />

{/* Estado Scrolled (Fundo Azul Escuro / Fixo) */}
<Navbar className="relative top-auto left-auto w-full" activePath="/" forceScrolled={true} />
                    `}
                  >
                    <div className="py-4 w-full flex flex-col gap-8">
                      <div>
                        <p className="text-xs font-semibold text-muted mb-2 tracking-wide uppercase font-sans">1. Estado Default (Simulado em fundo claro)</p>
                        <div className="w-full overflow-x-auto pb-4">
                          <div className="min-w-[1100px] border border-hairline p-1 bg-white relative overflow-hidden h-[180px] flex items-center justify-center">
                            <Navbar className="absolute top-0 left-0 w-full" activePath="/" />
                            <div className="text-xs text-muted text-center mt-16 z-0">Espaço da página (Hero)</div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <p className="text-xs font-semibold text-muted mb-2 tracking-wide uppercase font-sans">2. Estado Scrolled (Fundo azul escuro ativo)</p>
                        <div className="w-full overflow-x-auto pb-4">
                          <div className="min-w-[1100px] border border-hairline p-1 bg-primary relative overflow-hidden h-[180px] flex items-center justify-center">
                            <Navbar className="absolute top-0 left-0 w-full" activePath="/" forceScrolled={true} />
                            <div className="text-xs text-white/40 text-center mt-16 z-0">Espaço da página (Scroll &gt; 50px)</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </LibraryComponentItem>
                </div>

                <div className="mt-10">
                  <h3 className="text-[24px] font-bold text-ink mt-10 mb-4 font-sans tracking-tight">Footer (Rodapé)</h3>
                  <LibraryComponentItem
                    title="Footer (Rodapé)"
                    description="Rodapé institucional completo e responsivo. Apresenta o logo da marca, links rápidos com destaque para a seção ativa, links legais, seção de newsletter funcional integrada e informações de copyright."
                    noPadding={true}
                    code={`import { Footer } from "../components/layout/Footer";

<Footer activePath="/" />`}
                  >
                    <div className="w-full overflow-x-auto">
                      <div style={{ minWidth: '1280px' }} className="w-full">
                        <Footer activePath="/" />
                      </div>
                    </div>
                  </LibraryComponentItem>
                </div>
              </>
            )}

            {activeComponent === "eyebrow" && (
              <>
                <div className="mt-6">
                  <h3 className="text-[24px] font-bold text-ink mt-6 mb-4">Section Hat (Eyebrow)</h3>
                  <LibraryComponentItem
                    title="Section Hat (Eyebrow)"
                    description="Cabeçalho editorial / Eyebrow da marca. Exibe uma linha horizontal rígida à esquerda (13px) e o texto em Montserrat. Transiciona suavemente de Navy (Ink) para Gold (Secondary) no hover."
                    code={`
import Eyebrow from "../components/ui/Eyebrow";

<Eyebrow>Masterply Solutions</Eyebrow>
                    `}
                  >
                    <div className="py-4 flex justify-center">
                      <Eyebrow>Masterply Solutions</Eyebrow>
                    </div>
                  </LibraryComponentItem>
                </div>

                <div className="mt-10">
                  <h3 className="text-[24px] font-bold text-ink mt-10 mb-4">Checklist Items</h3>
                  <LibraryComponentItem
                    title="Checklist Items"
                    description="Item de checklist estruturado oficial da marca. Contém o ícone double-checkmark fixo na cor Gold e texto explicativo com transição premium para Navy médio no hover."
                    code={`
import ChecklistItem from "../components/ui/ChecklistItem";

<div className="flex flex-col gap-4">
  <ChecklistItem>Produto da Fábrica direto ao projeto</ChecklistItem>
  <ChecklistItem>Compensados navais de alta resistência</ChecklistItem>
  <ChecklistItem>Logística otimizada para todo o território</ChecklistItem>
</div>
                    `}
                  >
                    <div className="flex flex-col gap-4 max-w-md py-4">
                      <ChecklistItem>Produto da Fábrica direto ao projeto</ChecklistItem>
                      <ChecklistItem>Compensados navais de alta resistência</ChecklistItem>
                      <ChecklistItem>Logística otimizada para todo o território</ChecklistItem>
                    </div>
                  </LibraryComponentItem>
                </div>
              </>
            )}

            {activeComponent === "cards" && (
              <>
                <div className="mt-6">
                  <h3 className="text-[24px] font-bold text-ink mt-6 mb-4">WhatsApp Conversion Card</h3>
                  <LibraryComponentItem
                    title="WhatsApp Conversion Card"
                    description="Card de conversão B2B do WhatsApp. Contém a integração com o WhatsAppButton oficial da marca, título chamativo e descrição curta."
                    code={`
import WhatsAppCard from "../components/ui/WhatsAppCard";

<WhatsAppCard phoneNumber="+5541999999999" />
                    `}
                  >
                    <div className="py-4 max-w-2xl">
                      <WhatsAppCard phoneNumber="+5541999999999" />
                    </div>
                  </LibraryComponentItem>
                </div>

                <div className="mt-10">
                  <h3 className="text-[24px] font-bold text-ink mt-10 mb-4">Numbered Benefit Card</h3>
                  <LibraryComponentItem
                    title="Numbered Benefit Card"
                    description="Card de benefício/característica numerado oficial da marca. Apresenta fundo azul escuro, algarismo decorativo com transição de cor no hover do card, tipografia Montserrat e descrição de alta legibilidade."
                    code={`
import ProductCard from "../components/ui/ProductCard";

<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
  <ProductCard
    number="01"
    title="Padrão Consistente"
    description="Nossas chapas mantêm a mesma espessura e densidade em todas as unidades, evitando ajustes manuais na obra."
  />
  <ProductCard
    number="02"
    title="Resistência Superior"
    description="Desenvolvido para suportar as condições climáticas e pressões estruturais mais exigentes do mercado."
  />
</div>
                    `}
                  >
                    <div className="py-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl">
                        <ProductCard
                          number="01"
                          title="Padrão Consistente"
                          description="Nossas chapas mantêm a mesma espessura e densidade em todas as unidades, evitando ajustes manuais na obra."
                        />
                        <ProductCard
                          number="02"
                          title="Resistência Superior"
                          description="Desenvolvido para suportar as condições climáticas e pressões estruturais mais exigentes do mercado."
                        />
                      </div>
                    </div>
                  </LibraryComponentItem>
                </div>

                <div className="mt-10">
                  <h3 className="text-[24px] font-bold text-ink mt-10 mb-4">Service / Solution Card</h3>
                  <LibraryComponentItem
                    title="Service / Solution Card"
                    description="Card com imagem de fundo, sobreposição de gradiente escuro, e efeito de zoom na imagem durante o hover. Ideal para destaques."
                    code={`
import ServiceCard from "../components/ui/ServiceCard";

<div className="w-full max-w-4xl mx-auto">
  <ServiceCard
    title="Compensado Naval"
    description="Desenvolvido para ambientes com alta exposição à umidade, garantindo estabilidade e longa vida útil mesmo em condições adversas."
    imageSrc="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=600&auto=format&fit=crop"
    href="#"
  />
</div>
                    `}
                  >
                    <div className="py-4 w-full">
                      <div className="w-full max-w-4xl mx-auto">
                        <ServiceCard
                          title="Compensado Naval"
                          description="Desenvolvido para ambientes com alta exposição à umidade, garantindo estabilidade e longa vida útil mesmo em condições adversas."
                          imageSrc="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=600&auto=format&fit=crop"
                          href="#"
                        />
                      </div>
                    </div>
                  </LibraryComponentItem>

                  <h3 className="text-[24px] font-bold text-ink mt-10 mb-4">Project / Portfolio Card</h3>
                  <LibraryComponentItem
                    title="Project / Portfolio Card"
                    description="Card retangular textual utilizado para apresentar diferenciais e especificações, contendo um numeral decorativo no topo direito. Possui transição suave de cor de fundo e opacidade no hover."
                    code={`
import ProjectCard from "../components/ui/ProjectCard";

<div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl mx-auto">
  <ProjectCard
    number="02"
    title="Especificação Técnica"
    description="Não vendemos apenas madeira. Entregamos o compensado exato para a sua aplicação: seja fôrmas para concreto aparente ou estruturas navais de alta resistência."
    href="#"
  />
  <ProjectCard
    number="01"
    title="Escalabilidade Garantida"
    description="Nossa cadeia logística e parcerias com as maiores plantas do país permitem que sua obra nunca pare. Entregamos volume com a constância que grandes projetos exigem."
    href="#"
  />
</div>
                    `}
                  >
                    <div className="py-4 w-full">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl mx-auto">
                        <ProjectCard
                          number="02"
                          title="Especificação Técnica"
                          description="Não vendemos apenas madeira. Entregamos o compensado exato para a sua aplicação: seja fôrmas para concreto aparente ou estruturas navais de alta resistência."
                          href="#"
                        />
                        <ProjectCard
                          number="01"
                          title="Escalabilidade Garantida"
                          description="Nossa cadeia logística e parcerias com as maiores plantas do país permitem que sua obra nunca pare. Entregamos volume com a constância que grandes projetos exigem."
                          href="#"
                          className="bg-[#f3f4f8] border-transparent"
                        />
                      </div>
                    </div>
                  </LibraryComponentItem>

                  <LibraryComponentItem
                    title="Segment / Sector Card"
                    description="Card vertical com imagem de fundo, ícone setorial e efeito de zoom na imagem ao passar o mouse. O título muda de branco para dourado e o ícone de dourado para branco no hover."
                    code={`
import SegmentCard from "../components/ui/SegmentCard";
import { Construction } from "lucide-react";

<div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl mx-auto">
  <SegmentCard
    title="Construção Civil"
    description="Soluções para formas e estruturas com alto índice de reutilização, garantindo melhor acabamento do concreto e redução de custos operacionais."
    imageSrc="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=600&auto=format&fit=crop"
    icon={Construction}
    href="#"
  />
  <SegmentCard
    title="Construção Civil"
    description="Soluções para formas e estruturas com alto índice de reutilização, garantindo melhor acabamento do concreto e redução de custos operacionais."
    imageSrc="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=600&auto=format&fit=crop"
    icon={Construction}
    href="#"
    forceHover={true}
  />
</div>
                    `}
                  >
                    <div className="py-4 w-full">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl mx-auto">
                        <SegmentCard
                          title="Construção Civil"
                          description="Soluções para formas e estruturas com alto índice de reutilização, garantindo melhor acabamento do concreto e redução de custos operacionais."
                          imageSrc="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=600&auto=format&fit=crop"
                          href="#"
                        />
                        <SegmentCard
                          title="Construção Civil"
                          description="Soluções para formas e estruturas com alto índice de reutilização, garantindo melhor acabamento do concreto e redução de custos operacionais."
                          imageSrc="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=600&auto=format&fit=crop"
                          href="#"
                          forceHover={true}
                        />
                      </div>
                    </div>
                  </LibraryComponentItem>

                  <LibraryComponentItem
                    title="Feature / Vertical Border Card"
                    description="Card horizontal com fundo sólido claro, borda lateral esquerda grossa e ícone superior. No hover, a borda esquerda passa de azul escuro para dourado, e o título de dourado para azul escuro."
                    code={`
import FeatureCard from "../components/ui/FeatureCard";
import { CalendarPlus } from "lucide-react";

<div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl mx-auto">
  <FeatureCard
    title="Eventos e Estruturas Temporárias"
    description="Desempenho confiável para montagens rápidas, com segurança estrutural e eficiência operacional."
    icon={CalendarPlus}
    href="#"
  />
  <FeatureCard
    title="Eventos e Estruturas Temporárias"
    description="Desempenho confiável para montagens rápidas, com segurança estrutural e eficiência operacional."
    icon={CalendarPlus}
    href="#"
    forceHover={true}
  />
</div>
                    `}
                  >
                    <div className="py-4 w-full">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl mx-auto">
                        <FeatureCard
                          title="Eventos e Estruturas Temporárias"
                          description="Desempenho confiável para montagens rápidas, com segurança estrutural e eficiência operacional."
                          href="#"
                        />
                        <FeatureCard
                          title="Eventos e Estruturas Temporárias"
                          description="Desempenho confiável para montagens rápidas, com segurança estrutural e eficiência operacional."
                          href="#"
                          forceHover={true}
                        />
                      </div>
                    </div>
                  </LibraryComponentItem>

                  <LibraryComponentItem
                    title="Product Type Card"
                    description="Card vertical com fundo sólido claro, cabeçalho de texto superior e imagem inferior. No hover, o título transita de dourado para azul marinho escuro, e a foto inferior sofre um zoom suave."
                    code={`
import ProductTypeCard from "../components/ui/ProductTypeCard";

<div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl mx-auto">
  <ProductTypeCard
    title="Compensado Plastificado"
    description="Oferece proteção contra umidade e maior resistência mecânica, ideal para aplicações estruturais que demandam durabilidade."
    imageSrc="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=600&auto=format&fit=crop"
    href="#"
  />
  <ProductTypeCard
    title="Compensado Plastificado"
    description="Oferece proteção contra umidade e maior resistência mecânica, ideal para aplicações estruturais que demandam durabilidade."
    imageSrc="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=600&auto=format&fit=crop"
    href="#"
    forceHover={true}
  />
</div>
                    `}
                  >
                    <div className="py-4 w-full">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl mx-auto">
                        <ProductTypeCard
                          title="Compensado Plastificado"
                          description="Oferece proteção contra umidade e maior resistência mecânica, ideal para aplicações estruturais que demandam durabilidade."
                          imageSrc="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=600&auto=format&fit=crop"
                          href="#"
                        />
                        <ProductTypeCard
                          title="Compensado Plastificado"
                          description="Oferece proteção contra umidade e maior resistência mecânica, ideal para aplicações estruturais que demandam durabilidade."
                          imageSrc="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=600&auto=format&fit=crop"
                          href="#"
                          forceHover={true}
                        />
                      </div>
                    </div>
                  </LibraryComponentItem>

                  <LibraryComponentItem
                    title="Article Card (Blog)"
                    description="Card quadrado sem foto para artigos de blog. No hover, o marcador da categoria, o título e a cor de fundo do botão no rodapé transitam suavemente para dourado."
                    code={`
import ArticleCard from "../components/ui/ArticleCard";

<div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl mx-auto">
  <ArticleCard
    category="Comparativo Técnico"
    title="Plastificado vs Filme Face: Quando investir mais?"
    description="A escolha entre esses materiais impacta diretamente o acabamento do concreto e a quantidade de reutilizações. Entender essa diferença evita desperdício e melhora o resultado final da obra."
    href="#"
  />
  <ArticleCard
    category="Comparativo Técnico"
    title="Plastificado vs Filme Face: Quando investir mais?"
    description="A escolha entre esses materiais impacta diretamente o acabamento do concreto e a quantidade de reutilizações. Entender essa diferença evita desperdício e melhora o resultado final da obra."
    href="#"
    forceHover={true}
  />
</div>
                    `}
                  >
                    <div className="py-4 w-full">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl mx-auto">
                        <ArticleCard
                          category="Comparativo Técnico"
                          title="Plastificado vs Filme Face: Quando investir mais?"
                          description="A escolha entre esses materiais impacta diretamente o acabamento do concreto e a quantidade de reutilizações. Entender essa diferença evita desperdício e melhora o resultado final da obra."
                          href="#"
                        />
                        <ArticleCard
                          category="Comparativo Técnico"
                          title="Plastificado vs Filme Face: Quando investir mais?"
                          description="A escolha entre esses materiais impacta diretamente o acabamento do concreto e a quantidade de reutilizações. Entender essa diferença evita desperdício e melhora o resultado final da obra."
                          href="#"
                          forceHover={true}
                        />
                      </div>
                    </div>
                  </LibraryComponentItem>
                </div>
              </>
            )}

            {activeComponent === "forms" && (
              <>
                <div className="flex flex-col gap-12 mt-8">
                  {/* Input Component */}
                  <LibraryComponentItem
                    title="Input"
                    description="Elemento de entrada de texto reutilizável. Possui suporte a labels integradas, estados de foco premium (borda dourada + ring de 20% de opacidade) e estados de erro com borda vermelha e texto descritivo."
                    code={`
import { Input } from "../components/ui/Input";

<Input 
  label="Nome completo:" 
  placeholder="Pedro Duarte" 
/>

<Input 
  label="Telefone com Erro:" 
  placeholder="(DD) 9 XXXX-XXXX" 
  error="Insira um telefone válido com DDD." 
/>
                    `}
                  >
                    <div className="py-4 w-full max-w-md flex flex-col gap-6">
                      <Input
                        label="Nome completo (Padrão):"
                        placeholder="Pedro Duarte"
                      />
                      <Input
                        label="Nome completo (Com valor preenchido):"
                        defaultValue="Pedro Duarte"
                      />
                      <Input
                        label="Telefone / WhatsApp (Com Erro):"
                        placeholder="(DD) 9 XXXX-XXXX"
                        error="Insira um telefone válido com DDD (ex: 11 99999-9999)."
                      />
                      <Input
                        label="Desabilitado:"
                        placeholder="Não é possível digitar..."
                        disabled
                      />
                    </div>
                  </LibraryComponentItem>

                  {/* Textarea Component */}
                  <LibraryComponentItem
                    title="Textarea"
                    description="Elemento de entrada de texto longo/multilinha reutilizável. Mantém a identidade visual consistente de foco e estados de erro do Input, com altura padrão de 102px."
                    code={`
import { Textarea } from "../components/ui/Textarea";

<Textarea 
  label="Mensagem:" 
  placeholder="Digite aqui sua mensagem...." 
/>
                    `}
                  >
                    <div className="py-4 w-full max-w-md flex flex-col gap-6">
                      <Textarea
                        label="Mensagem (Padrão):"
                        placeholder="Digite aqui sua mensagem...."
                      />
                      <Textarea
                        label="Mensagem (Com Erro):"
                        placeholder="Digite aqui sua mensagem...."
                        error="A mensagem deve ter pelo menos 10 caracteres."
                      />
                      <Textarea
                        label="Desabilitado:"
                        placeholder="Não é possível digitar..."
                        disabled
                      />
                    </div>
                  </LibraryComponentItem>

                  {/* MultiStepForm Component */}
                  <LibraryComponentItem
                    title="MultiStepForm (Formulário de Contato / Orçamento)"
                    description="Formulário interativo em duas etapas unificando os inputs. Possui abas no cabeçalho com transição suave, validação integrada por etapa, indicador de carregamento de envio simulado e tela de confirmação (sucesso) estilizada."
                    code={`
import { MultiStepForm } from "../components/ui/MultiStepForm";

<MultiStepForm />
                    `}
                  >
                    <div className="py-4 w-full flex justify-center bg-slate-50 p-6 border border-hairline/50">
                      <MultiStepForm />
                    </div>
                  </LibraryComponentItem>

                  {/* NewsletterInput Component */}
                  <LibraryComponentItem
                    title="NewsletterInput (Coleta de E-mail Newsletters)"
                    description="Input customizável para captura de e-mails em newsletters. Possui fundo translúcido para aplicação sobre seções escuras, botão de envio com transição de cores bronze para dourado/navy no hover e validação integrada."
                    code={`
import { NewsletterInput } from "../components/ui/NewsletterInput";

// Padrão (Dark Background)
<NewsletterInput />

// Hover Forçado
<NewsletterInput forceHover={true} />
                    `}
                  >
                    <div className="py-8 px-6 w-full flex flex-col md:flex-row gap-12 items-center justify-around bg-[#18213c]">
                      <div className="flex flex-col gap-2 w-full max-w-[320px]">
                        <span className="text-white/60 text-xs uppercase tracking-wider font-bold">Default</span>
                        <NewsletterInput />
                      </div>
                      <div className="flex flex-col gap-2 w-full max-w-[320px]">
                        <span className="text-white/60 text-xs uppercase tracking-wider font-bold">Hover</span>
                        <NewsletterInput forceHover={true} />
                      </div>
                    </div>
                  </LibraryComponentItem>
                </div>
              </>
            )}

        </div>
      </div>
    </div>
  </div>
);
}
