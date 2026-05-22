const coverImage = (file) => `/gallery/covers/${file}`

// Pour modifier une galerie, remplace les fichiers dans le dossier correspondant.
// Si tu changes les noms de fichiers, adapte cette liste.
const galleryFiles = [
  'sample-1.jpg',
  'sample-2.jpg',
  'sample-3.jpg',
  'sample-4.jpg',
  'sample-5.jpg',
  'sample-6.jpg',
  'sample-7.jpg',
  'sample-8.jpg',
]
const gallery = (folder) => galleryFiles.map((file) => `/gallery/${folder}/${file}`)

const section = (id, title, description, options = {}) => ({
  id,
  title,
  description,
  items: [],
  imageAlt: `Galeria de ${title.toLowerCase()}`,
  ...options,
})

const singleFeaturePage = ({
  path,
  title,
  description,
  body,
  highlights,
  closing,
  closingLinks,
  folder,
  imageAlt,
}) => ({
  path,
  layout: 'single-feature',
  title,
  description,
  body,
  highlights,
  closing,
  closingLinks,
  imageAlt,
  photos: gallery(folder),
})

export const homeSections = [
  { id: 'sobre-nos', kicker: 'Sobre Nós' },
  { id: 'menus', kicker: 'Menus' },
  { id: 'servicos-complementares', kicker: 'Serviços Complementares' },
  { id: 'eles-confiam-na-gente', kicker: 'Eles Confiam na Gente' },
  { id: 'contato', kicker: 'Contato' },
]

export const homeMenuCards = [
  {
    title: 'Tradicionais',
    description:
      'Crêpes, Massas ou Risottos preparados por nossos chefs de cozinha na hora e na frente dos convidados.',
    icon: 'tradicionais',
    image: coverImage('menus-tradicionais.png'),
    to: '/tradicionais',
  },
  {
    title: 'Brasileiros',
    description:
      'Os sabores do Brasil em cardápios completos e cheios de tradição.',
    icon: 'brasileiros',
    image: coverImage('menus-brasileiros.webp'),
    to: '/brasileiros',
  },
  {
    title: 'Internacionais',
    description:
      'Uma viagem gastronômica inspirada em diversas culturas para experiências sofisticadas.',
    icon: 'internacionais',
    image: coverImage('menus-internacionais.jpg'),
    to: '/internacionais',
  },
  {
    title: 'Finger Food',
    description:
      'Elegância e sofisticação em uma seleção variada de cores e sabores, proporcionando uma experiência visual e gustativa memorável.',
    icon: 'finger-food',
    image: coverImage('menus-finger-food.png'),
    to: '/finger-food',
  },
  {
    title: 'Brunch',
    description: 'Ideal em eventos diurnos com leveza e muito sabor.',
    icon: 'brunchs',
    image: coverImage('menus-brunchs.png'),
    to: '/brunchs',
  },
  {
    title: 'Kids & Teens',
    description:
      'Culinária pensada especialmente para crianças ou adolescentes, mas que todos apreciam.',
    icon: 'kids-teens',
    image: coverImage('menus-kids-teens.png'),
    to: '/kids-teens',
  },
]

export const homeServiceCards = [
  {
    title: 'Bolos',
    description: 'Bolos artesanais de diferentes sabores, com cobertura e decoração personalizadas.',
    icon: 'bolos',
    image: coverImage('servicos-bolos.jpg'),
    to: '/servicos-complementares#bolos',
  },
  {
    title: 'Doces',
    description: 'Grande variedade de docinhos tradicionais e gourmets e mini cakes donuts lindos e irresistíveis.',
    icon: 'doces',
    image: coverImage('servicos-doces.jpg'),
    to: '/servicos-complementares#doces',
  },
  {
    title: 'Bebidas',
    description: 'Seleção de bebidas alcoólicas de qualidade para harmonizar com o menu e o formato do evento.',
    icon: 'bebidas',
    image: coverImage('servicos-bebidas.jpg'),
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
  { label: 'CRÊPES', to: '/tradicionais#crepes' },
  { label: 'MASSAS', to: '/tradicionais#massas' },
  { label: 'RISOTTOS', to: '/tradicionais#risottos' },
  { label: 'FEIJOADA', to: '/brasileiros#feijoada' },
  { label: 'CHURRASCO', to: '/brasileiros#churrasco' },
  { label: 'BOTECO', to: '/brasileiros#boteco' },
  { label: 'FINGER FOOD', to: '/finger-food' },
  { label: 'BRUNCH', to: '/brunchs#brunch' },
  { label: 'FRANCÊS', to: '/internacionais#frances' },
  { label: 'MEDITERRÂNEO', to: '/internacionais#mediterraneo' },
  { label: 'CORPORATIVO', to: '/corporativo' },
  { label: 'PERSONALIZADOS', to: '/personalizado' },
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
        'Crêpes francesas preparadas por nossos chefs de cozinha, na hora e na frente dos convidados.',
        {
          items: [
            'Cocktail inicial de finger foods.',
            'Crêpes salgadas, saladas e molhos quentes.',
            'Crêpes doces, sorvete e calda.',
            'Finalização: café com petit-fours.',
            'Versões: Tradicional, Vip e Gourmet.',
            'Complemente este cardápio com a sofisticação dos nossos vinhos e espumantes franceses.',
          ],
          photos: gallery('tradicionais-crepes'),
        },
      ),
      section(
        'massas',
        'Massas',
        'Massas frescas artesanais preparadas por nossos chefs de cozinha, na hora e na frente dos convidados, com diversos temperos.',
        {
          items: [
            'Cocktail inicial de finger foods.',
            'Massas, saladas e molhos quentes. Carne opcional.',
            'Sobremesa e café com petit-fours.',
            'Versões: Tradicional e Gourmet.',
            'Com nossas opções de vinhos italianos, esse menu fica ainda mais especial.',
          ],
          photos: gallery('tradicionais-massas'),
        },
      ),
      section(
        'risottos',
        'Risottos',
        'Risottos preparados por nossos chefs de cozinha com arroz arbóreo e diversos temperos.',
        {
          items: [
            'Cocktail inicial de finger foods.',
            'Risottos e saladas. Carne opcional.',
            'Sobremesa e café com petit-fours.',
            'Versões: Tradicional e Gourmet.',
            'Nossos vinhos italianos podem ser o toque perfeito para acompanhar esse buffet.',
          ],
          photos: gallery('tradicionais-risottos'),
        },
      ),
    ],
  },
  {
    path: 'brasileiros',
    layout: 'split-sections',
    title: 'Menus Brasileiros',
    description:
      'Os sabores do Brasil em cardápios completos e cheios de tradição.',
    sections: [
      section(
        'feijoada',
        'Feijoada',
        'Um clássico brasileiro, leve e saborosa, preparada com carnes nobres.',
        {
          items: [
            'Cocktail inicial de petiscos.',
            'Feijoada completa com seus acompanhamentos tradicionais.',
            'Sobremesa de doces típicos.',
            'Café com petit-fours.',
            'Complemente essa tradicional e deliciosa feijoada com nosso bar de caipirinhas.',
          ],
          photos: gallery('brasileiros-feijoada'),
        },
      ),
      section(
        'churrasco',
        'Churrasco',
        'Carnes selecionadas, guarnições diversas e serviço adaptado ao ritmo do evento.',
        {
          items: [
            'Versões: espetinhos ou em peças.',
            'Nosso chopp e serviço de bar de caipirinha trazem ainda mais alegria e brasilidade para esse buffet.',
          ],
          photos: gallery('brasileiros-churrasco'),
        },
      ),
      section(
        'boteco',
        'Boteco',
        'Ideal para happy hour e eventos descontraídos.',
        {
          items: [
            'Serviço volante de diversos petiscos e porções em mini louças.',
            'Sobremesa brasileira e café com biscoitinhos.',
            'Para uma festa completa, acrescente nosso delicioso chopp e um bar de caipirinhas refrescantes.',
          ],
          photos: gallery('brasileiros-boteco'),
        },
      ),
      section(
        'outros',
        'Outros Brasileiros',
        'Outros cardápios bem brasileiros, como festas juninas e julinas, culinária mineira, paulista ou nordestina, em buffets completos adaptados ao estilo do evento.',
        {
          hideInNav: true,
          imageAlt: 'Galeria de outros pratos brasileiros',
          photos: gallery('brasileiros-outros'),
        },
      ),
    ],
  },
  {
    path: 'internacionais',
    layout: 'split-sections',
    title: 'Menus Internacionais',
    description:
      'Uma viagem gastronômica inspirada em diversas culturas para experiências sofisticadas.',
    sections: [
      section(
        'frances',
        'Francês',
        'Os grandes clássicos da cozinha francesa em uma sofisticada harmonia de sabores.',
        {
          items: [
            'Cocktail inicial de finger foods.',
            'Ilha com pratos quentes, saladas e guarnições.',
            'Sobremesas típicas francesas.',
            'Café com petit-fours.',
            'Harmonize esse menu tradicional com nossos vinhos e espumantes franceses.',
          ],
          photos: gallery('internacionais-frances'),
        },
      ),
      section(
        'italiano',
        'Italiano',
        'Um passeio gastronômico com menus elaborados na pura tradição italiana.',
        {
          items: [
            'Cocktail inicial com finger foods.',
            'Massa, risotto, carne, salada e guarnições.',
            'Sobremesa e café com petit-fours.',
            'Versões: Tradicional e Especial.',
            'Nossos vinhos italianos darão ainda mais harmonia a este delicioso cardápio.',
          ],
          photos: gallery('internacionais-italiano'),
        },
      ),
      section(
        'espanhol',
        'Espanhol',
        'As tradições culinárias da Espanha em um menu completo com a autêntica paella e outros pratos típicos surpreendentes.',
        {
          items: [
            'Cocktail inicial de finger foods.',
            'Paella preparada por nosso chef de cozinha, na hora e na frente dos convidados.',
            'Pratos quentes, guarnições e saladas.',
            'Sobremesas típicas e café com petit-fours.',
            'Acrescente ainda mais autenticidade com nossos vinhos e cavas espanhois.',
          ],
          photos: gallery('internacionais-espanhol'),
        },
      ),
      section(
        'mediterraneo',
        'Mediterrâneo',
        'Uma culinária leve e ensolarada com um menu inspirado em diversas culturas mediterrâneas: França, Grécia, Itália e Espanha.',
        {
          items: [
            'Cocktail inicial com finger foods.',
            'Massa, risotto, peixe, carne, saladas e guarnições.',
            'Sobremesas e café com petit-fours.',
            'Múltiplas escolhas de rótulos italianos, franceses e espanhois na nossa seleção de vinhos e espumantes.',
          ],
          photos: gallery('internacionais-mediterraneo'),
        },
      ),
    ],
  },
  {
    path: 'finger-food',
    layout: 'split-sections',
    title: 'Finger Food',
    description:
      'Elegância e sofisticação em uma seleção variada de cores e sabores, proporcionando uma experiência visual e gustativa memorável.',
    sections: [
      section(
        'cocktail-volante',
        'Cocktail Volante',
        'Porções individuais servidas nos formatos de sticks, taças, verrines, mini louças e bowls, ideal para eventos em movimento.',
        {
          items: [
            'Sobremesa individual e café com petit-four.',
            'Solicite nosso bar de drinks refrescantes e elegantes para harmonizar com nossos finger foods.',
          ],
          photos: gallery('finger-food-cocktail-volante'),
        },
      ),
      section(
        'ilha-gastronomica',
        'Ilha Gastronômica',
        'Finger foods, terrines, dips, queijos, frios, mini pães, toasts, frutas e nuts em uma apresentação primorosa e criativa.',
        {
          items: [
            'Ilha de sobremesas e café com petit-fours.',
            'Acrescente charme e personalidade para sua celebração com nossos vinhos, espumantes e bar de drinks.',
          ],
          photos: gallery('finger-food-ilha-gastronomica'),
        },
      ),
    ],
  },
  {
    path: 'brunchs',
    layout: 'split-sections',
    title: 'Brunch',
    description:
      'Ideal em eventos diurnos com leveza e muito sabor.',
    sections: [
      section(
        'breakfast',
        'Breakfast',
        'Um copioso café da manhã com uma variedade de itens salgados e doces e de bebidas quentes e frias, dispostos numa linda mesa.',
        {
          photos: gallery('brunchs-breakfast'),
        },
      ),
      section(
        'brunch',
        'Brunch',
        'Iniciando com um café da manhã, seguido de tortas, massas e saladas no almoço e encerrando com sobremesas e café, tudo apresentado de forma requintada.',
        {
          items: ['Na hora do almoço, surpreenda servindo um dos nossos espumantes.'],
          photos: gallery('brunchs-brunch'),
        },
      ),
      section(
        'tea-time',
        'Tea Time',
        'Na hora do chá da tarde, uma atmosfera acolhedora com uma mesa farta de mini sanduíches, salgados, tortas, doces, frutas frescas, chás aromáticos e sucos naturais.',
        {
          photos: gallery('brunchs-tea-time'),
        },
      ),
      section(
        'grazing-table',
        'Grazing Table',
        'Mesa com grande fartura de queijos finos, frios fatiados, mini pães diversos, frutas frescas e nuts crocantes, tudo apresentado em material rústico e orgânico.',
        {
          hideInNav: true,
          imageAlt: 'Galeria de grazing table',
          photos: gallery('brunchs-grazing-table'),
        },
      ),
    ],
  },
  singleFeaturePage({
    path: 'kids-teens',
    title: 'Kids & Teens',
    description:
      'Culinária pensada especialmente para crianças ou adolescentes, mas que todos apreciam.',
    body:
      'Cardápios pensados para festas infantis e teens, com formatos leves, criativos e fáceis de adaptar ao ritmo da celebração.',
    highlights: [
      {
        title: 'Cocktail Volante',
        text: 'Um cardápio elaborado com uma variedade de opções criativas e saborosas para agradar pequenos e grandes.',
        note: 'Nas versões: tradicional, saudável e lanchonete.',
      },
      {
        title: 'Hamburgueria',
        text: 'Hambúrgueres preparados na hora e na frente dos convidados, com diversos complementos e sobremesa.',
      },
      {
        title: 'Crêpes e Massas',
        text: 'Nossos menus tradicionais elaborados especialmente para festas infantis e teens.',
      },
    ],
    closing:
      'Bolos e docinhos são parte essencial das festas infantis e teens. Oferecemos uma ampla seleção para todos os gostos. Para festas teens, como festas de 15 anos, surpreenda com nosso serviço de bar de cocktails sem álcool.',
    closingLinks: [
      { label: 'Bolos', to: '/servicos-complementares#bolos' },
      { label: 'docinhos', to: '/servicos-complementares#doces' },
    ],
    folder: 'kids-teens',
    imageAlt: 'Galeria de kids e teens',
  }),
  {
    path: 'servicos-complementares',
    layout: 'split-sections',
    title: 'Serviços Complementares',
    description:
      'Serviços para deixar seu evento ainda mais completo, dos bolos às bebidas.',
    sections: [
      section(
        'bolos',
        'Bolos',
        'Bolos de diferentes sabores, fabricados artesanalmente com ingredientes frescos de alta qualidade.',
        {
          items: ['A cobertura e a decoração podem ser personalizadas.'],
          photos: gallery('servicos-bolos'),
        },
      ),
      section(
        'doces',
        'Doces',
        'Grande variedade de docinhos tradicionais e gourmets e mini cakes donuts lindos e irresistíveis.',
        {
          items: [
            'Docinhos enrolados ou em verrines, personalizados com forminhas coloridas e apliques comestíveis.',
            'Mini cakes donuts com massa delicada, diversos recheios, coberturas e decoração sob medida.',
            'Donuts embalados individualmente são uma ótima opção de lembrancinha.',
            'Destaque para nossa torre com 50 mini donuts variados, decorada com flores naturais e lacinhos de fita.',
          ],
          photos: gallery('servicos-doces'),
        },
      ),
      section(
        'bebidas',
        'Bebidas Alcoólicas',
        'Seleção de bebidas alcoólicas de qualidade para harmonizar com o menu e o formato do evento.',
        {
          items: [
            'Chopp e cervejas.',
            'Carta de vinhos e espumantes de diversas nacionalidades.',
            'Serviço de bar de drinks e caipirinhas com bebidas nacionais e importadas.',
          ],
          photos: gallery('servicos-bebidas'),
        },
      ),
    ],
  },
]

export const simplePages = [
  singleFeaturePage({
    path: 'corporativo',
    title: 'Corporativo',
    description:
      'Menus específicos para empresas, em diversos serviços como coffees, almoços, happy-hours, cocktails e jantares.',
    body:
      'Coffee break: uma pausa para descontrair e conversar merece um bom café ou um suco refrescante com mini sanduíches, salgados, bolos caseiros e doces diversos. Almoço: variado e copioso, com pratos quentes, guarnições e saladas para um momento agradável. Cocktail e happy hour: salgados artesanais e finger foods elegantes e criativos, ideais para inaugurações, vernissages, comemorações diversas ou para o final de um longo dia de trabalho.',
    folder: 'corporativo',
    imageAlt: 'Galeria de eventos corporativos',
  }),
  singleFeaturePage({
    path: 'personalizado',
    title: 'Personalizados',
    description:
      'Menus elaborados de acordo com suas preferências gastronômicas e o perfil desejado para seu evento social ou corporativo.',
    body:
      'Casamento na praia e no campo, aniversário no sítio, inauguração de clínica, aniversário da empresa, almoço country…tantos motivos, sonhos e ideias para criarmos menus sob medida de acordo com o estilo ou tema do evento. ',
    folder: 'personalizado',
    imageAlt: 'Galeria de menus personalizados',
  }),
]
