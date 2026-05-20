/**
 * Central de Dados Estáticos e Mocks da Masterply Solutions
 * Este arquivo centraliza os textos e informações estruturadas das páginas.
 */

// 1. Aplicações core da Masterply (6 aplicações principais)
export const STATIC_APPLICATIONS = [
  {
    id: "construcao-civil",
    title: "Construção Civil",
    tag: "Estrutural",
    description: "Fôrmas para concreto armado com alta durabilidade e índice elevado de reaproveitamento em pilares, lajes e vigas.",
    imageSrc: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "piscinas",
    title: "Piscinas",
    tag: "Impermeável",
    description: "Compensados com colagem fenólica WBP adequados para fôrmas em estruturas de contenção de água com acabamento liso e uniforme.",
    imageSrc: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "parques-aquaticos",
    title: "Parques Aquáticos",
    tag: "Alta Resistência",
    description: "Painéis projetados para suportar intempéries constantes e contato permanente com umidade severa e agentes químicos.",
    imageSrc: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "eventos",
    title: "Eventos",
    tag: "Cargas Elevadas",
    description: "Pisos e estruturas provisórias de palcos, arquibancadas e passarelas com alto desempenho sob tráfego intenso.",
    imageSrc: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "containers",
    title: "Containers",
    tag: "Revestimento",
    description: "Soluções resistentes e leves para pisos de containers, revestimentos internos e isolamentos termoacústicos de alta durabilidade.",
    imageSrc: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "grandes-empreendimentos",
    title: "Grandes Empreendimentos",
    tag: "Infraestrutura",
    description: "Fôrmas especiais para pontes, viadutos, usinas e grandes obras industriais que demandam alto rigor técnico.",
    imageSrc: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80"
  }
];

// 2. Produtos core (3 produtos principais)
export const STATIC_PRODUCTS = [
  {
    id: "compensado-plastificado",
    title: "Compensado Plastificado",
    description: "Chapa de madeira de alta qualidade revestida com filme plástico premium em ambas as faces, projetada para múltiplos reaproveitamentos.",
    benefits: [
      "Alto índice de reutilização (mais de 20 usos seguindo recomendações)",
      "Acabamento do concreto extremamente liso e homogêneo",
      "Resistência superior à umidade devido à selagem de bordas de fábrica",
      "Fácil desmolde e limpeza rápida em canteiro"
    ],
    applications: [
      "Lajes planas e inclinadas",
      "Vigas e pilares de concreto armado",
      "Muros de contenção e fundações",
      "Obras residenciais e comerciais de médio a grande porte"
    ]
  },
  {
    id: "filme-faced",
    title: "Filme Faced",
    description: "Painel de compensado estrutural com película fenólica de alta densidade (MDO/HDO) para aplicações que exigem extrema resistência ao desgaste.",
    benefits: [
      "Película fenólica impermeabilizada de alta densidade",
      "Excelente relação resistência/peso para montagens ágeis",
      "Bordas tratadas com selador acrílico hidrorrepelente",
      "Suporta condições severas de canteiro de obras"
    ],
    applications: [
      "Grandes fôrmas modulares de concreto",
      "Infraestrutura pesada (pontes, túneis e viadutos)",
      "Pisos industriais e plataformas de carregamento",
      "Estruturas expostas a intempéries"
    ]
  },
  {
    id: "compensado-naval",
    title: "Compensado Naval",
    description: "Chapa fabricada com lâminas selecionadas de madeira reflorestada e colagem fenólica marítima WBP, garantindo total resistência à água e delaminação.",
    benefits: [
      "Colagem 100% à prova d'água (Feno-marítima WBP)",
      "Resistência imbatível à delaminação sob fervura ou umidade extrema",
      "Estrutura interna sem vazios (Selected core para máxima solidez)",
      "Fácil de usinar, cortar e fixar com pregos ou parafusos"
    ],
    applications: [
      "Ambientes externos com alta umidade",
      "Embarcações e mobiliários náuticos",
      "Pisos de carrocerias e furgões frigoríficos",
      "Fôrmas para concreto com alta exigência de estanqueidade"
    ]
  }
];

// 3. Serviços e Soluções de engenharia
export const STATIC_SERVICES = [
  {
    id: "corte-personalizado-cnc",
    title: "Corte Personalizado CNC",
    description: "Usinagem e corte de precisão em chapas de compensado direto de fábrica para atender projetos com dimensões e encaixes sob medida."
  },
  {
    id: "tratamento-impermeabilizante",
    title: "Tratamento de Bordas",
    description: "Aplicação industrial de selador acrílico hidrorrepelente nas bordas de chapas cortadas, prevenindo a absorção de umidade e delaminação precoce."
  },
  {
    id: "assessoria-tecnica",
    title: "Assessoria Técnica em Canteiro",
    description: "Consultoria técnica especializada de engenharia para especificação ideal de fôrmas, técnicas de desmolde e conservação para maximizar reaproveitamentos."
  },
  {
    id: "logistica-integrada",
    title: "Logística Integrada e Rápida",
    description: "Frota própria e parcerias estratégicas para garantir a entrega rápida e pontual de grandes volumes de compensado diretamente nas obras no Brasil inteiro."
  }
];

// 4. Mock de Artigos do Blog (Listagem provisória antes do Sanity)
export const MOCK_POSTS = [
  {
    id: "1",
    slug: "como-escolher-compensado-ideal-obras-verticais",
    title: "Como escolher o compensado ideal para obras verticais de grande porte",
    category: "Engenharia",
    date: "20 de Maio de 2026",
    excerpt: "Descubra as diferenças técnicas entre painéis plastificados e navais para garantir a segurança e a produtividade nas fôrmas de concreto de prédios altos.",
    content: `
      <h2>A Importância da Especificação Correta</h2>
      <p>Em projetos de construção civil vertical de grande porte, as fôrmas de concreto armado desempenham um papel crítico tanto na segurança estrutural quanto na velocidade do ciclo de concretagem de lajes e pilares. A escolha incorreta das chapas de compensado pode causar deformações visíveis no concreto, atrasos no cronograma e elevados custos adicionais.</p>
      
      <h3>1. Compensados Plastificados vs. Navais</h3>
      <p>Os compensados plastificados oferecem uma película lisa que facilita a desforma e garante excelente acabamento superficial do concreto. Já os compensados navais se destacam pela colagem WBP feno-marítima, sendo ideais para áreas sujeitas a umidade severa ou ciclos de chuva intensos antes da concretagem final.</p>
      
      <h3>2. O Fator Reaproveitamento</h3>
      <p>Para otimizar o orçamento, o engenheiro deve avaliar o custo por ciclo de uso (custo/benefício). Um painel com preço ligeiramente maior que garante 25 reaproveitamentos é muito mais econômico a longo prazo do que um painel de baixo custo que delamina após 5 usos.</p>
    `
  },
  {
    id: "2",
    slug: "boas-praticas-conservacao-formas-compensado",
    title: "5 boas práticas de conservação para dobrar os usos das suas fôrmas",
    category: "Canteiro de Obras",
    date: "15 de Maio de 2026",
    excerpt: "Dicas essenciais de armazenamento, desmolde e limpeza industrial para preservar as bordas e a película das suas chapas de compensado plastificado.",
    content: `
      <h2>Maximize o Retorno do seu Investimento</h2>
      <p>A durabilidade de uma fôrma de compensado depende quase que inteiramente das práticas de manuseio e armazenamento no canteiro de obras. Pequenos cuidados diários podem estender a vida útil das chapas, reduzindo drasticamente a necessidade de novas compras durante a execução do projeto.</p>
      
      <h3>Principais Cuidados Recomendados</h3>
      <ul>
        <li><strong>Selagem das Bordas:</strong> Sempre que realizar cortes em obra, aplique imediatamente tinta seladora hidrorrepelente nas bordas expostas para evitar a penetração de umidade.</li>
        <li><strong>Uso de Desmoldante Adequado:</strong> Utilize desmoldantes químicos de base aquosa ou oleosa adequados para compensados plastificados. Evite óleos queimados ou solventes agressivos.</li>
        <li><strong>Limpeza Pós-Uso:</strong> Utilize espátulas plásticas ou de madeira para retirar resíduos de concreto das chapas. Ferramentas metálicas afiadas podem arranhar a película protetora.</li>
        <li><strong>Armazenamento Plano:</strong> Guarde as chapas horizontalmente sobre caibros nivelados em local seco e ventilado, cobertas para proteção contra sol e chuva intensos.</li>
      </ul>
    `
  },
  {
    id: "3",
    slug: "futuro-manejo-florestal-sustentavel-madeira",
    title: "O futuro do manejo florestal sustentável na produção de compensados",
    category: "Sustentabilidade",
    date: "10 de Maio de 2026",
    excerpt: "Como as certificações florestais FSC garantem a rastreabilidade da madeira e o compromisso ambiental nos materiais estruturais modernos.",
    content: `
      <h2>Compromisso Ambiental na Construção Civil</h2>
      <p>A busca por edificações sustentáveis (Green Buildings) exige que cada insumo utilizado na obra possua origem comprovada e ecologicamente correta. Na indústria da madeira e do compensado estrutural, o manejo florestal sustentável é o principal pilar para garantir o suprimento contínuo sem comprometer a biodiversidade nacional.</p>
      
      <h3>O papel das certificações</h3>
      <p>Selos internacionais como o FSC (Forest Stewardship Council) garantem que a madeira utilizada para fabricação das lâminas do compensado provém de florestas plantadas e geridas de forma responsável, respeitando os direitos trabalhistas e a legislação florestal local.</p>
      
      <p>Ao especificar painéis certificados, as construtoras não apenas pontuam em certificações de sustentabilidade (como a certificação LEED), mas também se associam a uma cadeia produtiva transparente e regenerativa.</p>
    `
  }
];
