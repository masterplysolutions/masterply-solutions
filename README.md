# Masterply Solutions - Site Institucional Corporativo

## 🤖 REGRAS OBRIGATÓRIAS PARA IA (AI RULES)
**ATENÇÃO AGENTES DE IA (Claude, Cursor, Windsurf, Antigravity):**
Antes de criar, sugerir ou editar qualquer componente visual (React, Tailwind CSS v4) ou estrutural neste repositório, você **DEVE OBRIGATORIAMENTE** ler o arquivo `DESIGN.md` localizado na raiz deste projeto. 

DIRETRIZ DE REUTENSILIZAÇÃO: Antes de criar qualquer seção ou página, o agente DEVE ler a pasta 'src/components/ui/' e o arquivo 'src/pages/ComponentLibrary.jsx' para mapear os componentes já existentes (Buttons, Links, Checklist, Eyebrows). É terminantemente PROIBIDO recriar estilos utilitários na unha para elementos já componentizados. Caso um elemento primitivo necessário não exista na biblioteca, o agente deve criá-lo na pasta 'ui/', registrá-lo na biblioteca de componentes, e aí sim utilizá-lo na seção.

Utilize EXCLUSIVAMENTE os tokens de cores (escala Primary Navy e Secondary Gold), tipografia (apenas Montserrat), hairlines e o sistema de espaçamento flat definidos lá. **NUNCA** invente valores arbitrários, cores fora da paleta (ex: azul padrão de Tailwind), ou adicione sombras (shadows) pesadas, visto que o design foca em separação por linhas (`hairlines`).


---

## 📌 Sobre o Projeto
Plataforma institucional premium desenvolvida para a Masterply Solutions (B2B). A arquitetura visual recusa deliberadamente a estética comum de madeireiras (marrom, verde) e adota uma postura de autoridade de engenharia/banco (Navy `#18213C` e detalhes em Gold `#C89B3D`). O projeto é concebido em uma arquitetura monorepo Jamstack para integrar futuramente com Headless CMS (Sanity.io).

## 🛠 Tecnologias
- **Framework:** React.js + Vite
- **Estilização:** Tailwind CSS v4 (Configurado nativamente no `index.css`)
- **Ícones:** Lucide React
- **Micro-interações e Animações:** Motion (Framer Motion)
- **CMS (Futuro):** Sanity.io
- **Roteamento:** React Router DOM v7

## 🚀 Como Executar Localmente
Este repositório suporta uma arquitetura monorepo. O aplicativo React principal vive dentro do diretório `frontend/`.

1. Acesse o diretório do frontend:
   `cd frontend`

2. Instale todas as dependências:
   `npm install`

3. Inicie o servidor local de desenvolvimento (Vite):
   `npm run dev`

---
*Documentação mantida com rigor arquitetônico e design system unificado para interação segura com IA e Agentes Autônomos.*
