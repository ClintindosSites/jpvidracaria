import { company } from "@/data/company";

export const privacyUpdatedAt = "25/11/2026";

export const privacySections = [
  {
    id: "introducao",
    title: "Introdução",
    paragraphs: [
      `A ${company.name} respeita a privacidade dos visitantes de seu site e está comprometida com a proteção dos dados pessoais tratados durante a utilização de seus canais digitais.`,

      "Esta Política de Privacidade apresenta informações sobre a coleta, utilização, armazenamento e compartilhamento de dados pessoais, observando a Lei Geral de Proteção de Dados Pessoais (LGPD — Lei nº 13.709/2018).",
    ],
  },
  {
    id: "dados-coletados",
    title: "Dados pessoais coletados",
    paragraphs: [
      "Durante a utilização do site, poderemos tratar informações fornecidas voluntariamente pelo visitante e informações relacionadas à sua navegação.",
    ],
    items: [
      "Nome informado no formulário de orçamento.",
      "Bairro, cidade ou localização informada pelo visitante.",
      "Serviço desejado e informações sobre o projeto.",
      "Número de telefone e demais informações compartilhadas durante o atendimento pelo WhatsApp.",
      "Endereço IP, informações do navegador e dispositivo, quando coletados pelas ferramentas utilizadas no site.",
      "Informações sobre páginas visitadas e interações com o site, quando utilizadas ferramentas de análise.",
    ],
  },
  {
    id: "finalidades",
    title: "Utilização dos dados pessoais",
    paragraphs: [
      "Os dados pessoais poderão ser utilizados para as seguintes finalidades:",
    ],
    items: [
      "Responder solicitações de atendimento.",
      "Elaborar e apresentar orçamentos personalizados.",
      "Prestar informações sobre produtos e serviços.",
      "Viabilizar a contratação e execução dos serviços.",
      "Melhorar a experiência de navegação no site.",
      "Avaliar o desempenho de campanhas publicitárias, quando aplicável.",
      "Cumprir obrigações legais e regulatórias.",
    ],
  },
  {
    id: "bases-legais",
    title: "Bases legais para o tratamento",
    paragraphs: [
      "O tratamento dos dados pessoais será realizado de acordo com as bases legais previstas na LGPD, conforme a finalidade e as circunstâncias de cada tratamento.",
      "Essas bases poderão incluir a realização de procedimentos preliminares relacionados à contratação de serviços, a execução de contratos, o cumprimento de obrigações legais, o legítimo interesse devidamente avaliado e o consentimento do titular, quando aplicável.",
    ],
  },
  {
    id: "whatsapp",
    title: "Formulários e atendimento pelo WhatsApp",
    paragraphs: [
      `O formulário de orçamento disponibilizado no site da ${company.name} tem como finalidade facilitar o contato entre o visitante e nossa equipe.`,

      "As informações preenchidas são utilizadas para montar uma mensagem de atendimento e direcionar o visitante ao WhatsApp, onde poderá confirmar o envio.",

      "O formulário não possui banco de dados próprio para armazenar as informações preenchidas. Entretanto, após o envio da mensagem, os dados poderão permanecer registrados nas conversas e nos sistemas utilizados para atendimento.",

      "A utilização do WhatsApp também está sujeita aos termos e à política de privacidade da própria plataforma.",
    ],
  },
  {
    id: "cookies",
    title: "Cookies e tecnologias de rastreamento",
    paragraphs: [
      "Cookies são pequenos arquivos que podem ser armazenados no dispositivo do visitante durante a navegação.",

      "O site poderá utilizar cookies e tecnologias semelhantes para garantir seu funcionamento, compreender a utilização das páginas e, quando habilitado, medir o desempenho de campanhas publicitárias.",
    ],
    items: [
      "Cookies essenciais: necessários ao funcionamento do site.",
      "Cookies analíticos: utilizados para compreender o comportamento de navegação.",
      "Cookies de publicidade: utilizados para mensuração de campanhas e personalização de anúncios.",
    ],
    closing:
      "O visitante poderá gerenciar suas preferências de cookies por meio das configurações disponibilizadas no site, quando existentes, e das configurações de seu navegador.",
  },
  {
    id: "publicidade",
    title: "Ferramentas de análise e publicidade",
    paragraphs: [
      "Quando habilitado, o site poderá utilizar ferramentas de terceiros para análise de audiência, mensuração de conversões e divulgação de campanhas publicitárias.",
    ],
    items: [
      "Google Analytics.",
      "Google Ads.",
      "Meta Pixel, relacionado às plataformas Facebook e Instagram.",
    ],
    closing:
      "Essas ferramentas poderão tratar informações relacionadas à navegação, ao dispositivo e às interações realizadas no site, conforme suas respectivas políticas de privacidade. As tecnologias não essenciais que dependam de consentimento deverão respeitar as preferências do visitante.",
  },
  {
    id: "compartilhamento",
    title: "Compartilhamento de dados pessoais",
    paragraphs: [
      "Os dados pessoais poderão ser compartilhados quando necessário para a prestação dos serviços, funcionamento do site ou cumprimento de obrigações legais.",
    ],
    items: [
      "Plataformas de comunicação e atendimento.",
      "Fornecedores de hospedagem e infraestrutura tecnológica.",
      "Ferramentas de análise e publicidade, quando utilizadas.",
      "Prestadores envolvidos na execução dos serviços, quando necessário.",
      "Autoridades públicas, quando houver obrigação legal.",
    ],
    closing:
      "Eventuais transferências internacionais de dados deverão observar os requisitos previstos na legislação aplicável.",
  },
  {
    id: "armazenamento",
    title: "Armazenamento e segurança",
    paragraphs: [
      "Os dados pessoais serão mantidos pelo período necessário ao cumprimento das finalidades para as quais foram tratados, considerando as obrigações legais, contratuais e regulatórias aplicáveis.",

      "Buscamos adotar medidas técnicas e administrativas adequadas para proteger as informações contra acessos não autorizados, perdas, alterações e outras formas de tratamento inadequado.",

      "Entretanto, nenhum sistema eletrônico pode garantir segurança absoluta.",
    ],
  },
  {
    id: "direitos",
    title: "Direitos dos titulares de dados",
    paragraphs: [
      "Nos termos da LGPD, o titular poderá solicitar, observadas as condições previstas na legislação:",
    ],
    items: [
      "Confirmação da existência de tratamento de seus dados.",
      "Acesso aos dados pessoais tratados.",
      "Correção de informações incompletas, inexatas ou desatualizadas.",
      "Anonimização, bloqueio ou eliminação de dados desnecessários, excessivos ou tratados irregularmente.",
      "Portabilidade dos dados, quando aplicável.",
      "Informações sobre o compartilhamento de dados.",
      "Informações sobre a possibilidade de não fornecer consentimento e suas consequências.",
      "Revogação do consentimento, quando aplicável.",
      "Eliminação dos dados tratados com consentimento, ressalvadas as hipóteses legais de conservação.",
      "Oposição ao tratamento realizado em desconformidade com a legislação.",
    ],
    closing:
      "O titular também poderá apresentar petição perante a Autoridade Nacional de Proteção de Dados (ANPD), nos termos da legislação.",
  },
  {
    id: "links-externos",
    title: "Links para plataformas externas",
    paragraphs: [
      "Nosso site poderá disponibilizar links para plataformas externas, como WhatsApp, Instagram e outros serviços de terceiros.",

      "Essas plataformas possuem políticas de privacidade próprias. Recomendamos que o visitante consulte suas respectivas condições antes de fornecer informações pessoais.",
    ],
  },
  {
    id: "alteracoes",
    title: "Alterações nesta política",
    paragraphs: [
      "Esta Política de Privacidade poderá ser atualizada para refletir alterações nas funcionalidades do site, nas práticas de tratamento de dados ou na legislação aplicável.",

      "A versão atualizada permanecerá disponível nesta página, acompanhada da respectiva data de atualização.",
    ],
  },
  {
    id: "contato",
    title: "Contato e solicitações de privacidade",
    paragraphs: [
      `Para esclarecer dúvidas sobre esta Política de Privacidade ou solicitar o exercício de seus direitos relacionados aos dados pessoais, entre em contato com a ${company.name} pelos canais de atendimento disponibilizados abaixo.`,
    ],
  },
];
