// Especificações da empresa — alteração centralizada propaga para todos os textos legais.
export const companySpecs = {
  name: 'Masterply Solutions',
  domain: 'masterply.com.br',
  email: 'adm02@mpsmasterply.com',
  phone: '+55 (42) 99976-6932',
};

const lastUpdated = '21 de Maio de 2026';

// =========================================================
// Política de Privacidade
// =========================================================
export const privacyPolicyHtml = `
  <p class="lead">Última atualização: ${lastUpdated}</p>

  <h2>1. Introdução</h2>
  <p>A ${companySpecs.name} ("nós", "nosso") respeita a sua privacidade e está comprometida em proteger os dados pessoais que você compartilha conosco. Esta Política de Privacidade descreve como coletamos, utilizamos, armazenamos e protegemos as suas informações ao navegar pelo nosso site <strong>${companySpecs.domain}</strong>.</p>

  <h2>2. Quais dados coletamos</h2>
  <p>Coletamos apenas os dados estritamente necessários para fornecer os nossos serviços e responder ao seu contato. Entre os dados que podem ser coletados estão:</p>
  <ul>
    <li><strong>Dados de identificação:</strong> nome completo, empresa, e-mail e telefone — fornecidos voluntariamente em nossos formulários de contato e solicitação de orçamento.</li>
    <li><strong>Dados de navegação:</strong> endereço IP, tipo de navegador, páginas acessadas e tempo de permanência, coletados de forma automática por meio de cookies.</li>
  </ul>

  <h2>3. Como utilizamos seus dados</h2>
  <p>Utilizamos as informações coletadas para:</p>
  <ul>
    <li>Responder às solicitações de orçamento e suporte técnico enviadas pelos nossos canais oficiais;</li>
    <li>Enviar comunicações relacionadas aos nossos produtos, exclusivamente quando autorizado por você;</li>
    <li>Melhorar a experiência de navegação e analisar o desempenho do site;</li>
    <li>Atender obrigações legais, regulatórias ou requisições judiciais.</li>
  </ul>

  <h2>4. Compartilhamento de dados</h2>
  <p>A ${companySpecs.name} <strong>não comercializa</strong> dados pessoais. Compartilhamos suas informações apenas com prestadores de serviço estritamente necessários para a operação do site (hospedagem, e-mail e analytics), todos sujeitos a obrigações contratuais de confidencialidade e em conformidade com a LGPD (Lei nº 13.709/2018).</p>

  <h2>5. Direitos do titular</h2>
  <p>Como titular dos dados, você pode, a qualquer momento, solicitar:</p>
  <ul>
    <li>Confirmação da existência de tratamento dos seus dados;</li>
    <li>Acesso, correção, anonimização ou eliminação dos dados;</li>
    <li>Portabilidade dos dados a outro fornecedor;</li>
    <li>Revogação do consentimento previamente concedido.</li>
  </ul>
  <p>Para exercer qualquer um desses direitos, envie um e-mail para <a href="mailto:${companySpecs.email}">${companySpecs.email}</a>.</p>

  <h2>6. Segurança da informação</h2>
  <p>Adotamos medidas técnicas e administrativas razoáveis para proteger os dados pessoais contra acessos não autorizados, perdas acidentais e qualquer forma de tratamento inadequado.</p>

  <h2>7. Alterações desta Política</h2>
  <p>Esta Política pode ser atualizada periodicamente. Sempre que houver alterações relevantes, comunicaremos por meio do site <strong>${companySpecs.domain}</strong> ou via e-mail.</p>

  <h2>8. Contato</h2>
  <p>Em caso de dúvidas sobre esta Política ou sobre o tratamento dos seus dados, entre em contato pelo e-mail <a href="mailto:${companySpecs.email}">${companySpecs.email}</a>.</p>
`;

// =========================================================
// Termos de Uso
// =========================================================
export const termsOfUseHtml = `
  <p class="lead">Última atualização: ${lastUpdated}</p>

  <h2>1. Aceitação dos Termos</h2>
  <p>Ao acessar ou utilizar o site <strong>${companySpecs.domain}</strong> ("Site"), você concorda em cumprir e ficar vinculado a estes Termos de Uso. Se você não concorda com qualquer cláusula, recomendamos que interrompa o uso do Site imediatamente.</p>

  <h2>2. Objeto</h2>
  <p>O Site é mantido pela ${companySpecs.name} com a finalidade de apresentar informações institucionais, técnicas e comerciais sobre seus produtos e serviços. Não realizamos vendas diretamente pelo Site; todo contato comercial deve ser feito pelos canais oficiais de atendimento.</p>

  <h2>3. Uso permitido</h2>
  <p>Você concorda em utilizar o Site apenas para fins lícitos e em conformidade com estes Termos. É expressamente vedado:</p>
  <ul>
    <li>Reproduzir, copiar ou redistribuir o conteúdo do Site sem autorização prévia e por escrito da ${companySpecs.name};</li>
    <li>Utilizar mecanismos automatizados (bots, crawlers) para coletar informações em massa;</li>
    <li>Tentar acessar áreas restritas, dados de outros usuários ou interferir na operação do Site;</li>
    <li>Praticar qualquer ato que viole a legislação brasileira ou os direitos de terceiros.</li>
  </ul>

  <h2>4. Propriedade intelectual</h2>
  <p>Todos os textos, imagens, marcas, logotipos, layouts, ícones, código-fonte e demais elementos exibidos no Site são de propriedade exclusiva da ${companySpecs.name} ou de seus licenciadores, protegidos pelas leis de propriedade intelectual brasileiras e internacionais.</p>

  <h2>5. Limitação de responsabilidade</h2>
  <p>O Site é fornecido "no estado em que se encontra". Embora envidemos os melhores esforços para manter as informações precisas e atualizadas, a ${companySpecs.name} não se responsabiliza por:</p>
  <ul>
    <li>Eventuais erros, omissões ou descontinuidades de funcionamento;</li>
    <li>Decisões técnicas tomadas exclusivamente com base no conteúdo do Site, sem consulta prévia à nossa equipe;</li>
    <li>Danos diretos ou indiretos resultantes do uso ou da impossibilidade de uso do Site.</li>
  </ul>

  <h2>6. Alterações dos Termos</h2>
  <p>A ${companySpecs.name} pode atualizar estes Termos a qualquer momento. As versões atualizadas serão publicadas no próprio Site, sendo recomendada a consulta periódica.</p>

  <h2>7. Foro</h2>
  <p>Estes Termos são regidos pelas leis brasileiras. Fica eleito o foro da comarca onde está estabelecida a ${companySpecs.name} para dirimir quaisquer controvérsias decorrentes da relação aqui descrita.</p>

  <h2>8. Contato</h2>
  <p>Dúvidas sobre estes Termos podem ser encaminhadas para <a href="mailto:${companySpecs.email}">${companySpecs.email}</a>.</p>
`;

// =========================================================
// Política de Cookies
// =========================================================
export const cookiePolicyHtml = `
  <p class="lead">Última atualização: ${lastUpdated}</p>

  <h2>1. O que são cookies</h2>
  <p>Cookies são pequenos arquivos de texto armazenados pelo seu navegador quando você visita um site. Eles ajudam a lembrar de preferências, manter sessões abertas e fornecer dados sobre como o site é utilizado.</p>

  <h2>2. Como o ${companySpecs.name} usa cookies</h2>
  <p>O site <strong>${companySpecs.domain}</strong> utiliza cookies para os seguintes propósitos:</p>
  <ul>
    <li><strong>Essenciais:</strong> garantem o funcionamento básico do site, como envio de formulários e segurança.</li>
    <li><strong>Analíticos:</strong> nos ajudam a entender quais páginas são mais acessadas, como a navegação flui e onde podemos melhorar a experiência. Os dados são tratados de forma agregada e anônima.</li>
    <li><strong>Preferências:</strong> registram escolhas como o aceite deste aviso, evitando que ele seja exibido repetidamente.</li>
  </ul>

  <h2>3. Gerenciamento de cookies</h2>
  <p>Você pode controlar e/ou apagar cookies a qualquer momento por meio das configurações do seu navegador. É importante saber, no entanto, que desativar cookies pode comprometer parcialmente a navegação no Site.</p>
  <ul>
    <li>Em navegadores como Google Chrome, Safari, Firefox e Edge, as opções de cookies costumam ficar em <em>Configurações &gt; Privacidade e Segurança</em>.</li>
    <li>Cookies de terceiros podem ser desativados diretamente nas configurações de cada provedor (ex.: Google Analytics).</li>
  </ul>

  <h2>4. Consentimento</h2>
  <p>Ao acessar o Site, é exibido um aviso na parte inferior da tela informando o uso de cookies. Ao continuar navegando ou ao clicar em "Aceitar e fechar", você manifesta o seu consentimento, em conformidade com a LGPD (Lei nº 13.709/2018).</p>

  <h2>5. Atualizações</h2>
  <p>Esta Política de Cookies pode ser revisada periodicamente. A versão mais atual estará sempre disponível em <strong>${companySpecs.domain}</strong>.</p>

  <h2>6. Contato</h2>
  <p>Para mais informações sobre o uso de cookies pelo ${companySpecs.name}, escreva para <a href="mailto:${companySpecs.email}">${companySpecs.email}</a>.</p>
`;
