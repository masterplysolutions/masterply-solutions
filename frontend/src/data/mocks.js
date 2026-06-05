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
  },
  {
    id: "compensado-antiderrapante",
    title: "Compensado Antiderrapante",
    description: "Desenvolvido para coberturas e plataformas que exigem máxima segurança, estabilidade e aderência, mesmo quando molhadas. Com uma superfície texturizada de alta resistência, previne acidentes e suporta cargas pesadas em ambientes industriais e logísticos.",
    benefits: [
      "Máxima segurança: Textura em relevo que evita escorregamentos",
      "Alta resistência mecânica: Suporta tráfego intenso e movimentação de cargas",
      "Durabilidade estendida: Barreira altamente resistente ao desgaste físico e às intempéries"
    ],
    applications: [
      "Pisos de caminhões, carretas, containers e vagões",
      "Plataformas de trabalho, andaimes e passarelas operacionais",
      "Arquibancadas, palcos e estruturas para eventos de grande porte"
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
    category: "Especificação Técnica",
    date: "2026-05-20",
    excerpt: "Descubra as diferenças técnicas entre painéis plastificados e navais para garantir a segurança e a produtividade nas fôrmas de concreto de prédios altos.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80",
    content: [
      "Em projetos de construção civil vertical de grande porte, as fôrmas de concreto armado desempenham um papel crítico tanto na segurança estrutural quanto na velocidade do ciclo de concretagem de lajes e pilares. A escolha incorreta das chapas de compensado pode causar deformações visíveis no concreto, atrasos no cronograma e elevados custos adicionais ao longo da execução.",
      "Os compensados plastificados oferecem uma película lisa que facilita o desmolde e garante excelente acabamento superficial do concreto, sendo a escolha preferida para concreto aparente e estruturas com exigência estética. Já os compensados navais se destacam pela colagem WBP feno-marítima, sendo ideais para áreas sujeitas a umidade severa ou ciclos de chuva intensos antes da concretagem.",
      "Para otimizar o orçamento, o engenheiro deve avaliar o custo por ciclo de uso (custo/benefício). Um painel com preço ligeiramente maior que garante 25 reaproveitamentos é muito mais econômico a longo prazo do que um painel de baixo custo que delamina após 5 usos. A planilha de custos por ciclo deveria fazer parte da especificação técnica de qualquer obra vertical acima de 10 pavimentos.",
      "Além disso, o tipo de estrutura influencia diretamente a espessura recomendada: lajes nervuradas exigem chapas mais espessas (18 a 20 mm), enquanto pilares e vigas podem trabalhar com 15 a 18 mm. Esses ajustes finos no projeto evitam empenamento e garantem repetibilidade do acabamento ao longo de todo o ciclo construtivo."
    ]
  },
  {
    id: "2",
    slug: "boas-praticas-conservacao-formas-compensado",
    title: "5 boas práticas de conservação para dobrar os usos das suas fôrmas",
    category: "Construção Civil",
    date: "2026-05-15",
    excerpt: "Dicas essenciais de armazenamento, desmolde e limpeza industrial para preservar as bordas e a película das suas chapas de compensado plastificado.",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1600&q=80",
    content: [
      "A durabilidade de uma fôrma de compensado depende quase inteiramente das práticas de manuseio e armazenamento no canteiro de obras. Pequenos cuidados diários podem estender a vida útil das chapas, reduzindo drasticamente a necessidade de novas compras durante a execução do projeto e o impacto no cronograma físico-financeiro.",
      "A primeira prática crítica é a selagem das bordas: sempre que realizar cortes em obra, aplique imediatamente tinta seladora hidrorrepelente nas bordas expostas para evitar a penetração de umidade — principal causa de delaminação prematura. Esse detalhe sozinho pode dobrar a vida útil da chapa em ambientes de alta umidade.",
      "Outra prática essencial é o uso correto de desmoldantes. Prefira desmoldantes químicos de base aquosa ou oleosa específicos para compensados plastificados, e evite óleos queimados ou solventes agressivos. O desmoldante errado ataca a película protetora e acelera o desgaste superficial em poucos ciclos.",
      "A limpeza pós-uso deve ser feita com espátulas plásticas ou de madeira para retirar resíduos de concreto. Ferramentas metálicas afiadas arranham a película e criam pontos de entrada para umidade. Por fim, armazene as chapas horizontalmente sobre caibros nivelados em local seco e ventilado, cobertas para proteção contra sol e chuva — o empilhamento incorreto é uma das principais causas de empenamento."
    ]
  },
  {
    id: "3",
    slug: "futuro-manejo-florestal-sustentavel-madeira",
    title: "O futuro do manejo florestal sustentável na produção de compensados",
    category: "Normatização",
    date: "2026-05-10",
    excerpt: "Como as certificações florestais FSC garantem a rastreabilidade da madeira e o compromisso ambiental nos materiais estruturais modernos.",
    image: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=80",
    content: [
      "A busca por edificações sustentáveis (Green Buildings) exige que cada insumo utilizado na obra possua origem comprovada e ecologicamente correta. Na indústria da madeira e do compensado estrutural, o manejo florestal sustentável é o principal pilar para garantir o suprimento contínuo sem comprometer a biodiversidade nacional.",
      "Selos internacionais como o FSC (Forest Stewardship Council) garantem que a madeira utilizada para fabricação das lâminas do compensado provém de florestas plantadas e geridas de forma responsável, respeitando os direitos trabalhistas e a legislação florestal local. A rastreabilidade vai do plantio à entrega na obra, com Chain of Custody auditada anualmente.",
      "Ao especificar painéis certificados, as construtoras não apenas pontuam em certificações de sustentabilidade (como LEED, AQUA-HQE e EDGE), mas também se associam a uma cadeia produtiva transparente e regenerativa. Em licitações públicas e em obras de alto padrão, a certificação FSC tem deixado de ser diferencial para se tornar requisito mínimo.",
      "O setor caminha rapidamente para um modelo onde o passaporte digital do material — incluindo emissão de CO₂ por chapa, origem das lâminas e ciclo de vida estimado — será exigido por padrão. Fornecedores que se antecipam a essa transição saem na frente."
    ]
  },
  {
    id: "4",
    slug: "nbr-7203-classificacao-compensados-estruturais",
    title: "NBR 7203: o que muda na classificação de compensados estruturais",
    category: "Normatização",
    date: "2026-05-05",
    excerpt: "Entenda como a norma técnica brasileira estabelece os parâmetros de qualidade e quais alterações recentes impactam diretamente a especificação em obra.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80",
    content: [
      "A NBR 7203 é a principal referência normativa para classificação de compensados de madeira no Brasil. Ela define os critérios de qualidade, tolerâncias dimensionais e categorias de uso aplicáveis a chapas estruturais — e a sua atualização recente trouxe mudanças significativas para o setor de construção pesada.",
      "Entre as principais alterações está a redefinição das categorias por tipo de colagem (interior, exterior e marítima) e a exigência de identificação clara da resina utilizada (ureia-formaldeído, melamina ou fenólica). Essa transparência impacta diretamente a escolha do material em projetos com exposição à umidade.",
      "Para o engenheiro especificador, isso significa que a planilha técnica do projeto deve indicar não apenas a espessura e dimensão da chapa, mas também a categoria normativa e o tipo de colagem exigido. Ignorar esse detalhe pode resultar em recusa de fiscalização e necessidade de retrabalho — algo crítico em obras públicas e empreendimentos certificados.",
      "Os fornecedores também precisam adequar seus laudos técnicos e fichas de produto, incluindo o ensaio de resistência ao cisalhamento e o resultado do teste de fervura. Quem opera sob essa norma com rigor entrega um produto auditável e protege a obra contra surpresas estruturais."
    ]
  },
  {
    id: "5",
    slug: "compensado-naval-vs-plastificado-pisos-industriais",
    title: "Compensado Naval vs. Plastificado: diferença real em pisos industriais",
    category: "Especificação Técnica",
    date: "2026-04-28",
    excerpt: "Análise comparativa entre as duas chapas mais usadas em pisos de canteiro, com critérios objetivos de durabilidade, resistência e custo por m².",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1600&q=80",
    content: [
      "Quando o assunto é piso provisório para canteiro de obras industriais, a dúvida recorrente entre engenheiros e gerentes de obra é: vale mais a pena especificar compensado naval ou plastificado? A resposta correta depende de três variáveis principais — exposição à água, carga prevista e expectativa de reuso após a obra.",
      "O compensado plastificado oferece superfície extremamente lisa, ideal para piso de áreas com grande circulação de carrinhos e equipamentos com rodas. A película protege contra abrasão moderada e mantém o piso limpo. No entanto, em áreas com poças permanentes ou exposição contínua à intempérie, a película pode se deteriorar e descolar das bordas em 4 a 6 meses.",
      "Já o compensado naval, fabricado com colagem feno-marítima WBP, é a escolha técnica correta para áreas externas e locais permanentemente úmidos. Embora o custo inicial seja entre 25% e 40% superior, a estabilidade dimensional sob umidade severa garante vida útil de 18 a 24 meses em piso industrial — quase três vezes a vida útil do plastificado em condições similares.",
      "A recomendação prática: utilize plastificado em áreas internas cobertas e naval em pátios externos, rampas de acesso e zonas próximas a lavagem de equipamentos. Essa combinação reduz o custo total do projeto em até 30% em comparação com a especificação única."
    ]
  },
  {
    id: "6",
    slug: "formas-concreto-aparente-evitar-marcas-bolhas",
    title: "Fôrmas para concreto aparente: como evitar marcas e bolhas na estrutura",
    category: "Construção Civil",
    date: "2026-04-20",
    excerpt: "Técnicas práticas de preparação, desmolde e vibração para garantir uma superfície de concreto impecável em projetos arquitetônicos exigentes.",
    image: "https://images.unsplash.com/photo-1503387837-b154d5074bd2?auto=format&fit=crop&w=1600&q=80",
    content: [
      "Concreto aparente é uma técnica construtiva onde a superfície estrutural do concreto se torna o próprio acabamento da obra. Por isso, qualquer marca, bolha ou variação de tonalidade fica visível para sempre — e a qualidade da fôrma é o fator número um para determinar o resultado final.",
      "O primeiro passo é a escolha do compensado: chapas plastificadas com película de alta densidade (HDO) entregam superfície lisa e replicável, com mínima absorção de água da pasta de cimento. Chapas com película de baixa densidade ou plastificadas de segunda linha geralmente apresentam variação de tonalidade entre paineis adjacentes.",
      "A vedação das juntas é tão importante quanto a chapa em si. Use fitas de poliuretano expansivo nas emendas e selantes nos furos de espaçadores — qualquer fresta vira marca permanente no concreto. O desmolde também deve ser aplicado em camada uniforme e fina, evitando excesso que acumula em depressões da fôrma.",
      "Durante a concretagem, a vibração precisa ser controlada: vibração excessiva expulsa o cimento e deixa agregado exposto; vibração insuficiente deixa bolhas de ar aprisionadas contra a fôrma. O ideal é vibrar em camadas de 30 a 50 cm, com vibrador de imersão posicionado a 20 cm da fôrma."
    ]
  },
  {
    id: "7",
    slug: "selagem-bordas-vida-util-chapa-compensado",
    title: "Selagem de bordas: o detalhe invisível que dobra a vida útil da chapa",
    category: "Construção Civil",
    date: "2026-04-12",
    excerpt: "Por que tratar as bordas após o corte é a prática mais subestimada do canteiro — e como aplicá-la em escala industrial sem perder tempo de obra.",
    image: "https://images.unsplash.com/photo-1581234692543-9647e5a4ba94?auto=format&fit=crop&w=1600&q=80",
    content: [
      "Toda chapa de compensado plastificado sai de fábrica com as bordas seladas industrialmente. Mas no canteiro de obras, basta um único corte para expor as lâminas internas — e é exatamente por ali que a água começa a destruir a chapa de dentro para fora.",
      "Estudos do setor mostram que mais de 70% das delaminações precoces em fôrmas de compensado começam nas bordas cortadas e não tratadas. A penetração de umidade entre as lâminas inicia um processo de inchamento que arranca a película e compromete toda a chapa em poucos ciclos de uso.",
      "A boa notícia: aplicar selador hidrorrepelente na borda recém-cortada leva menos de 30 segundos por corte. Use selador acrílico ou poliuretânico de secagem rápida, aplicado com pincel ou rolo pequeno diretamente sobre as lâminas expostas. Em obras de médio porte, basta posicionar um operário com kit de selagem ao lado da serra para tratar todas as chapas em tempo real.",
      "O retorno é direto: chapas com bordas seladas em obra duram em média 60% mais do que chapas com bordas expostas. Para um projeto com 800 chapas, isso significa centenas de painéis a menos comprados durante a execução — e cronograma protegido contra falta de material."
    ]
  },
  {
    id: "8",
    slug: "certificacao-fsc-leed-pontuacao-obras",
    title: "Certificação FSC e LEED: como compensados certificados pontuam em obras",
    category: "Normatização",
    date: "2026-04-05",
    excerpt: "Guia objetivo para entender o impacto das certificações ambientais na pontuação LEED e quais documentos exigir do fornecedor de compensados.",
    image: "https://images.unsplash.com/photo-1473773508845-188df298d2d1?auto=format&fit=crop&w=1600&q=80",
    content: [
      "Certificações ambientais deixaram de ser opcionais em obras de grande porte. LEED, AQUA-HQE, EDGE e WELL exigem que os materiais utilizados tenham origem comprovada e baixo impacto ambiental. Para compensados estruturais, a certificação FSC é o principal documento que destrava pontuação nessas avaliações.",
      "Na metodologia LEED, o crédito MR Sourcing of Raw Materials reconhece materiais com cadeia de custódia rastreável (FSC, PEFC ou equivalente). Cada compensado certificado entregue na obra com nota fiscal vinculada ao certificado do fornecedor contribui para esse crédito — desde que o fornecedor mantenha a Chain of Custody (CoC) válida e auditada.",
      "Para o engenheiro responsável pela documentação técnica, a recomendação prática é exigir três documentos no fechamento da compra: o certificado FSC do fornecedor com número de validade, a declaração de produto certificado (com percentual de fibra certificada) e a nota fiscal com o código FSC explícito. Sem esses três documentos, o material não pontua na auditoria LEED.",
      "Vale lembrar que a certificação FSC não eleva significativamente o custo do compensado em si — a maior parte dos fornecedores estruturais sérios já trabalha com madeira certificada por padrão. O que muda é o rigor documental e a obrigação de manter o rastro até a entrega na obra."
    ]
  },
  {
    id: "9",
    slug: "logistica-jit-grandes-empreendimentos",
    title: "Logística JIT para grandes empreendimentos: entregas sem parar a obra",
    category: "Construção Civil",
    date: "2026-03-28",
    excerpt: "Como organizar entregas Just-in-Time de compensados em obras de grande escala, evitando estoques inflacionados e ruptura de cronograma.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1600&q=80",
    content: [
      "Grandes empreendimentos enfrentam um dilema logístico clássico: estocar muito material gera custos financeiros, ocupa área útil do canteiro e expõe as chapas à intempérie; estocar pouco gera risco de ruptura no ciclo de concretagem e parada da obra. A resposta moderna se chama JIT — Just-in-Time.",
      "Implementar logística JIT para compensados exige três condições básicas: fornecedor com capacidade industrial real (não atravessador), planejamento físico-financeiro detalhado da obra com previsão de consumo semana a semana, e um canal de comunicação direto e contínuo entre o gerente de obra e o coordenador logístico do fornecedor.",
      "Na prática, isso significa entregas semanais ou quinzenais dimensionadas para o consumo previsto, sem buffer excessivo. O canteiro mantém apenas estoque de segurança equivalente a 5 a 7 dias de consumo, o que reduz o capital imobilizado, libera área e evita perdas por intempérie ou furto.",
      "O segredo do JIT é a confiabilidade do fornecedor. Em obras críticas, vale priorizar parceiros com frota própria, estoque industrial regional e contratos com cláusula de multa por atraso. O custo pode ser ligeiramente maior, mas a previsibilidade da execução compensa amplamente em projetos de grande porte."
    ]
  }
];
