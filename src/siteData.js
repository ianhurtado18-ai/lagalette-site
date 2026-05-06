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
    description: 'Crêpes, Massas ou Risottos preparados por nossos chefs de cozinha na hora e na frente dos convidados.',
    icon: 'tradicionais',
    image: '/gallery/tradicionais_cover.png',
    to: '/tradicionais',
  },
  {
    title: 'Brasileiros',
    description: 'Feijoadas, Churrascos e outros sabores do Brasil em cardápios completos e cheios de tradição.',
    icon: 'brasileiros',
    image: '/gallery/brasileiros_cover.webp',
    to: '/brasileiros',
  },
  {
    title: 'Internacionais',
    description: 'Uma viagem gastronômica inspirada em diversas culturas para experiências sofisticadas.',
    icon: 'internacionais',
    image: '/gallery/internacionais_cover.jpg',
    to: '/internacionais',
  },
  {
    title: 'Finger Food',
    description: 'Delicadeza e criatividade nessa gastronomia contemporânea em serviços volantes ou ilhas gastronômicas.',
    icon: 'finger-food',
    image: '/gallery/finger_cover.png',
    to: '/finger-food',
  },
  {
    title: 'Brunch',
    description: 'Ideal em eventos diurnos com leveza e muito sabor.',
    icon: 'brunchs',
    image: '/gallery/brunch_cover.png',
    to: '/brunchs',
  },
  {
    title: 'Kids & Teens',
    description: 'Culinária pensada especialmente para crianças ou adolescentes, mas que todos apreciam.',
    icon: 'kids-teens',
    image: '/gallery/kids_cover.png',
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
    image: '/gallery/sample-6.jpg',
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
  '/gallery/sample-1.svg.jpg',
  '/gallery/sample-2.jpg',
  '/gallery/sample-3.jpg',
  '/gallery/sample-4.jpg',
  '/gallery/sample-5.jpg',
  '/gallery/sample-6.jpg',
  '/gallery/sample-7.jpg',
  '/gallery/sample-8.jpg',
  '/gallery/tradicionais_cover.png',
  '/gallery/cover.jpg',
  '/gallery/IMG_5415.png',
  '/gallery/internacionais_cover.jpg',
  '/gallery/brasileiros_cover.webp',
  '/gallery/INFANTIL - MILHO_.jpg',
  '/gallery/INFANTIL_BOTECO - COXINHA.jpg',
  '/gallery/sample-2.jpg',
]

const MassasGalleryPhotos = [
  '/gallery/sample-1.svg.jpg',
  '/gallery/sample-2.jpg',
  '/gallery/sample-3.jpg',
  '/gallery/INFANTIL - MILHO_.jpg',
  '/gallery/sample-5.jpg',
  '/gallery/sample-6.jpg',
  '/gallery/sample-7.jpg',
  '/gallery/sample-8.jpg',
  '/gallery/tradicionais_cover.png',
  '/gallery/cover.jpg',
  '/gallery/IMG_5415.png',
  '/gallery/internacionais_cover.jpg',
  '/gallery/brasileiros_cover.webp',
  '/gallery/INFANTIL_BOTECO - COXINHA.jpg',
  '/gallery/sample-3.jpg',
  '/gallery/sample-4.jpg',
]

 
export const menuPages = [
  {
    path: 'tradicionais',
    layout: 'split-sections',
    title: 'Menus Tradicionais',
    description:
      'Crêpes, Massas ou Risottos preparados por nossos chefs de cozinha na hora e na frente dos convidados.',
    sections: [
      section(
        'crepes',
        'Crêpes',
        'Cocktail volante seguido de buffet de crêpes salgadas com salada(s) e molhos quentes e crêpes doces com sorvete e calda, todas preparadas na frente dos convidados. Nas versões :',
        {
          items: [
            'Tradicional',
            'VIP',
            'Gourmet',
          ],
          imageAlt: 'Galeria de crepes',
          photos: sampleGalleryPhotos,
        },
      ),
      section(
        'massas',
        'Massas',
        'Cocktail volante seguido de buffet de massas preparadas na frente dos convidados com diversos temperos, molhos quentes e salada(s) para acompanhar. Carne opcional. Nas versões:',
        {
          items: [
            'Tradicional',
            'Gourmet',
          ],
          imageAlt: 'Galeria de massas',
          photos: MassasGalleryPhotos,
        },
      ),
      section(
        'risottos',
        'Risottos',
        'Cocktail volante seguido de buffet de risottos preparados na frente dos convidados com diversos temperos, molhos quentes e salada(s) para acompanhar. Carne opcional. Nas versões:',
        {
          items: [
            'Tradicional',
            'Gourmet',
          ],
          imageAlt: 'Galeria de risottos',
          photos: sampleGalleryPhotos,
        },
      ),
    ],
  },
  {
    path: 'brasileiros',
    layout: 'split-sections',
    title: 'Menus Brasileiros',
    description:
      'Receitas brasileiras em formatos pensados para festas, encontros familiares e celebrações corporativas.',
    sections: [
      section(
        'feijoada',
        'Feijoada',
        'Um clássico brasileiro servido com acompanhamentos tradicionais e montagem cuidadosa.',
        {
          items: [],
          imageAlt: 'Galeria de feijoada',
          photos: sampleGalleryPhotos,
        },
      ),
      section(
        'churrasco',
        'Churrasco',
        'Cortes selecionados, guarnições e serviço adaptado ao ritmo do evento.',
        {
          items: [],
          imageAlt: 'Galeria de churrasco',
          photos: sampleGalleryPhotos,
        },
      ),
      section(
        'boteco',
        'Boteco',
        'Petiscos, porções e sabores descontraídos para uma experiência leve e animada.',
        {
          items: [],
          imageAlt: 'Galeria de boteco',
          photos: sampleGalleryPhotos,
        },
      ),
      section(
        'outros',
        'Outros',
        'Outras receitas brasileiras para compor um buffet completo e adaptado ao estilo do evento.',
        {
          hideInNav: true,
          items: [],
          imageAlt: 'Galeria de outros pratos brasileiros',
          photos: sampleGalleryPhotos,
        },
      ),
    ],
  },
  {
    path: 'internacionais',
    layout: 'split-sections',
    title: 'Menus Internacionais',
    description:
      'Inspirações de diferentes cozinhas para criar uma recepção elegante, saborosa e personalizada.',
    sections: [
      section(
        'frances',
        'Francês',
        'Propostas inspiradas na cozinha francesa, com apresentação delicada e sabores refinados.',
        {
          items: [],
          imageAlt: 'Galeria de francês',
          photos: sampleGalleryPhotos,
        },
      ),
      section(
        'italiano',
        'Italiano',
        'Massas, molhos e combinações clássicas para um menu acolhedor.',
        {
          items: [],
          imageAlt: 'Galeria de italiano',
          photos: MassasGalleryPhotos,
        },
      ),
      section(
        'espanhol',
        'Espanhol',
        'Sabores espanhóis em receitas ideais para compartilhar.',
        {
          items: [],
          imageAlt: 'Galeria de espanhol',
          photos: sampleGalleryPhotos,
        },
      ),
      section(
        'mediterraneo',
        'Mediterrâneo',
        'Ingredientes frescos, leves e aromáticos para uma mesa equilibrada.',
        {
          items: [],
          imageAlt: 'Galeria de mediterrâneo',
          photos: sampleGalleryPhotos,
        },
      ),
    ],
  },
  {
    path: 'finger-food',
    layout: 'split-sections',
    title: 'Finger Food',
    description:
      'Porções individuais e formatos práticos para coquetéis, inaugurações e eventos em movimento.',
    sections: [
      section(
        'cocktail-volante',
        'Cocktail Volante',
        'Bites servidos em circulação para manter o evento fluido.',
        {
          items: [],
          imageAlt: 'Galeria de cocktail volante',
          photos: sampleGalleryPhotos,
        },
      ),
      section(
        'ilha-gastronomica',
        'Ilha Gastronômica',
        'Ilhas de degustação para compor uma experiência visual e saborosa.',
        {
          items: [],
          imageAlt: 'Galeria de ilha gastronômica',
          photos: sampleGalleryPhotos,
        },
      ),
    ],
  },
  {
    path: 'brunchs',
    layout: 'split-sections',
    title: 'Brunchs',
    description:
      'Menus leves para encontros diurnos, com opções doces, salgadas e bebidas para acompanhar.',
    sections: [
      section(
        'breakfast',
        'Breakfast',
        'Itens de café da manhã para recepções, reuniões e eventos corporativos.',
        {
          items: [],
          imageAlt: 'Galeria de breakfast',
          photos: sampleGalleryPhotos,
        },
      ),
      section(
        'brunch',
        'Brunch',
        'Uma composição completa entre café da manhã e almoço.',
        {
          items: [],
          imageAlt: 'Galeria de brunch',
          photos: sampleGalleryPhotos,
        },
      ),
      section(
        'tea-time',
        'Tea Time',
        'Pausas doces e salgadas para encontros elegantes e acolhedores.',
        {
          items: [],
          imageAlt: 'Galeria de tea time',
          photos: sampleGalleryPhotos,
        },
      ),
    ],
  },
  {
    path: 'kids-teens',
    layout: 'single-feature',
    kicker: 'Kids & Teens',
    title: 'Kids Teens',
    description:
      'Menus pensados para festas infantis e teens, com apresentação divertida e sabores que agradam diferentes idades.',
    body:
      'Criamos composições leves, generosas e fáceis de servir para aniversários, celebrações familiares e festas teen. A proposta combina opções que agradam crianças, adolescentes e adultos, mantendo uma apresentação cuidada e um serviço fluido do início ao fim.',
    imageAlt: 'Galeria de kids e teens',
    photos: sampleGalleryPhotos,
    sections: [],
  },
  {
    path: 'servicos-complementares',
    layout: 'split-sections',
    title: 'Serviços Complementares',
    description:
      'Complementos para deixar seu evento mais completo, dos bolos às bebidas.',
    sections: [
      section(
        'bolos',
        'Bolos',
        'Bolos personalizados para aniversários, casamentos e celebrações especiais.',
        {
          items: [],
          imageAlt: 'Galeria de bolos',
          photos: sampleGalleryPhotos,
        },
      ),
      section(
        'doces',
        'Doces',
        'Doces finos, sobremesas e pequenas delicadezas para completar a mesa.',
        {
          items: [],
          imageAlt: 'Galeria de doces',
          photos: sampleGalleryPhotos,
        },
      ),
      section(
        'bebidas',
        'Bebidas',
        'Seleção de bebidas para harmonizar com o menu e o formato do evento.',
        {
          items: [],
          imageAlt: 'Galeria de bebidas',
          photos: sampleGalleryPhotos,
        },
      ),
    ],
  },
]

export const simplePages = [
  {
    path: 'corporativo',
    layout: 'single-feature',
    kicker: 'Corporativo',
    title: 'Eventos corporativos',
    description:
      'Soluções para reuniões, treinamentos, confraternizações e recepções empresariais.',
    body:
      'Desenvolvemos propostas para encontros profissionais que precisam de pontualidade, apresentação elegante e serviço discreto. O menu pode acompanhar coffee breaks, almoços, coquetéis ou celebrações internas, sempre adaptado ao ritmo da empresa e ao perfil dos convidados.',
    imageAlt: 'Galeria de eventos corporativos',
    photos: sampleGalleryPhotos,
  },
  {
    path: 'personalizado',
    layout: 'single-feature',
    kicker: 'Personalizado',
    title: 'Menu personalizado',
    description:
      'Criamos uma proposta sob medida a partir do estilo do evento, número de convidados e preferências do cliente.',
    body:
      'Quando o evento pede uma composição própria, reunimos referências, formato de serviço e preferências gastronômicas para desenhar um menu sob medida. A ideia é construir uma experiência coerente, acolhedora e ajustada ao momento que você quer celebrar.',
    imageAlt: 'Galeria de menus personalizados',
    photos: sampleGalleryPhotos,
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
