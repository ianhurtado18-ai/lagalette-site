export const homeSections = [
  {
    id: 'sobre-nos',
    kicker: 'Sobre Nós',
  },
  {
    id: 'menus',
    kicker: 'Menus',
  },
  {
    id: 'servicos-complementares',
    kicker: 'Serviços Complementares',
  },
  {
    id: 'eles-confiam-na-gente',
    kicker: 'Eles Confiam na Gente',
  },
  {
    id: 'contato',
    kicker: 'Contato',
  },
]

export const homeMenuCards = [
  {
    title: 'Tradicionais',
    description: 'Crepes, massas, risottos e muito mais, preparados na frente dos convidados.',
    icon: 'tradicionais',
    image: '/gallery/tradicionais_cover.png',
    to: '/tradicionais',
  },
  {
    title: 'Brasileiros',
    description: 'Os sabores do Brasil em menus completos e cheios de tradição.',
    icon: 'brasileiros',
    image: 'public/gallery/IMG_5415.png',
    to: '/brasileiros',
  },
  {
    title: 'Internacionais',
    description: 'Inspiração de diversas culturas para experiências sofisticadas.',
    icon: 'internacionais',
    image: '/gallery/internacionais_cover.jpg',
    to: '/internacionais',
  },
  {
    title: 'Finger Food',
    description: 'Opções práticas e elegantes para coquetéis e eventos descontraídos.',
    icon: 'finger-food',
    image: '/gallery/sample-4.jpg',
    to: '/finger-food',
  },
  {
    title: 'Brunchs',
    description: 'Ideal para encontros de dia, com leveza e muito sabor.',
    icon: 'brunchs',
    image: '/gallery/sample-5.jpg',
    to: '/brunchs',
  },
  {
    title: 'Kids & Teens',
    description: 'Menus especiais para os pequenos e jovens convidados.',
    icon: 'kids-teens',
    image: '/gallery/sample-6.jpg',
    to: '/kids-teens',
  },
]

export const homeServiceCards = [
  {
    title: 'Bolos',
    description: 'Bolos personalizados para tornar seu evento ainda mais especial.',
    icon: 'bolos',
    image: '/gallery/sample-7.jpg',
    to: '/servicos-complementares#bolos',
  },
  {
    title: 'Doces',
    description: 'Doces finos e variados que encantam e complementam seu menu.',
    icon: 'doces',
    image: '/gallery/sample-8.jpg',
    to: '/servicos-complementares#doces',
  },
  {
    title: 'Bebidas',
    description: 'Seleção de bebidas para harmonizar e elevar seu evento.',
    icon: 'bebidas',
    image: '/gallery/sample-1.jpg',
    to: '/servicos-complementares#bebidas',
  },
]

export const trustLogos = [
  { name: 'Sodexo', variant: 'sodexo' },
  { name: 'Banco BV', variant: 'bv' },
]

export const clientTestimonials = [
  {
    name: 'Mariana Costa',
    eventType: 'Crepe Tradicional',
    quote:
      'Uma equipe atenciosa, uma apresentação elegante e convidados encantados do início ao fim.',
  },
  {
    name: 'Lucas Almeida',
    eventType: 'Finger Food',
    quote:
      'La Galette criou um menu fluido, generoso e perfeitamente adaptado à nossa recepção.',
  },
  {
    name: 'Camila Rocha',
    eventType: 'Churrasco',
    quote:
      'Tudo foi delicado, acolhedor e muito bem organizado. Aproveitamos sem nos preocupar com os detalhes.',
  },
]

export const menuLinks = [
  { label: 'Crepes', to: '/tradicionais#crepes' },
  { label: 'Massas', to: '/tradicionais#massas' },
  { label: 'Risottos', to: '/tradicionais#risottos' },
  { label: 'Feijoada', to: '/brasileiros#feijoada' },
  { label: 'Churrasco', to: '/brasileiros#churrasco' },
  { label: 'Boteco', to: '/brasileiros#boteco' },
  { label: 'Finger Food', to: '/finger-food' },
  { label: 'Brunch', to: '/brunchs#brunch' },
  { label: 'Francês', to: '/internacionais#frances' },
  { label: 'Mediterrâneo', to: '/internacionais#mediterraneo' },
  { label: 'Corporativos', to: '/corporativo' },
  { label: 'Personalizados', to: '/personalizado' },
]

// Galerias De Fotos - Substituir com fotos reais quando disponíveis
const sampleGalleryPhotos = [
  '/gallery/sample-1.jpg',
  '/gallery/sample-2.jpg',
  '/gallery/sample-3.jpg',
  '/gallery/sample-4.jpg',
  '/gallery/sample-5.jpg',
  '/gallery/sample-6.jpg',
  '/gallery/sample-7.jpg',
  '/gallery/sample-8.jpg',
]

const MassasGalleryPhotos = [
  '/gallery/sample-1.jpg',
  '/gallery/sample-2.jpg',
  '/gallery/sample-3.jpg',
  '/gallery/INFANTIL - MILHO_.jpg',
  '/gallery/sample-5.jpg',
  '/gallery/sample-6.jpg',
  '/gallery/sample-7.jpg',
  '/gallery/sample-8.jpg',
]

 
export const menuPages = [
  {
    path: 'tradicionais',
    layout: 'split-sections',
    title: 'Menus Tradicionais',
    description:
      'Opções clássicas para eventos completos, com preparos feitos no local e cardápios adaptados ao formato da sua celebração.',
    sections: [
      section(
        'crepes',
        'Crepes',
        'Uma proposta versátil para recepções leves, jantares descontraídos e eventos com preparo ao vivo.',
        {
          items: [
            'Crepes salgados preparados na hora',
            'Opções vegetarianas e com carnes',
            'Crepes doces para finalizar o menu',
            'Seleção de recheios personalizada',
          ],
          imageAlt: 'Galeria de crepes',
          photos: sampleGalleryPhotos,
        },
      ),
      section(
        'massas',
        'Massas',
        'Massas frescas e molhos variados para um serviço acolhedor, prático e fácil de adaptar aos convidados.',
        {
          items: [
            'Massas curtas e longas',
            'Molhos clássicos e autorais',
            'Opções com queijo, legumes, carnes ou frutos do mar',
            'Montagem em buffet ou estação gastronômica',
          ],
          imageAlt: 'Galeria de massas',
          photos: MassasGalleryPhotos,
        },
      ),
      section(
        'risottos',
        'Risottos',
        'Risottos cremosos, preparados com ingredientes selecionados e servidos no ponto ideal durante o evento.',
        {
          items: [
            'Risottos vegetarianos',
            'Risottos com carnes ou frutos do mar',
            'Finalização ao vivo para eventos',
            'Combinações personalizadas para cada ocasião',
          ],
          imageAlt: 'Galeria de risottos',
          photos: sampleGalleryPhotos,
        },
      ),
    ],
  },
  {
    path: 'brasileiros',
    title: 'Menus Brasileiros',
    description:
      'Receitas brasileiras em formatos pensados para festas, encontros familiares e celebrações corporativas.',
    sections: [
      section('feijoada', 'Feijoada', 'Um clássico brasileiro servido com acompanhamentos tradicionais e montagem cuidadosa.'),
      section('churrasco', 'Churrasco', 'Cortes selecionados, guarnições e serviço adaptado ao ritmo do evento.'),
      section('boteco', 'Boteco', 'Petiscos, porções e sabores descontraídos para uma experiência leve e animada.'),
      section('escondidinhos', 'Escondidinhos', 'Receitas cremosas e acolhedoras em versões variadas.'),
      section('brasileiro', 'Brasileiro', 'Pratos brasileiros variados para compor um buffet completo e generoso.'),
      section('junino', 'Junino', 'Sabores de festa junina para eventos temáticos e celebrações sazonais.'),
    ],
  },
  {
    path: 'internacionais',
    title: 'Menus Internacionais',
    description:
      'Inspirações de diferentes cozinhas para criar uma recepção elegante, saborosa e personalizada.',
    sections: [
      section('frances', 'Francês', 'Propostas inspiradas na cozinha francesa, com apresentação delicada e sabores refinados.'),
      section('italiano', 'Italiano', 'Massas, molhos e combinações clássicas para um menu acolhedor.'),
      section('espanhol', 'Espanhol', 'Sabores espanhóis em receitas ideais para compartilhar.'),
      section('mediterraneo', 'Mediterrâneo', 'Ingredientes frescos, leves e aromáticos para uma mesa equilibrada.'),
      section('hamburgueria', 'Hamburgueria', 'Mini burgers e acompanhamentos para eventos informais com acabamento caprichado.'),
    ],
  },
  {
    path: 'finger-food',
    title: 'Finger Food',
    description:
      'Porções individuais e formatos práticos para coquetéis, inaugurações e eventos em movimento.',
    sections: [
      section('cocktail-volante', 'Cocktail Volante', 'Bites servidos em circulação para manter o evento fluido.'),
      section('ilha-gastronomica', 'Ilha Gastronômica', 'Ilhas de degustação para compor uma experiência visual e saborosa.'),
    ],
  },
  {
    path: 'brunchs',
    title: 'Brunchs',
    description:
      'Menus leves para encontros diurnos, com opções doces, salgadas e bebidas para acompanhar.',
    sections: [
      section('breakfast', 'Breakfast', 'Itens de café da manhã para recepções, reuniões e eventos corporativos.'),
      section('brunch', 'Brunch', 'Uma composição completa entre café da manhã e almoço.'),
      section('tea-time', 'Tea Time', 'Pausas doces e salgadas para encontros elegantes e acolhedores.'),
    ],
  },
  {
    path: 'kids-teens',
    title: 'Kids Teens',
    description:
      'Menus pensados para festas infantis e teens, com apresentação divertida e sabores que agradam diferentes idades.',
    sections: [],
  },
  {
    path: 'servicos-complementares',
    title: 'Serviços Complementares',
    description:
      'Complementos para deixar seu evento mais completo, dos bolos às bebidas.',
    sections: [
      section('bolos', 'Bolos', 'Bolos personalizados para aniversários, casamentos e celebrações especiais.'),
      section('doces', 'Doces', 'Doces finos, sobremesas e pequenas delicadezas para completar a mesa.'),
      section('bebidas', 'Bebidas', 'Seleção de bebidas para harmonizar com o menu e o formato do evento.'),
    ],
  },
]

export const simplePages = [
  {
    path: 'corporativo',
    kicker: 'Corporativo',
    title: 'Eventos corporativos',
    description:
      'Soluções para reuniões, treinamentos, confraternizações e recepções empresariais.',
  },
  {
    path: 'personalizado',
    kicker: 'Personalizado',
    title: 'Menu personalizado',
    description:
      'Criamos uma proposta sob medida a partir do estilo do evento, número de convidados e preferências do cliente.',
  },
]

function section(id, title, description, options = {}) {
  return {
    id,
    title,
    description,
    kicker: 'Especialidade',
    ...options,
  }
}
