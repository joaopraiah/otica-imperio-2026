import lojaSumare from "@/assets/loja-sumare.webp";
import lojaHortolandia from "@/assets/loja-hortolandia.webp";

export type Store = {
  id: string;
  nome: string;
  cidade: string;
  bairro: string;
  endereco: string;
  detalhes: string;
  whatsapp: string;
  telefoneLabel: string;
  maps: string;
  foto: string;
};

export const STORES: Store[] = [
  {
    id: "sumare",
    nome: "Unidade Sumaré",
    cidade: "Sumaré",
    bairro: "Matão",
    endereco: "Av. Emilio Bosco, 586 — Matão, Sumaré/SP — CEP 13180-000",
    detalhes:
      "Estacionamento em frente à loja. Ambiente amplo e familiar, acolhedor e seguro para todas as pessoas.",
    whatsapp: "https://wa.me/5519984475265",
    telefoneLabel: "(19) 98447-5265",
    maps: "https://www.google.com/maps/search/?api=1&query=Av.+Emilio+Bosco,+586,+Mat%C3%A3o,+Sumar%C3%A9,+SP,+13180-000",
    foto: lojaSumare,
  },
  {
    id: "hortolandia",
    nome: "Unidade Hortolândia",
    cidade: "Hortolândia",
    bairro: "Jardim das Paineiras",
    endereco:
      "Rua Geraldo Denadai, 05, Box 02 — Jardim das Paineiras, Hortolândia/SP — CEP 13184-271",
    detalhes:
      "No estacionamento do Supermercado São Vicente, ao lado da lotérica. Loja ampla e climatizada.",
    whatsapp: "https://wa.me/5519981131761",
    telefoneLabel: "(19) 98113-1761",
    maps: "https://www.google.com/maps/search/?api=1&query=Rua+Geraldo+Denadai,+05,+Jardim+das+Paineiras,+Hortol%C3%A2ndia,+SP,+13184-271",
    foto: lojaHortolandia,
  },
];

export const WHATSAPP_PRINCIPAL = "https://wa.me/5519984475265";

export const SOCIAL = {
  instagram: "https://instagram.com/oticaimperiopaulinia",
  instagramLabel: "@oticaimperiopaulinia",
  facebook: "https://facebook.com/oticaimperiopaulinia",
  facebookLabel: "/oticaimperiopaulinia",
};

export const NAV = [
  { to: "/", label: "Home" },
  { to: "/a-otica", label: "A Ótica" },
  { to: "/experiencia", label: "Experiência" },
  { to: "/marcas", label: "Marcas" },
  { to: "/servicos", label: "Serviços" },
  { to: "/teste-de-visao", label: "Teste de visão" },
  { to: "/lojas", label: "Lojas" },
  { to: "/contato", label: "Contato" },
] as const;

export const DIFERENCIAIS = [
  {
    titulo: "Atendimento humanizado",
    texto:
      "Antes de indicar qualquer modelo, a equipe conversa sobre a sua rotina, a sua profissão, o seu estilo de vida e a sua necessidade visual. A recomendação vem depois de entender você.",
  },
  {
    titulo: "Visagismo descomplicado",
    texto:
      "Sem termo técnico, sem complicação: te ajudamos a escolher a armação que valoriza o seu rosto.",
  },
  {
    titulo: "Manutenção de armações",
    texto:
      "Precisou reparar sua armação? Podemos ajudar. Traga a sua na loja e a equipe avalia pessoalmente.",
  },
  {
    titulo: "Responsabilidade ambiental",
    texto:
      "Estamos substituindo nossas sacolas por versões recicláveis e estudando uma iniciativa de descarte consciente de óculos antigos.",
  },
];

export const SERVICOS = [
  {
    titulo: "Manutenção de armações",
    texto:
      "Precisou reparar sua armação? Podemos ajudar. Leve a sua até uma das unidades e a equipe avalia o que é possível fazer.",
    destaque: true,
  },
  {
    titulo: "Elogio Cliente",
    texto:
      "Acompanhamos você por 1 ano após a compra, cuidando da manutenção e da adaptação do seu óculos à sua rotina. No aniversário da compra, você entra no Elogio Cliente e ganha uma armação nova — e, a partir da primeira renovação, nunca mais paga pela armação.",
    destaque: true,
  },
  {
    titulo: "Visagismo descomplicado",
    texto:
      "Uma conversa simples e presencial para escolher, com segurança, a armação que combina com você.",
  },
  {
    titulo: "Exame de vista com hora marcada",
    texto:
      "Realizado com equipamentos modernos e profissionais capacitados. O agendamento garante atendimento sem espera.",
  },
  {
    titulo: "Orientação sobre lentes",
    texto:
      "Explicamos com clareza as opções de lentes e tratamentos disponíveis para a sua necessidade — sem jargão técnico.",
  },
  {
    titulo: "Ajustes e acompanhamento",
    texto:
      "Depois da entrega, seguimos disponíveis por WhatsApp e presencialmente para pequenos ajustes e para acompanhar a adaptação.",
  },
  {
    titulo: "Garantia de adaptação",
    texto: "Se você não se adaptar ao seu óculos, a gente resolve junto com você.",
  },
];

export const GOOGLE_RATING = {
  nota: 5.0,
  total: 119,
};

export const DEPOIMENTOS_VIDEO = [
  {
    video: "/videos/depoimento-cliente-01.mp4",
    autor: "Cliente Império", // TODO: ajustar nome do cliente do vídeo
  },
];

export const DEPOIMENTOS = [
  {
    texto: "Ótimo preço, fui muito bem atendido. Nota 10!",
    autor: "Claudinei Santos",
    nota: 5,
  },
  {
    texto: "Ótimo atendimento, preço excelente e produto de qualidade.",
    autor: "Juscelino Soares",
    nota: 5,
  },
  {
    texto: "Muito boa, fui muito bem atendida e foram super educados.",
    autor: "Andressa Costa",
    nota: 5,
  },
  {
    texto: "Atendente um amor, produto de qualidade e fácil acessibilidade de compra. Amei!!",
    autor: "Juliane Paixão",
    nota: 5,
  },
  {
    texto: "Amei o atendimento, a Fabiana foi muito atenciosa e educada!",
    autor: "Leonardo Tiago",
    nota: 5,
  },
  {
    texto: "Ótimo atendimento, melhor da região. Super indico!",
    autor: "Orlando Pinto Silva",
    nota: 5,
  },
  {
    texto: "Ótimo atendimento, eu super recomendo.",
    autor: "Antonio Vanderli Silva",
    nota: 5,
  },
  {
    texto: "Excelente atendimento e agilidade na entrega! Super recomendo, nota 10.",
    autor: "Lara Carl",
    nota: 5,
  },
  {
    texto:
      "Pessoal muito prestativo, preço justo, várias opções de pagamento e muita qualidade no material oferecido. Recomendo e parabéns pela ótica!",
    autor: "Rogério Borges",
    nota: 5,
  },
];

export const DIGITAL_PLUS_BENEFICIOS = [
  {
    titulo: "Bloqueio de luz azul",
    texto: "Filtra a luz azul emitida por telas, reduzindo o cansaço visual ao longo do dia.",
  },
  {
    titulo: "18 camadas de antirreflexo",
    texto:
      "Blindagem hidrofóbica em 18 camadas que corta o reflexo e deixa a lente quase invisível.",
  },
  {
    titulo: "Hidrofóbico — repele água",
    texto: "Repele água, poeira e gordura: a lente continua limpa e nítida por mais tempo.",
  },
  {
    titulo: "Resistência superior",
    texto: "Tratamento resistente a riscos, pensado para o uso diário sem cuidados especiais.",
  },
] as const;

export const DIGITAL_PLUS_USO = [
  {
    titulo: "Para quem trabalha",
    texto: "E passa horas em frente às telas, todos os dias.",
  },
  {
    titulo: "Para quem dirige",
    texto: "Com segurança, em qualquer horário — de dia ou à noite.",
  },
  {
    titulo: "Para quem ama séries",
    texto: "Estudos e conteúdos digitais, sem pressa de desgrudar da tela.",
  },
  {
    titulo: "Para quem cuida da visão",
    texto: "E do bem-estar, com o olhar protegido todos os dias.",
  },
] as const;

export const DIGITAL_PLUS_FAQ = [
  {
    q: "A lente Digital+ serve para qualquer grau?",
    a: "Sim. O tratamento Digital+ com Bloqueador de Elite pode ser aplicado em lentes de grau — miopia, hipermetropia, astigmatismo — e também em lentes sem grau, para quem só precisa de proteção contra telas.",
  },
  {
    q: "Qual a diferença entre a Digital+ e uma lente antirreflexo comum?",
    a: "A Digital+ tem 18 camadas de antirreflexo hidrofóbico, bloqueio real de luz azul e alta transparência — uma blindagem completa, não só um revestimento simples.",
  },
  {
    q: "Em quanto tempo eu sinto diferença?",
    a: "A maioria dos clientes relata menos cansaço visual e menos dor de cabeça em até 7 dias de uso contínuo em frente às telas.",
  },
  {
    q: "Posso colocar a Digital+ na minha armação atual?",
    a: "Sim, desde que a armação esteja em boas condições. A equipe avalia pessoalmente na loja antes de confirmar.",
  },
  {
    q: "A Digital+ risca fácil?",
    a: "Não. O tratamento inclui resistência superior a riscos, pensada para o uso diário sem cuidados especiais.",
  },
  {
    q: "Onde eu encontro a Digital+?",
    a: "Nas duas unidades da Ótica Império, em Sumaré e Hortolândia. A equipe explica pessoalmente qual versão combina com a sua rotina.",
  },
] as const;

export type MarcaExclusiva = {
  id: string;
  nome: string;
  genero: "Masculina" | "Feminina";
  assinatura: string;
  texto: string;
  tone: "dark" | "light";
};

export const MARCAS_EXCLUSIVAS: MarcaExclusiva[] = [
  {
    id: "volpes",
    nome: "Volpes",
    genero: "Masculina",
    assinatura: "V",
    texto:
      "O nome carrega uma sonoridade europeia, densa e inteligente. Não é um nome que tenta impressionar, é um nome que resiste ao tempo, como um homem que construiu algo de verdade. Volpes existe para um homem que já provou seu valor no trabalho, na família e na comunidade.",
    tone: "dark",
  },
  {
    id: "celinne",
    nome: "Celinne",
    genero: "Feminina",
    assinatura: "C",
    // TODO: texto provisório — substituir quando o material completo da Celinne chegar.
    texto:
      "Um nome que não precisa se explicar. Celinne é para a mulher segura da própria presença — discreta, precisa, atemporal. A força não está em chamar atenção, está em ficar.",
    tone: "light",
  },
];

export const FAQ = [
  {
    q: "Preciso agendar meu atendimento?",
    a: "Sim, recomendamos o agendamento. É assim que garantimos um atendimento rápido, com tempo dedicado a você e sem espera.",
  },
  {
    q: "O exame de vista é confiável?",
    a: "É realizado com equipamentos modernos e por profissionais capacitados. Toda a orientação sobre lentes e armações parte desse resultado.",
  },
  {
    q: "E se eu não me adaptar ao óculos?",
    a: "Existe garantia de adaptação. Se você não se adaptar, a loja resolve junto com você — esse acompanhamento faz parte do nosso atendimento.",
  },
  {
    q: "Quais são as formas de pagamento?",
    a: "Cartão de crédito em até 10x sem juros, débito, Pix, parcelamento em até 24x pela conta de luz e financiamento Brasil Card.",
  },
  {
    q: "Quais cidades vocês atendem?",
    a: "Temos lojas físicas em Sumaré e Hortolândia, e atendemos clientes de toda a região.",
  },
  {
    q: "O teste de visão online substitui o exame?",
    a: "Não. O teste online é uma ferramenta educativa e orientativa. Ele não é diagnóstico e não substitui a avaliação de um profissional na loja.",
  },
];
