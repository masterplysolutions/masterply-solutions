---
version: alpha
name: Masterply Solutions
description: A premium B2B compensados brand built on a deliberate refusal to look like the lumber category. Navy (#18213C) carries banking-and-engineering authority, gold (#C89B3D) is used at small dose — one keyword per headline, one primary CTA per section, one decorative number — and Montserrat 700–800 in headlines mixes color *within* the same sentence ("não falham por falta de material. **Falham por falta de parceiro**"). Eyebrows with a horizontal dash (`— Posicionamento`) open every section as editorial navigation; numbered cards (01–04) treat the digit as a light-weight ornament, not an icon. Bands of navy alternate with white to create vertical rhythm without illustration — the brand trusts documentary jobsite photography and the chromatic restraint of gold to do the lifting.

colors:
  # Marca — Primary (Navy) scale
  primary-50: "#f3f4f8"
  primary-100: "#e3e6f0"
  primary-200: "#cdd2e3"
  primary-300: "#aeb7cf"
  primary-400: "#8a97ba"
  primary-500: "#6a78a2"
  primary-600: "#525e86"
  primary-700: "#424c6d"
  primary-800: "#373e58"
  primary-900: "#18213c"
  primary-950: "#101527"

  # Marca — Secondary (Gold) scale
  secondary-50: "#fdfaf3"
  secondary-100: "#faf2dd"
  secondary-200: "#f4e0b5"
  secondary-300: "#ebc784"
  secondary-400: "#e1ab5a"
  secondary-500: "#c89b3d"
  secondary-600: "#ae7d30"
  secondary-700: "#8b5d29"
  secondary-800: "#744d27"
  secondary-900: "#604023"
  secondary-950: "#372111"

  # Marca — Semantic shortcuts (aliases the components reference)
  primary: "{colors.primary-900}"
  primary-hover: "{colors.primary-800}"
  secondary: "{colors.secondary-500}"
  secondary-hover: "{colors.secondary-700}"
  secondary-soft: "{colors.secondary-100}"

  # Superfície
  canvas: "#ffffff"
  surface-soft: "{colors.primary-50}"
  surface-muted: "{colors.primary-100}"
  surface-dark: "{colors.primary-900}"

  # Texto
  ink: "{colors.primary-900}"
  body: "{colors.primary-700}"
  muted: "{colors.primary-500}"
  muted-soft: "{colors.primary-400}"
  on-dark: "#ffffff"
  on-dark-muted: "#cbd5e1"
  on-primary: "{colors.primary-900}"
  on-secondary: "{colors.primary-900}"

  # Hairlines
  hairline: "{colors.primary-200}"
  hairline-soft: "{colors.primary-100}"
  border-dark: "{colors.primary-700}"

  # Semântica
  destructive: "#7f1d1d"
  destructive-hover: "#991b1b"
  destructive-soft: "#7f1d1d1a"
  destructive-text: "#b91c1c"
  success: "#22c55e"
  success-hover: "#16a34a"
  wpp-green: "#22c55e"
  warning: "#d97706"
  focus-ring: "{colors.secondary-500}"
  scrim: "#000000"

typography:
  h1:
    fontFamily: "'Montserrat', system-ui, -apple-system, sans-serif"
    fontSize: 60px
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: -1.2px
  h2:
    fontFamily: "'Montserrat', system-ui, sans-serif"
    fontSize: 44px
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: -0.8px
  h3:
    fontFamily: "'Montserrat', system-ui, sans-serif"
    fontSize: 32px
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: -0.4px
  h4:
    fontFamily: "'Montserrat', system-ui, sans-serif"
    fontSize: 24px
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: -0.2px
  h5:
    fontFamily: "'Montserrat', system-ui, sans-serif"
    fontSize: 20px
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: 0
  display-numbered-light:
    fontFamily: "'Montserrat', system-ui, sans-serif"
    fontSize: 80px
    fontWeight: 400
    lineHeight: 1
    letterSpacing: -2px
  display-numbered-bold:
    fontFamily: "'Montserrat', system-ui, sans-serif"
    fontSize: 48px
    fontWeight: 700
    lineHeight: 1
    letterSpacing: -1px
  lead:
    fontFamily: "'Montserrat', system-ui, sans-serif"
    fontSize: 20px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  large:
    fontFamily: "'Montserrat', system-ui, sans-serif"
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: 0
  p:
    fontFamily: "'Montserrat', system-ui, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0
  body-medium:
    fontFamily: "'Montserrat', system-ui, sans-serif"
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: 0
  blockquote:
    fontFamily: "'Montserrat', system-ui, sans-serif"
    fontSize: 18px
    fontWeight: 400
    fontStyle: italic
    lineHeight: 1.55
    letterSpacing: 0
  small:
    fontFamily: "'Montserrat', system-ui, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  muted-text:
    fontFamily: "'Montserrat', system-ui, sans-serif"
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.45
    letterSpacing: 0
  inline-code:
    fontFamily: "'JetBrains Mono', 'Fira Code', ui-monospace, monospace"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: 0
  button-md:
    fontFamily: "'Montserrat', system-ui, sans-serif"
    fontSize: 16px
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: 0
  button-sm:
    fontFamily: "'Montserrat', system-ui, sans-serif"
    fontSize: 14px
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: 0
  nav-link:
    fontFamily: "'Montserrat', system-ui, sans-serif"
    fontSize: 16px
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: 0
  eyebrow:
    fontFamily: "'Montserrat', system-ui, sans-serif"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: 0.2px

rounded:
  none: 0px
  sm: 4px
  md: 8px
  lg: 12px
  xl: 16px
  "2xl": 20px
  "3xl": 24px
  full: 9999px

spacing:
  xxs: 2px
  xs: 4px
  sm: 8px
  md: 12px
  base: 16px
  lg: 24px
  xl: 32px
  xxl: 48px
  "3xl": 64px
  section: 96px

shadows:
  sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)"
  md: "0 4px 6px -1px rgb(0 0 0 / 0.08), 0 2px 4px -2px rgb(0 0 0 / 0.06)"
  lg: "0 10px 15px -3px rgb(0 0 0 / 0.08), 0 4px 6px -4px rgb(0 0 0 / 0.05)"
  xl: "0 20px 25px -5px rgb(0 0 0 / 0.10), 0 8px 10px -6px rgb(0 0 0 / 0.06)"
  inner: "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)"
  focus-ring: "0 0 0 2px {colors.canvas}, 0 0 0 4px {colors.focus-ring}"

components:
  # ── Navigation ───────────────────────────────────────────────
  top-nav-default:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.nav-link}"
    height: 80px
    padding: "16px 64px"
  top-nav-scroll:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.nav-link}"
    height: 80px
    padding: "16px 64px"
    shadow: "{shadows.md}"
  nav-link:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.nav-link}"
    padding: "8px 4px"
  nav-link-active:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.nav-link}"
    borderBottom: "2px solid {colors.secondary}"
    padding: "8px 4px 6px"
  nav-link-dropdown:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.nav-link}"
    padding: "8px 4px"
    gap: "{spacing.xs}"
  dropdown-menu:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.p}"
    rounded: "{rounded.none}"
    padding: "{spacing.sm} 0"
    shadow: "{shadows.lg}"
    border: "1px solid {colors.hairline-soft}"
  dropdown-item:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.p}"
    padding: "{spacing.md} {spacing.lg}"
  dropdown-item-hover:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.on-secondary}"
    typography: "{typography.p}"
    padding: "{spacing.md} {spacing.lg}"

  # ── Buttons ──────────────────────────────────────────────────
  button-primary:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.on-secondary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.none}"
    padding: "14px 24px"
    height: 48px
  button-primary-hover:
    backgroundColor: "{colors.secondary-700}"
    textColor: "{colors.on-secondary}"
    rounded: "{rounded.none}"
  button-primary-focus:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.on-secondary}"
    shadow: "{shadows.focus-ring}"
    rounded: "{rounded.none}"
  button-primary-disabled:
    backgroundColor: "{colors.secondary-200}"
    textColor: "{colors.muted-soft}"
    rounded: "{rounded.none}"
  button-primary-loading:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.on-secondary}"
    rounded: "{rounded.none}"
    opacity: 0.7
  button-secondary:
    backgroundColor: "{colors.secondary-soft}"
    textColor: "{colors.secondary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.none}"
    padding: "14px 24px"
    height: 48px
  button-secondary-hover:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.on-secondary}"
    rounded: "{rounded.none}"
  button-cta-nav:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.on-secondary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.none}"
    padding: "12px 20px"
    height: 44px
  button-link-wpp:
    backgroundColor: transparent
    textColor: "{colors.wpp-green}"
    typography: "{typography.button-sm}"
    gap: "{spacing.xs}"
  button-text-link:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.button-md}"

  # ── Eyebrow & Lists ──────────────────────────────────────────
  eyebrow:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.eyebrow}"
    gap: "{spacing.sm}"
  eyebrow-hover:
    backgroundColor: transparent
    textColor: "{colors.secondary}"
    typography: "{typography.eyebrow}"
    gap: "{spacing.sm}"
  checklist-item:
    backgroundColor: transparent
    textColor: "{colors.muted}"
    typography: "{typography.p}"
    gap: "{spacing.sm}"
  checklist-item-hover:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.body-medium}"
    gap: "{spacing.sm}"
  bullet-list:
    backgroundColor: transparent
    textColor: "{colors.body}"
    typography: "{typography.p}"

  # ── Cards ────────────────────────────────────────────────────
  card-positioning:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.p}"
    rounded: "{rounded.none}"
    padding: "{spacing.xl} {spacing.xl}"
    border: "1px solid {colors.hairline}"
  card-positioning-hover:
    backgroundColor: "{colors.surface-soft}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    border: "1px solid {colors.hairline}"
  card-positioning-number:
    backgroundColor: transparent
    textColor: "{colors.primary-100}"
    typography: "{typography.display-numbered-light}"
  card-numbered-dark:
    backgroundColor: transparent
    textColor: "{colors.on-dark}"
    typography: "{typography.p}"
    padding: "{spacing.lg} 0"
  card-numbered-dark-digit:
    backgroundColor: transparent
    textColor: "{colors.secondary-200}"
    typography: "{typography.display-numbered-bold}"
  card-numbered-dark-digit-hover:
    backgroundColor: transparent
    textColor: "{colors.secondary}"
    typography: "{typography.display-numbered-bold}"
  card-application-tall:
    backgroundColor: "{colors.primary-900}"
    textColor: "{colors.on-dark}"
    typography: "{typography.p}"
    rounded: "{rounded.none}"
    padding: "{spacing.lg}"
    aspectRatio: "3:4"
  card-application-tall-hover:
    backgroundColor: "{colors.primary-900}"
    textColor: "{colors.on-dark}"
    rounded: "{rounded.none}"
    transform: "image-scale-1.05"
  card-application-compact:
    backgroundColor: "{colors.surface-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.p}"
    rounded: "{rounded.none}"
    padding: "{spacing.lg}"
    borderLeft: "4px solid {colors.primary}"
  card-application-compact-hover:
    backgroundColor: "{colors.surface-soft}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    borderLeft: "4px solid {colors.secondary}"
  card-blog:
    backgroundColor: "{colors.surface-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.p}"
    rounded: "{rounded.none}"
    padding: "{spacing.lg}"
  card-product-landscape:
    backgroundColor: "{colors.primary-900}"
    textColor: "{colors.on-dark}"
    typography: "{typography.p}"
    rounded: "{rounded.none}"
    padding: "{spacing.lg}"
    aspectRatio: "16:9"

  # ── Hero & Templates ─────────────────────────────────────────
  hero-section:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.h1}"
    padding: "{spacing.section} {spacing.xxl}"
  hero-image-frame:
    backgroundColor: "{colors.surface-muted}"
    rounded: "{rounded.none}"
    aspectRatio: "4:3"
  application-row:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.p}"
    padding: "{spacing.xxl} {spacing.xxl}"
    gap: "{spacing.xxl}"
  product-detail-block:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.p}"
    padding: "{spacing.xxl} {spacing.xxl}"
    gap: "{spacing.xxl}"
  numbered-stat:
    backgroundColor: transparent
    textColor: "{colors.on-dark}"
    typography: "{typography.p}"
    gap: "{spacing.md}"

  # ── Forms ────────────────────────────────────────────────────
  form-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "{spacing.lg}"
    border: "1px solid {colors.hairline}"
  form-tabs:
    backgroundColor: "{colors.surface-soft}"
    textColor: "{colors.muted}"
    typography: "{typography.body-medium}"
    rounded: "{rounded.none}"
    padding: "{spacing.xs}"
  form-tab-active:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.secondary}"
    typography: "{typography.body-medium}"
    rounded: "{rounded.none}"
    padding: "{spacing.md} {spacing.lg}"
  form-tab-inactive:
    backgroundColor: transparent
    textColor: "{colors.muted}"
    typography: "{typography.body-medium}"
    padding: "{spacing.md} {spacing.lg}"
  text-input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.p}"
    rounded: "{rounded.none}"
    padding: "12px 16px"
    height: 48px
    border: "1px solid {colors.hairline}"
  text-input-focus:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    border: "1px solid {colors.primary}"
    shadow: "{shadows.focus-ring}"
  text-input-error:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    border: "1px solid {colors.destructive}"
  text-input-disabled:
    backgroundColor: "{colors.surface-soft}"
    textColor: "{colors.muted-soft}"
    rounded: "{rounded.none}"
    border: "1px solid {colors.hairline-soft}"
  textarea:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.p}"
    rounded: "{rounded.none}"
    padding: "12px 16px"
    minHeight: 120px
    border: "1px solid {colors.hairline}"
  form-input-newsletter:
    backgroundColor: transparent
    textColor: "{colors.on-dark}"
    typography: "{typography.p}"
    rounded: "{rounded.none}"
    padding: "12px 16px"
    height: 44px
    border: "1px solid {colors.border-dark}"
  form-input-newsletter-button:
    backgroundColor: "{colors.secondary-700}"
    textColor: "{colors.on-dark}"
    rounded: "{rounded.none}"
    height: 44px
    width: 44px
  form-input-newsletter-button-hover:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.on-secondary}"
    rounded: "{rounded.none}"

  # ── CTA Band ─────────────────────────────────────────────────
  cta-band-dark:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.h2}"
    padding: "{spacing.section} {spacing.xxl}"

  # ── Misc ─────────────────────────────────────────────────────
  whatsapp-block:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.p}"
    padding: "{spacing.lg} 0"
    borderTop: "1px solid {colors.secondary}"
    borderBottom: "1px solid {colors.secondary}"
    gap: "{spacing.md}"
  whatsapp-icon:
    backgroundColor: "{colors.wpp-green}"
    textColor: "{colors.on-dark}"
    rounded: "{rounded.full}"
    height: 40px
    width: 40px
  icon-text-contact:
    backgroundColor: transparent
    textColor: "{colors.muted}"
    typography: "{typography.p}"
    gap: "{spacing.sm}"
  icon-text-contact-hover:
    backgroundColor: transparent
    textColor: "{colors.secondary}"
    typography: "{typography.p}"
    gap: "{spacing.sm}"

  # ── Footer ───────────────────────────────────────────────────
  footer-dark:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.p}"
    padding: "{spacing.xxl} {spacing.xxl}"
    borderTop: "1px solid {colors.border-dark}"
  footer-link:
    backgroundColor: transparent
    textColor: "{colors.on-dark}"
    typography: "{typography.p}"
    padding: "{spacing.xs} 0"
  footer-link-hover:
    backgroundColor: transparent
    textColor: "{colors.secondary}"
    typography: "{typography.p}"
  footer-link-contact:
    backgroundColor: transparent
    textColor: "{colors.on-dark-muted}"
    typography: "{typography.small}"
    gap: "{spacing.sm}"

  # ── Brand ────────────────────────────────────────────────────
  logo-mark-dark:
    backgroundColor: transparent
    monogramColor: "{colors.secondary}"
    wordmarkColor: "{colors.primary}"
  logo-mark-light:
    backgroundColor: transparent
    monogramColor: "{colors.secondary}"
    wordmarkColor: "{colors.on-dark}"
---

## Overview

A Masterply Solutions saiu de um rebrand recente — era Carassa Compensados, madeireira familiar do Paraná, atuando no mercado de pinus e eucalipto para construção. O brief do rebrand é explícito no MIV: "sair da imagem de empresa regional tradicional de compensados [e] evoluir para uma marca mais moderna, profissional e com visão de crescimento." Tudo o que segue nesse documento foi construído para suportar essa virada — incluindo decisões que parecem pequenas, como porquê o gold aparece em dose mínima e porquê a numeração 01-04 nunca está em negrito.

A categoria onde a Masterply atua (fornecedores de madeira/compensados para construção pesada) defaulta para marrom-madeira, verde-construção, fotos de chapas empilhadas e tipografia industrial em pesos extra-bold. A Masterply faz quase o oposto. A paleta ancora em **navy `{colors.primary-900}` (#18213C)** — cor de banco, escritório de engenharia, advogado — e **gold `{colors.secondary-500}` (#C89B3D)** — cor de luxo arquitetônico, hotel boutique, joalheria. Nenhuma das duas pertence à categoria. Esse é o ponto.

O gold é tratado em pequena dose deliberada. Aparece como **palavra-chave dentro de uma frase** ("não falham por falta de material. **Falham por falta de parceiro**"), como **CTA primário único por seção** ("Solicitar orçamento"), como **número decorativo** ao lado de cards de posicionamento, e como **destaque pontual em ícones e linhas**. Nunca cobre uma banda inteira, nunca é o background de uma seção. A contenção é o que diferencia premium de tropical — se o gold dominasse, a marca leria como classificados de imóveis. Como ornamento medido, lê como autoridade.

A tipografia é **Montserrat exclusivamente** ({typography.h1} a {typography.muted-text}, pesos 400 a 800). O MIV lista NOS Family Font e Next Sphere Regular como fontes de marca, mas elas ficam restritas ao logo e a peças impressas — o site é Montserrat 100%. Headlines em peso 700 com tamanho denso (h1 60px, h2 44px) carregam a autoridade editorial; body em peso 400 e line-height generoso (1.6) deixa o parágrafo respirar mesmo em frases técnicas longas.

A assinatura visual mais distintiva da marca são três técnicas que aparecem em quase toda página:

1. **Mistura de cor dentro do headline.** A frase começa em navy e a parte crítica vira gold no meio: "Cada projeto tem uma exigência. **Nossas soluções foram desenvolvidas para cada uma delas.**" Importado do mundo editorial (revistas, papers, livros de design) — raríssimo em sites de fornecedor industrial.
2. **Eyebrow com dash horizontal.** Toda seção abre com `— Posicionamento`, `— Aplicação`, `— Quem somos`, `— Fale conosco`. Funciona como navegação editorial silenciosa: o leitor sabe onde está na hierarquia sem precisar de breadcrumb.
3. **Numeração tipográfica grande em peso leve.** Cards de posicionamento (01, 02, 03) carregam o número em peso 400 e cor primary-100 — quase imperceptível. O número é gráfico, não conteúdo; ornamenta o card, não compete com o título. Quando a numeração vira *bold* (sequência 01-04 na banda navy "Enquanto o mercado vende madeira"), o contexto é diferente — esse bloco trata os números como estatística, e a tipografia segue.

Há também duas decisões que merecem nota porque destoam da convenção do setor. Primeiro: **a marca não usa nenhuma textura ou ilustração**. Toda imagem é fotografia documental — operário com tablet, chapas no pátio, estrutura concretada com fôrma de compensado, piscina coberta com madeira tratada. Segundo: **a marca não usa shadows pesados nem cantos arredondados**. A estética é flat com cantos retos em todos os componentes (`{rounded.none}`) — botões, cards, inputs, frames de imagem, formulários. A separação visual é feita por hairlines e contraste cromático (banda navy vs canvas branco), não por elevação layered nem por arredondamento. Cantos retos comunicam estrutura, engenharia e materialidade industrial — alinhado com o posicionamento técnico premium. As únicas exceções de elevação são o dropdown do menu de navegação e o form-card do contato; a única exceção de radius é o ícone circular do WhatsApp.

## Colors

A paleta tem duas escalas completas (primary navy e secondary gold, 11 tons cada) mais um conjunto de aliases semânticos que os componentes referenciam. As escalas existem completas porque ambas têm uso real distribuído: os tons claros (50/100/200) aparecem como surface backgrounds e numeração decorativa, os médios (400/500) aparecem como CTAs e accents, e os escuros (700/800/900) aparecem como banda dark, texto institucional e bordas no footer.

### Marca

A escala **primary** é o navy. O tom canônico é `{colors.primary-900}` (#18213C) — confirmado no MIV (Pantone 2955 C) e na assinatura do logo. Esse é o navy de bandas dark, de headlines institucionais (h1/h2/h3 em hero e seção), e do scrolled top-nav. Os tons adjacentes têm papéis específicos: `{colors.primary-50}` é a superfície de cards-blog e cards-application-compact (cinza-azul tão claro que parece quase branco); `{colors.primary-100}` é o número decorativo dos cards de posicionamento; `{colors.primary-200}` é a hairline padrão; `{colors.primary-500}` é o muted text. Os tons 800/950 existem para hover de elementos navy e para detalhes em sombra — não são usados em volume.

A escala **secondary** é o gold. O tom canônico é `{colors.secondary-500}` (#C89B3D) — confirmado no MIV (Pantone 7408 C). Esse é o gold de CTA primário, da palavra-chave colorida dentro de headlines, dos ícones de destaque, do underline do nav-link ativo, da linha hairline acima do whatsapp-block. Os tons adjacentes carregam: `{colors.secondary-100}` (#faf2dd) como fundo do `button-secondary` (cremoso, quase off-white); `{colors.secondary-200}` como cor da numeração 01-04 em bandas dark (default state, antes do hover); `{colors.secondary-700}` (#8b5d29) como hover do button-primary (gold escurecido para marrom) e do botão newsletter-send no estado default. Os tons 800/900/950 ficam disponíveis para hovers profundos mas têm uso menos frequente.

### Superfície e Texto

`{colors.canvas}` é branco puro (#FFFFFF) — domina ~70% da área visual do site. `{colors.surface-soft}` (primary-50) abriga cards-blog e cards-application-compact, e o fundo da seção "Decisões técnicas impactam diretamente". `{colors.surface-dark}` (primary-900) é o fundo de cta-band-dark e footer-dark.

Para texto: `{colors.ink}` (primary-900) cobre headlines e títulos de card; `{colors.body}` (primary-700) cobre parágrafos longos; `{colors.muted}` (primary-500) cobre legenda, label de campo, body em surface-soft. Em bandas dark, `{colors.on-dark}` (branco) cobre headlines e body; `{colors.on-dark-muted}` (#cbd5e1) cobre legends e disclaimers no footer.

### Hairlines

A separação visual padrão é hairline de 1px, não sombra. `{colors.hairline}` (primary-200) é o padrão (border de form-card, text-input, card-positioning). `{colors.hairline-soft}` (primary-100) é variante ainda mais sutil — usada quando precisamos só sugerir separação. `{colors.border-dark}` (primary-700) é a hairline dentro de superfícies dark (separadores no footer).

### Semântica

Mantida enxuta porque o site é majoritariamente institucional, não transacional. `{colors.destructive}` (#7f1d1d, red-900 do Tailwind) cobre estados de erro de input e mensagens críticas; `{colors.destructive-text}` (#b91c1c) é a versão para body com contraste suficiente em fundo claro. `{colors.success}` é green-500 do Tailwind — também usado como `{colors.wpp-green}` no link "Falar pelo WhatsApp" e no ícone redondo do whatsapp-block. `{colors.warning}` existe como token mas tem zero uso confirmado nas telas; entra como fallback.

`{colors.focus-ring}` é o gold (#C89B3D) — escolha deliberada para que o anel de foco use a cor de marca, não o azul-padrão do browser. Combinado com a estética de hairlines, o focus-ring de 2px gold sobre branco cria contraste suficiente para acessibilidade sem destoar da paleta.

## Typography

**Montserrat** carrega tudo — display, headline, body, button, micro-label. É uma sans-serif geométrica popular o suficiente para parecer familiar e técnica o suficiente para parecer engenheirada. Está disponível em Google Fonts em todos os pesos (100 a 900) e o site usa do 400 ao 800. Não há substituição necessária: Montserrat *é* a fonte open-source que outros sistemas mais elaborados usariam como fallback.

### Hierarquia

| Token | Tamanho / Peso | Uso |
|---|---|---|
| `{typography.h1}` | 60 / 700 | Hero headlines de cada página |
| `{typography.h2}` | 44 / 700 | Headlines de seção ("Mais do que fornecer", "Onde nossas soluções são aplicadas") |
| `{typography.h3}` | 32 / 700 | Título de subsection, título de cta-band-dark |
| `{typography.h4}` | 24 / 700 | Título de card maior (Compensado Naval, Filme Faced) |
| `{typography.h5}` | 20 / 700 | Título de card menor, subtítulo de bloco WhatsApp |
| `{typography.display-numbered-light}` | 80 / 400 | Numeração ornamental dos cards-positioning (cor primary-100) |
| `{typography.display-numbered-bold}` | 48 / 700 | Numeração estatística da banda navy "Enquanto o mercado vende madeira" |
| `{typography.lead}` | 20 / 400 | Sub-hero, parágrafo de abertura de banda |
| `{typography.p}` | 16 / 400 | Body padrão (line-height 1.6) |
| `{typography.body-medium}` | 16 / 500 | Body com ênfase, labels de tabs, frases destacadas |
| `{typography.button-md}` | 16 / 600 | Botões padrão |
| `{typography.eyebrow}` | 14 / 500 | Eyebrow com dash, label de campo em forms |

A regra que rege a maior parte das decisões tipográficas é: **headlines pesam, body respira**. h1 a h5 carregam peso 700 com line-height comprimido (1.05 a 1.3) e tracking levemente negativo (-0.2 a -1.2px) — produz blocos densos que projetam autoridade. O parágrafo em peso 400 com line-height 1.6 corre na direção contrária, dando ar ao texto técnico longo.

### A técnica de palavras-chave coloridas

O movimento tipográfico distintivo da marca não está em nenhum token isolado, e sim em **como dois tokens se combinam dentro do mesmo elemento**. Headlines do site têm uma parte em `{colors.ink}` (navy) e uma parte em `{colors.secondary}` (gold), no mesmo h1 ou h2, mesmo peso 700, mesmo tamanho:

> "Projetos grandes não falham por falta de material. <span style="color:#C89B3D">Falham por falta de parceiro.</span>"

> "Não nascemos para vender madeira. <span style="color:#C89B3D">Nascemos para garantir que projetos não falhem.</span>"

> "Mais do que fornecer, <span style="color:#C89B3D">é garantir execução.</span>"

A regra implícita: a parte gold é sempre a *afirmação central*, a tese, o "porquê isso importa". A parte navy é o set-up, o contexto. Não há sublinhado, itálico, ou separador — só a cor. Quando essa técnica é aplicada bem, o headline tem hierarquia interna sem precisar quebrar em duas linhas tipográficas diferentes.

### Nota sobre substituição de fontes

Montserrat é Google Fonts; carregar via CDN com os pesos 400/500/600/700/800. Se por alguma razão a Montserrat não estiver disponível em runtime, o stack `system-ui, -apple-system, sans-serif` cobre o fallback nativo de cada plataforma. As fontes "NOS Family Font" e "Next Sphere Regular" mencionadas no MIV **não são usadas no site** — ficam restritas ao logo (que já vem como SVG) e a peças impressas.

## Layout

### Spacing System

Base unit de **4px**, escalonando em múltiplos de 4 e 8:
`{spacing.xxs}` 2px · `{spacing.xs}` 4px · `{spacing.sm}` 8px · `{spacing.md}` 12px · `{spacing.base}` 16px · `{spacing.lg}` 24px · `{spacing.xl}` 32px · `{spacing.xxl}` 48px · `{spacing.3xl}` 64px · `{spacing.section}` 96px.

- **Section padding (vertical):** `{spacing.section}` (96px) entre seções principais; é folgado para um site B2B, mas funciona porque o site tem ritmo de banda alternada (navy ↔ branco) — cada banda precisa respirar antes da próxima começar.
- **Gutters de grid:** `{spacing.xl}` (32px) entre cards de aplicação na home; `{spacing.lg}` (24px) entre cards-blog na seção de artigos; `{spacing.xxl}` (48px) entre foto e texto no application-row.
- **Card internal padding:** `{spacing.lg}` (24px) para card-blog, card-application-compact, form-card; `{spacing.xl}` (32px) para card-positioning (que precisa abrigar a numeração ornamental sem competir com o texto).

### Grid & Container

- **Max content width:** 1280px centrado nas páginas editoriais (home, sobre, aplicações). Em formulários e blocos institucionais menores, cap de 1080px para manter densidade.
- **Hero grid:** 2 colunas no desktop — texto à esquerda (~45%), imagem à direita (~55%), gap 48px.
- **Application-row:** 2 colunas alternando direção a cada bloco (foto esq/texto dir → foto dir/texto esq → foto esq/texto dir...). Proporção foto:texto = 50:50, gap 48px. Esse é o template que carrega as 6 aplicações da página Aplicações e os 3 produtos da página Produtos.
- **Card grids:** 3 colunas no desktop para card-blog e card-application-compact; 3 colunas também para card-application-tall na home.
- **Footer:** 4 colunas no desktop — logo+tagline (40%) / Links Rápidos (20%) / Legal (20%) / Newsletter (20%).

### Whitespace Philosophy

O site usa 96px entre seções (`{spacing.section}`) mas comprime para 32-48px dentro de cards e blocos densos. Esse contraste deliberado cria respiração editorial — cada seção é uma "página" autocontida, com início claro (eyebrow + headline) e fim claro (CTA ou hairline). Em vez de scrollar uma página contínua, o leitor passa por capítulos.

A alternância de bandas (navy ↔ branco) faz o trabalho que outros sites fazem com divisórias decorativas. Quando uma seção precisa de mais peso institucional (cta final, banda "Enquanto o mercado vende"), entra navy; quando o conteúdo é técnico e precisa de leitura confortável (cards de aplicação, blog), entra branco/surface-soft.

### Hard Edges

**Nenhum componente do sistema usa cantos arredondados.** Botões, cards, inputs, dropdowns, form-cards, frames de imagem — todos têm `{rounded.none}` (0px). É decisão deliberada da marca: cantos retos comunicam estrutura, engenharia e materialidade industrial, alinhado com o posicionamento da Masterply como fornecedor técnico premium para grandes obras. A única exceção é o `whatsapp-icon`, que usa `{rounded.full}` porque é um círculo geométrico, não um retângulo arredondado — o WhatsApp tem identidade própria reconhecível e o círculo carrega essa convenção. Qualquer componente novo que entrar no sistema deve seguir essa regra: cantos retos por padrão, círculo completo apenas para ícones-marca específicos.

## Elevation

O sistema é **predominantemente flat**. A regra: separação visual padrão é hairline, não sombra. Há quatro exceções pontuais onde shadow aparece:

- **`{shadows.lg}` no dropdown-menu** — quando o submenu de "Serviços" abre sobre o canvas, precisa flutuar visualmente para sinalizar overlay. Sem shadow, o submenu se confunde com a banda do nav.
- **`{shadows.md}` no top-nav-scroll** — quando o usuário rola e o nav vira banda navy, um shadow sutil separa o nav do conteúdo atrás. É a única elevação permanente do sistema.
- **`{shadows.sm}` (opcional) no form-card** — pode entrar para diferenciar o form do background branco da página de contato, mas se a hairline já estiver visível, o shadow é redundante.
- **`{shadows.focus-ring}` em qualquer elemento focável** — anel duplo de 4px total (2px canvas + 2px gold) ao redor do elemento que recebe foco de teclado. Aplica-se a button-primary-focus, text-input-focus, links, e qualquer outro target keyboard-navegável.

Não existe escala progressiva de elevação (z1 → z2 → z3). A profundidade é cromática (banda dark vs canvas) e estrutural (hairlines, cantos retos), não layered.

## Components

### Navigation

**`top-nav-default`** — Banda transparente sobre o canvas branco, 80px de altura, logo `{component.logo-mark-dark}` flush left, links centro-direita, button-cta-nav (gold pill) flush right. Sem hairline inferior — a separação é só pelo conteúdo abaixo. Visível quando o usuário está no topo da página.

**`top-nav-scroll`** — A mesma estrutura, mas com fundo `{colors.surface-dark}`, logo `{component.logo-mark-light}`, links em branco, shadow `{shadows.md}`. Aparece quando o usuário rola além de ~80px do topo. A transição entre os dois estados deve ser suave (~200ms ease-out), não instantânea.

**`nav-link`** — Link do menu principal, peso 500, 16px. Em estado default não tem decoração; no `nav-link-active`, ganha um underline `{colors.secondary}` de 2px logo abaixo, com 4px de gap entre o texto e a linha — não é underline CSS padrão, é um border-bottom espaçado. Hover puxa o mesmo underline em opacidade reduzida ou transição animada.

**`nav-link-dropdown`** — Variante com chevron-down após o label ("Serviços ⌄"). Quando hover ou clicado, revela `{component.dropdown-menu}` abaixo, alinhado ao centro horizontal do label.

**`dropdown-menu`** — Caixa branca com `{rounded.md}`, border de 1px `{colors.hairline-soft}` e shadow `{shadows.lg}`. Mínimo de 200px de largura, padding vertical de 8px. Os items dentro são `{component.dropdown-item}`.

**`dropdown-item` / `dropdown-item-hover`** — Linha de menu, padding 12px 24px. Default: texto `{colors.ink}` sobre fundo transparente. Hover: fundo `{colors.secondary}` cheio + texto navy. A reversão de cor (gold-on-navy ↔ navy-on-gold) é a assinatura cromática do hover dentro do dropdown.

### Buttons

**`button-primary`** — O CTA principal do sistema. Fundo `{colors.secondary}` (gold), texto `{colors.on-secondary}` (navy 900), peso 600 a 16px, cantos retos (sem radius), padding 14×24px, altura 48px. Quase sempre acompanha um arrow-up-right (↗) ícone à direita do label, com 8px de gap. Labels canônicos: "Solicitar orçamento", "Próximo", "Enviar formulário", "Contato".

**`button-primary-hover`** — Fundo migra para `{colors.secondary-700}` (#8b5d29) — gold escurecido para marrom-bronze. Sem mudança de transform, sem mudança de shadow. A transição é só cromática.

**`button-primary-focus`** — Mantém o fundo gold, adiciona `{shadows.focus-ring}` (anel duplo canvas+gold). Sinal de keyboard-navegação.

**`button-primary-disabled`** — Fundo `{colors.secondary-200}` (gold pálido), texto `{colors.muted-soft}`, cursor not-allowed. Não tem hover state ativo.

**`button-primary-loading`** — Mantém fundo gold mas com opacidade 0.7 e spinner branco substituindo o arrow. Disable de cliques durante o estado.

**`button-secondary`** — Fundo `{colors.secondary-soft}` (#faf2dd, gold-100 cremoso), texto `{colors.secondary}` em peso 600. Radius e padding iguais ao primary, mas o impacto cromático é completamente diferente — parece um "primary suavizado". Labels canônicos: "Saiba mais", "Ver artigo completo".

**`button-secondary-hover`** — Inverte completamente: fundo `{colors.secondary}` pleno, texto `{colors.on-secondary}` (navy). Ou seja, no hover o button-secondary vira button-primary visualmente. Isso é deliberado — sugere progressão de intent. Aparece também no card-blog: no hover do card inteiro, o button-secondary interno promove para fill cheio.

**`button-cta-nav`** — Variante do button-primary específica para o slot "Contato" no top-nav. 44px de altura (mais baixo que o primary padrão), padding 12×20px. Carrega o mesmo arrow-up-right.

**`button-link-wpp`** — Não é botão visualmente, é link. Texto `{colors.wpp-green}` (verde WhatsApp #22C55E), peso 600, 14px, com arrow-up-right gold ao final. Único elemento do sistema que usa verde — propositalmente quebra a paleta porque o WhatsApp tem cor própria reconhecível e o usuário precisa identificar imediatamente.

**`button-text-link`** — Texto navy peso 600 sem fundo, com arrow-up-right opcional. Usado em "Ver todos os artigos" e similares — CTAs tertiários.

### Eyebrow & Lists

**`eyebrow`** — Um dos componentes mais usados do sistema (abre quase toda seção). Estrutura: linha horizontal `—` de ~16px de largura + label em peso 500, 14px, cor `{colors.ink}`, tracking 0.2px. O dash é um caractere em-dash real, não SVG. Labels canônicos: "— Masterply Solutions", "— Posicionamento", "— Quem somos", "— Aplicação", "— Diferenciais", "— BLOG", "— Fale conosco".

**`eyebrow-hover`** — Mesma estrutura, dash e texto migram para `{colors.secondary}` (gold). Hover só tem efeito quando o eyebrow é parte de um card clicável (ex: card-blog).

**`checklist-item`** — Linha de lista com double-checkmark gold à esquerda (`✓✓` em SVG ou ícone), gap 8px do texto. Texto em `{colors.muted}` no default. Aparece em listas "O que sustenta cada entrega" (Sobre nós), "Vantagens" (página de Produtos), "Atendimento rápido pelo WhatsApp" (Contato).

**`checklist-item-hover`** — Texto migra para `{colors.ink}` e peso 500 (de regular vira medium). O double-check fica gold no default e gold no hover — não muda. Aplicável quando a checklist é parte de um card clicável.

**`bullet-list`** — Lista padrão sem marcador customizado, usada em "Indicado para:" nos cards de produto. Sem decoração — só o texto em `{colors.body}` com line-height confortável.

### Cards

**`card-positioning`** — Card branco com hairline 1px de borda, cantos retos, padding 32×32px. Layout interno: título à esquerda (h4, 24px peso 700), parágrafo body abaixo, e numeração ornamental 80px/peso 400 cor `{colors.primary-100}` posicionada absoluta no canto superior direito do card. A numeração não é um label; é um ornamento — está lá pela função visual, não pelo conteúdo. Aparece na home, na seção "Mais do que fornecer, é garantir execução".

**`card-positioning-hover`** — Background migra de `{colors.canvas}` para `{colors.surface-soft}` (primary-50). A hairline permanece, o número permanece — só o fundo muda. Sugere "card está vivo" sem precisar de transformação.

**`card-numbered-dark`** — Variante para banda navy ("Enquanto o mercado vende madeira, nós entregamos previsibilidade"). Sem caixa, sem fundo — só conteúdo. Número grande (display-numbered-bold, 48px/700) em `{colors.secondary-200}` (creme), título h5 em branco, body em `{colors.on-dark-muted}`. Quatro desses em linha formam a sequência 01-04.

**`card-numbered-dark-digit-hover`** — Só a numeração muda no hover: vai de creme (secondary-200) para gold (secondary-500). Sutil, mas suficiente para indicar afordância.

**`card-application-tall`** — O card de aplicação mais proeminente, proporção 3:4 (vertical). A imagem cobre o card inteiro com overlay escuro gradiente (mais escuro no rodapé). Conteúdo posicionado no rodapé: ícone outline gold pequeno (24px) + título h4 em branco + body em branco/opacidade 0.85. Aparece na home para Construção Civil, Piscinas de Alto Padrão, Parques Aquáticos.

**`card-application-tall-hover`** — Dois movimentos simultâneos: a imagem escala 1.05 (pequeno zoom), e o título migra de branco para `{colors.secondary}` (gold). Duração ~300ms ease-out.

**`card-application-compact`** — Card menor para aplicações secundárias (Eventos e Estruturas Temporárias, Containers Modulares, Grandes Empreendimentos). Fundo `{colors.surface-soft}`, cantos retos, padding 24px. Borda esquerda de 4px sólida `{colors.primary-900}`. Ícone outline 24px navy no topo, título h5 em `{colors.secondary}` (gold), body em `{colors.muted}` abaixo.

**`card-application-compact-hover`** — A borda esquerda migra de navy para `{colors.secondary}` (gold) — único elemento que muda. Título permanece gold, body permanece muted. É um hover deliberadamente sutil.

**`card-blog`** — Card para artigos do blog. Fundo `{colors.surface-soft}`, cantos retos, padding 24px. Conteúdo: eyebrow ("— Comparativo Técnico", "— Guia de Compra", "— Normatização") + título h5 navy + body 3-4 linhas em muted + button-secondary "Ver artigo completo" no rodapé. No hover do card inteiro, eyebrow e título migram para gold (`{colors.secondary}`) e o button-secondary promove para button-secondary-hover (fill gold cheio).

**`card-product-landscape`** — Variante landscape (16:9) do card-application-tall. Mesma mecânica (imagem + overlay + título sobreposto + hover de zoom e mudança de cor do título), mas o aspect ratio horizontal acomoda 1 produto por linha ao invés de 3 por linha. Aparece na home para Compensado Plastificado, Compensado Naval, Filme Faced.

### Hero & Templates

**`hero-section`** — Padrão usado no topo de toda página. Grid 2 colunas (texto esq, imagem dir), padding 96×48px. Texto esquerdo: eyebrow + h1 (com mistura de cor gold/navy) + lead em muted + 2 botões (button-primary "Solicitar orçamento" + button-secondary "Saiba mais"). Imagem direita: `{component.hero-image-frame}` com aspect ratio 4:3 ou 5:4.

**`hero-image-frame`** — Frame da imagem do hero. Background `{colors.surface-muted}` (placeholder antes da imagem carregar), cantos retos, aspect-ratio 4:3. A imagem dentro é sempre fotografia documental — operário em obra, chapa empilhada, estrutura concretada — nunca render 3D ou ilustração.

**`application-row`** — Template único que carrega as 6 aplicações da página Aplicações. Grid 2 colunas (50:50), gap 48px, padding vertical 48px. Direção alternada: aplicação 1 tem foto esquerda + texto direita; aplicação 2 inverte (foto direita + texto esquerda); aplicação 3 volta para foto esquerda; e assim por diante. O lado de texto contém: eyebrow ("— Aplicação") + título h3 + body + button-primary "Solicitar orçamento". O lado da imagem é uma foto documental sem texto sobreposto, cantos retos.

**`product-detail-block`** — Variante do application-row para a página Produtos. Mesma estrutura visual (foto + texto alternando), mas o lado de texto adiciona duas listas estruturadas entre o body e o CTA: "**Indicado para:**" (texto navy peso 600) + bullet-list, depois "**Vantagens:**" (texto navy peso 600) + checklist-item gold. Carrega os 3 produtos (Compensado Plastificado, Filme Faced, Compensado Naval).

**`numbered-stat`** — Componente da banda navy "Enquanto o mercado vende madeira, nós entregamos previsibilidade". Layout: número grande (display-numbered-bold, 48px) em `{colors.secondary-200}` no topo + título h5 branco + body em `{colors.on-dark-muted}` abaixo. Quatro em linha (01-04: "Padrão Consistente", "Capacidade Industrial", "Suporte Técnico", "Foco em Desempenho"). Não tem hover state — é descritivo, não acionável.

### Forms

**`form-card`** — Container do formulário multi-step da página Contato. Fundo `{colors.canvas}`, hairline 1px `{colors.hairline}`, cantos retos, padding 24px. Largura típica ~560px no desktop.

**`form-tabs`** — Stepper visual no topo do form-card. Container com fundo `{colors.surface-soft}`, cantos retos, padding 4px. Contém duas células (`{component.form-tab-active}` e `{component.form-tab-inactive}`).

**`form-tab-active`** — Tab ativa: fundo branco, texto `{colors.secondary}` (gold) peso 500. A elevação é só pela cor de fundo branca contra o cinza do container — não precisa de shadow.

**`form-tab-inactive`** — Tab inativa: sem fundo, texto `{colors.muted}` peso 500. Clicável; ao receber clique, o estado das duas tabs inverte.

**`text-input`** — Input padrão de formulário. Fundo branco, hairline 1px `{colors.hairline}`, cantos retos, padding 12×16px, altura 48px. Label acima em peso 600 cor `{colors.ink}`. Placeholder em `{colors.muted-soft}` peso 400.

**`text-input-focus`** — A border migra para 1px `{colors.primary}` (navy 900) e o shadow ganha `{shadows.focus-ring}` (anel duplo canvas+gold). Sinal claro de target ativo.

**`text-input-error`** — Border migra para 1px `{colors.destructive}` (red-900). Helper text abaixo do input em `{colors.destructive-text}` peso 500.

**`text-input-disabled`** — Fundo `{colors.surface-soft}`, texto e placeholder em `{colors.muted-soft}`, hairline `{colors.hairline-soft}`. Cursor not-allowed.

**`textarea`** — Extensão do text-input para mensagens longas (campo "Mensagem" na Etapa 2). Mesma mecânica de border, padding, hairline, mas com min-height 120px e resize vertical.

**`form-input-newsletter`** — Variante para o footer-dark. Fundo transparente, hairline `{colors.border-dark}` (primary-700), texto branco, placeholder em on-dark-muted. Aparece junto com `{component.form-input-newsletter-button}` à direita.

**`form-input-newsletter-button`** — Botão quadrado 44×44px com ícone send (paper-plane). Default: fundo `{colors.secondary-700}` (gold escuro, mais sóbrio para o footer). Hover: fundo `{colors.secondary}` pleno. O botão fica colado ao input, sem gap.

### CTA Band

**`cta-band-dark`** — Banda full-width navy que aparece no fim de quase toda página (home, sobre, aplicações, produtos). Padding 96×48px. Conteúdo centralizado: eyebrow ("— Fale conosco") em branco + h2 com mistura de cor branca/gold ("Se o seu projeto exige desempenho, **a escolha do fornecedor não pode ser comum**") + lead em on-dark-muted + button-primary "Solicitar orçamento". A banda usa imagem de fundo: foto escura de obra com overlay 50% navy, mantendo legibilidade do texto.

### Misc

**`whatsapp-block`** — Bloco específico da página Contato (não confundir com o `button-link-wpp`). Layout: ícone redondo verde (40px, fundo `{colors.wpp-green}` com ícone WhatsApp branco dentro) + título h5 navy + body muted + link "Falar pelo WhatsApp ↗" em verde. Separado do resto da página por hairlines superior e inferior em gold `{colors.secondary}` (única ocorrência de hairline gold no sistema — destaque deliberado).

**`whatsapp-icon`** — Círculo verde WhatsApp (#22C55E) 40×40px com ícone WhatsApp branco centralizado. Não tem hover; é estático.

**`icon-text-contact`** — Linha "ícone + texto" para telefone e email na página Contato. Ícone outline gold 20px + texto `{colors.muted}` 16px, gap 8px. Hover puxa o texto para `{colors.secondary}` (gold).

### Footer

**`footer-dark`** — Banda final do site. Fundo `{colors.surface-dark}` (navy 900), padding 48×48px. Hairline superior `{colors.border-dark}` (primary-700) separando do conteúdo. Grid 4 colunas: logo+tagline (~40%) / Links Rápidos (~20%) / Legal (~20%) / Newsletter (~20%). Hairline horizontal `{colors.border-dark}` separa as colunas do copyright na base.

**`footer-link`** — Link do footer-dark. Texto branco peso 400, 16px, padding vertical 4px. Hover migra para `{colors.secondary}` (gold).

**`footer-link-contact`** — Variante para links de email/telefone com ícone à esquerda. Texto `{colors.on-dark-muted}` peso 400, 14px, gap 8px do ícone. Ícone em gold outline.

### Brand

**`logo-mark-dark`** — Variante do logo para fundos claros. Monograma MPS em `{colors.secondary}` (gold), wordmark "MASTERPLY SOLUTIONS" em `{colors.primary}` (navy 900). Usado no `{component.top-nav-default}` e em quaisquer surfaces claras.

**`logo-mark-light`** — Variante para fundos escuros. Monograma MPS em `{colors.secondary}` (gold — não muda), wordmark em `{colors.on-dark}` (branco). Usado no `{component.top-nav-scroll}` e no `{component.footer-dark}`. O monograma permanece gold em ambas variantes — é a constante cromática da marca, o que torna o MPS reconhecível independente do contexto.

## Responsive Behavior

⚠ Os mocks fornecidos cobrem apenas o desktop em 1440px. A tabela abaixo é **inferida** a partir de padrões Tailwind/shadcn e da estrutura de grid observada nos componentes. As decisões de mobile precisam de validação contra um Figma mobile antes de irem para produção.

| Nome | Largura | Mudanças-chave |
|---|---|---|
| Mobile | < 640px | Top nav colapsa para logo + hamburger; dropdown "Serviços" abre como sheet fullscreen; hero vira 1-coluna (texto acima, imagem abaixo, gap 32px); application-row sempre coloca texto acima e foto abaixo (sem alternância de direção em mobile); cards de aplicação stack 1-up; card-numbered-dark vira 1-coluna; cta-band-dark mantém estrutura mas reduz padding vertical para 48px; form-card ocupa 100% da largura com padding 20px; footer-dark vira 1-coluna com Links Rápidos / Legal / Newsletter empilhados; logo no footer reduz proporcionalmente. |
| Tablet | 640–1024px | Top nav mantém links centrais mas comprime padding horizontal; hero vira 1-coluna empilhada ou mantém 2-coluna comprimida; application-row alterna direção em 2-coluna; cards stack 2-up; card-numbered-dark 2-up (01/02 em cima, 03/04 embaixo); form-card mantém ~560px de largura; footer vira 2-coluna. |
| Desktop | 1024–1440px | Grid completa: hero 2-col, application-row 2-col alternando, cards 3-up, footer 4-col. Padding lateral 48px, max-width 1280px centralizado. |
| Wide | > 1440px | Conteúdo permanece capeado em 1280px; o excesso vira gutter lateral. Banda dark (cta-band-dark, footer-dark) estende 100% da largura mas o conteúdo interno respeita o cap. |

### Touch Targets

- Botões primários e secundários: 48×48px mínimo (height 48px já cobre).
- Button-cta-nav no top-nav: 44×44px — borderline com WCAG AAA, aceitável porque o slot lateral do nav tem clearance generosa.
- Nav-links e dropdown-items: padding generoso (12×24px no dropdown, 8×4px com hit-area expandida no top-nav).
- Form-input-newsletter-button: 44×44px (paper-plane icon).
- Tabs do form-tabs: padding 12×24px — clica fácil.

### Collapsing Strategy

- Top-nav: links + dropdown colapsam para hamburger em mobile; o button-cta-nav "Contato" pode persistir como botão pill ao lado do hamburger (decisão de UX a validar).
- Application-row: em mobile, sempre stack vertical com texto acima e foto abaixo. **Não alterna direção** — alternância só faz sentido em viewport com 2 colunas reais.
- Cards: reduzem coluna, nunca reflow horizontal. 3-up no desktop → 2-up no tablet → 1-up no mobile.
- Hero: reduz para 1-coluna no mobile, mantém 2-coluna no tablet+ com comprimento ajustado.
- Footer: 4-col desktop → 2-col tablet → 1-col mobile (Newsletter sempre por último).
- Form multi-step: tabs continuam visíveis em mobile (são parte da hierarquia da página); inputs ocupam 100% da largura.

## Known Gaps

- **Mobile não validado em Figma.** A tabela responsiva acima é inferida. Antes de produção, validar pelo menos hero mobile, application-row mobile, footer mobile, e form-card mobile.
- **Estados focus/error/disabled/loading inferidos a partir dos tokens.** O Figma fornecido só desenha default + hover. Os estados foco (anel gold), erro (border red-900), disabled (cinza-200), loading (opacidade 0.7) foram criados com base nos tokens existentes no JSON (`focus ring 2px primary`, `colors.destructive`, etc.). Antes de usar em produção, validar acessibilidade do anel de foco gold (contraste mínimo de 3:1 contra o background) e definir o pattern preciso de loading (spinner inline ou substituição completa do conteúdo).
- **Ícones específicos por aplicação não documentados.** As 6 aplicações (Construção Civil, Piscinas de Alto Padrão, Parques Aquáticos, Eventos e Estruturas Temporárias, Containers e Estruturas Modulares, Grandes Empreendimentos) cada uma tem um ícone outline no card. Os ícones não foram exportados como SVGs no entregável — assumir que serão escolhidos do Lucide ou Heroicons-outline em momento de implementação.
- **Imagens de fundo do cta-band-dark.** A banda usa fotografia escura de obra com overlay 50%. As imagens específicas não foram entregues. Em desenvolvimento, usar uma foto documental de jobsite com overlay `{colors.scrim}` a 50% de opacidade até receber o asset definitivo.
- **Validação CDX e ícones de classificação técnica.** A página de blog menciona "Classificações técnicas (CDX) e o que elas significam" como artigo. Se o site precisar exibir essas classificações em produto, vai precisar de um componente de selo/badge técnico ainda não desenhado.
- **Integração com mapa / localização.** A página Contato menciona contato direto (telefone, email, WhatsApp) mas não há mapa de localização da empresa. Se for adicionado no futuro, definir um componente `location-map` com tile dark navy custom ou padrão Google Maps.
- **Variante NEW/BADGE não documentada.** O sistema não tem badge ou pill para sinalizar "novo produto" ou "destaque" — se essa necessidade surgir, criar um componente novo baseado em `{rounded.full}` + `{typography.eyebrow}` em uppercase com cor `{colors.secondary}` ou `{colors.success}`.
- **Tipografia "inline-code" tem zero uso confirmado.** O token existe (`{typography.inline-code}` em JetBrains Mono) como reserva caso o blog precise exibir specs técnicas (ex: "CDX-A"), mas nenhuma tela atual usa. Manter o token, validar uso real antes de carregar a fonte mono em produção.
- **Dark mode fora de escopo.** O shadcn mapping original do JSON aponta para slate.* (configuração dark genérica), mas foi descartado neste documento. Se a Masterply quiser dark mode no futuro, será um trabalho de re-mapping completo — não basta inverter cores, porque a paleta primary/secondary não tem equivalência simétrica nos tons claros vs escuros.
- **Componentes ainda não desenhados que provavelmente vão surgir.** Páginas de produto individual (cada compensado com sua own page), página de blog post (article layout), página de cases/portfólio, página 404, página de obrigado pós-form, modal de orçamento. Quando essas surgirem, os tokens existentes cobrem ~90% das necessidades — o que vai faltar é decisão editorial sobre headlines e estrutura.