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
  'sample-9.jpg',
  'sample-10.jpg',
  'sample-11.jpg',
  'sample-12.jpg',
]
const gallery = (folder) => galleryFiles.map((file) => `/gallery/${folder}/${file}`)

const section = (id, title, description, options = {}) => ({
  id,
  title,
  titleLines: [],
  description,
  descriptionLines: [],
  versoes: '',
  items: [],
  disclaimer: '',
  imageAlt: `Galeria de ${title.toLowerCase()}`,
  ...options,
})

const singleFeaturePage = ({
  path,
  title,
  titleLines,
  description,
  descriptionLines,
  body,
  highlights,
  closing,
  closingLinks,
  featureLayout,
  galleryLimit,
  folder,
  imageAlt,
}) => ({
  path,
  layout: 'single-feature',
  title,
  titleLines,
  description,
  descriptionLines,
  body,
  highlights,
  closing,
  closingLinks,
  featureLayout,
  galleryLimit,
  imageAlt,
  photos: gallery(folder),
})

export const homeSections = [
  { id: 'sobre-nos', kicker: 'Sobre Nós' },
  { id: 'menus', kicker: 'Menus' },
  { id: 'servicos-complementares', kicker: 'Serviços Complementares' },
  { id: 'eles-confiam-na-gente', kicker: 'Confiança' },
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
    description: 'Bolos de diferentes sabores, fabricados artesanalmente com ingredientes frescos de alta qualidade.',
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
    description: 'Seleção de bebidas de qualidade para harmonizar com o menu e o formato do evento.',
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

export const serviceLinks = [
  { label: 'BOLOS', to: '/servicos-complementares#bolos' },
  { label: 'DOCES', to: '/servicos-complementares#doces' },
  { label: 'BEBIDAS', to: '/servicos-complementares#bebidas' },
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
        'Crêpes francesas preparadas por nossos chefs de cozinha a partir de uma receita familiar, com massa fina e leve e recheios doces e salgados, dos clássicos aos exclusivos.',
        {
          versoes: 'Nas versões: Tradicional, Vip e Gourmet.',
          items: [
            'Cocktail inicial de finger foods.',
            'Crêpes salgadas, saladas e molhos quentes.',
            'Crêpes doces, sorvete e calda.',
            'Finalização com café com petit-fours.',
          ],
          disclaimer:
            'Complemente este cardápio com a sofisticação dos nossos vinhos e espumantes franceses.',
          photos: gallery('tradicionais-crepes'),
        },
      ),
      section(
        'massas',
        'Massas',
        'Massas frescas artesanais preparadas por nossos chefs de cozinha, na hora e na frente dos convidados, com diversos temperos.',
        {
          versoes: 'Nas versões: Tradicional e Gourmet.',
          items: [
            'Cocktail inicial de finger foods.',
            'Massas, saladas e molhos quentes. Carne opcional.',
            'Sobremesa e café com petit-fours.',
          ],
          disclaimer:
            'Com nossas opções de vinhos italianos, esse menu fica ainda mais especial.',
          photos: gallery('tradicionais-massas'),
        },
      ),
      section(
        'risottos',
        'Risottos',
        'Risottos preparados por nossos chefs de cozinha com arroz arbóreo e diversos temperos.',
        {
          versoes: 'Nas versões: Tradicional e Gourmet.',
          items: [
            'Cocktail inicial de finger foods.',
            'Risottos e saladas. Carne opcional.',
            'Sobremesa e café com petit-fours.',
          ],
          disclaimer:
            'Nossos vinhos italianos podem ser o toque perfeito para acompanhar esse buffet.',
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
          versoes: '',
          items: [
            'Cocktail inicial de petiscos.',
            'Feijoada completa com seus acompanhamentos tradicionais.',
            'Sobremesa de doces típicos.',
            'Café com petit-fours.',
          ],
          disclaimer:
            'Complemente essa tradicional e deliciosa feijoada com nosso bar de caipirinhas.',
          photos: gallery('brasileiros-feijoada'),
        },
      ),
      section(
        'churrasco',
        'Churrasco',
        'Carnes selecionadas, guarnições diversas e serviço adaptado ao ritmo do evento.',
        {
          versoes: '',
          items: [
            'Espetinhos: preparados com ingredientes de primeira linha e servidos com diversas guarnições. Finalização com sobremesa e café.',
            'Em peças: cortes nobres, bovinos e suínos, bem como os indispensáveis queijo coalho, pão de alho e linguiças artesanais. Variedade de acompanhamentos, sobremesas e café.',
          ],
          disclaimer:
            'Nosso chopp e serviço de bar de caipirinhas trazem ainda mais alegria e brasilidade para esse buffet.',
          photos: gallery('brasileiros-churrasco'),
        },
      ),
      section(
        'boteco',
        'Boteco',
        'Ideal para happy hour e eventos descontraídos.',
        {
          versoes: '',
          items: [
            'Serviço volante: diversos petiscos incríveis e porções em mini louças para um toque de requinte.',
            'Ilha gastronômica: apresentação primorosa de salgados tradicionais, pratos quentes em rechauds de barro, pães frescos, saladas, sobremesas típicas e café para complementar esse farto cardápio.',
          ],
          disclaimer:
            'Para uma festa completa e perfeita, acrescente nosso delicioso chopp e um bar de caipirinhas refrescantes.',
          photos: gallery('brasileiros-boteco'),
        },
      ),
      section(
        'outros',
        'Outros Brasileiros',
        'Inspirados pela riqueza da culinária nacional, oferecemos outras opções de cardápios.',
        {
          hideInNav: true,
          versoes: '',
          items: [
            'Festa juninas e julinas: cocktail volante com tudo que não pode faltar nesse tipo de festa, uma linda mesa de doces típicos e vinho quente e quentão para se aquecer.',
            'Buffet de escondidinhos: variedade de escondidinhos com recheios e coberturas diversas, guarnições, sobremesas e café.',
            'Buffet brasileiro: em ilha, um apetitoso mix de pratos, acompanhamentos e sobremesas baseados nas culinárias mineira, paulista e nordestina.',
          ],
          disclaimer: 'Com um chopp e uma caipirinha, a festa fica ainda mais perfeita.',
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
          versoes: '',
          items: [
            'Cocktail inicial de finger foods.',
            'Ilha com pratos quentes, saladas e guarnições.',
            'Sobremesas típicas.',
            'Café com petit-fours.',
          ],
          disclaimer:
            'Harmonize esse menu tradicional com nossos vinhos e espumantes franceses.',
          photos: gallery('internacionais-frances'),
        },
      ),
      section(
        'italiano',
        'Italiano',
        'Um passeio gastronômico com menus elaborados na pura tradição italiana.',
        {
          versoes: 'Nas versões: Tradicional e Especial.',
          items: [
            'Cocktail inicial com finger foods.',
            'Massa, risotto, carne, salada e guarnições.',
            'Sobremesa e café com petit-fours.',
          ],
          disclaimer:
            'Nossos vinhos italianos darão ainda mais harmonia a este delicioso cardápio.',
          photos: gallery('internacionais-italiano'),
        },
      ),
      section(
        'espanhol',
        'Espanhol',
        'As tradições culinárias da Espanha em um menu completo com a autêntica paella e outros pratos típicos surpreendentes.',
        {
          versoes: '',
          items: [
            'Cocktail inicial de finger foods.',
            'Paella preparada por nosso chef de cozinha, na hora e na frente dos convidados.',
            'Outros pratos quentes, guarnições e saladas.',
            'Sobremesas típicas e café com petit-fours.',
          ],
          disclaimer:
            'Acrescente ainda mais autenticidade com nossos vinhos e cavas espanhois.',
          photos: gallery('internacionais-espanhol'),
        },
      ),
      section(
        'mediterraneo',
        'Mediterrâneo',
        'Uma culinária leve e ensolarada com um menu inspirado em diversas culturas mediterrâneas: França, Grécia, Itália e Espanha.',
        {
          versoes: '',
          items: [
            'Cocktail inicial com finger foods.',
            'Massa, risotto, peixe, carne, saladas e guarnições.',
            'Mesa de sobremesas e café com petit-fours.',
          ],
          disclaimer:
            'Múltiplas escolhas de rótulos italianos, franceses e espanhois na nossa seleção de vinhos e espumantes para enriquecer este delicioso menu.',
          photos: gallery('internacionais-mediterraneo'),
        },
      ),
    ],
  },
  {
    path: 'finger-food',
    layout: 'split-sections',
    title: 'Finger Foods & Ilhas Gastronômicas',
    description:
      'Elegância e sofisticação em uma seleção variada de cores e sabores, proporcionando uma experiência visual e gustativa memorável.',
    sections: [
      section(
        'cocktail-volante',
        'Cocktail Volante de Finger Foods',
        '',
        {
          versoes: '',
          items: ['Porções individuais servidas nos formatos de sticks, taças, verrines, mini louças e bowls, ideais para eventos em movimento.',
            'Sobremesa individual e café com petit-four.'

          ],
          disclaimer:
            'Solicite nosso bar de drinks refrescantes e elegantes para harmonizar com nossos finger foods.',
          photos: gallery('finger-food-cocktail-volante'),
        },
      ),
      section(
        'ilha-gastronomica',
        'Em Ilha',
        'Sofisticação em diferentes opções de acordo com o estilo do evento e uma apresentação sempre primorosa e criativa.',
        {
          versoes: '',
          items: ['Ilha de finger foods: combinações irresistíveis de cores e sabores em sticks, taças, verrines e mini louças.',
            'Ilha gastronômica: finger foods, terrines, dips, queijos, frios, mini pães, toasts, frutas, nuts…elaborados com ingredientes frescos e sofisticados.',
            'Grazing table: apresentação em material  rústico, natural e orgânico que valorizam nossos arranjos de queijos finos, frios fatiados, frutas frescas e nuts crocantes e complementos como mini pães, dips e geleias.'

          ],
          disclaimer:
            'Acrescente ainda mais charme e personalidade para sua celebração com nossos vinhos e espumantes nacionais e importados.',
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
      'Ideal para eventos diurnos, esse serviço reúne diferentes menus conforme o momento do dia, com uma ampla variedade de bebidas quentes e frias e comidas leves e saborosas.',
    sections: [
      section(
        'breakfast',
        'Breakfast',
        'Um copioso café da manhã disposto numa linda mesa.',
        {
          versoes: '',
          items: [
            'Bebidas quentes diversas.',
            'Suqueiras com bebidas refrescantes.',
            'Mini sanduíches, pãozinho de queijo e salgadinhos assados, ou ainda, frios e queijos fatiados, mini pães e diversos complementos.',
            'Bolos caseiros, doces e frutas frescas.',
          ],
          disclaimer: '',
          photos: gallery('brunchs-breakfast'),
        },
      ),
      section(
        'brunch',
        'Brunch',
        'Um café da manhã farto, seguido de um almoço leve, o todo apresentado numa ilha requintada.',
        {
          versoes: '',
          items: [
            'No café da manhã, bebidas quentes e frias, mini-sanduíches, salgadinhos assados, frutas, iogurte, bolo caseiro e doces.',
            'Na hora do almoço, tortas, massas e saladas.',
            'Na finalização, sobremesas e café.',
          ],
          disclaimer:
            'Na hora do almoço, surpreenda servindo um dos nossos espumantes.',
          photos: gallery('brunchs-brunch'),
        },
      ),
      section(
        'tea-time',
        'Tea Time',
        'Na hora do chá da tarde, uma atmosfera acolhedora com uma mesa farta.',
        {
          versoes: '',
          items: [
            'Chás aromáticos e sucos naturais.',
            'Mini sanduíches e salgadinhos variados.',
            'Tortas salgadas e doces.',
            'Doces diversos.',
            'Frutas frescas.',
          ],
          disclaimer:
            'Para encantar seus convidados, ofereça nosso serviço de bar de drinks sem álcool.',
          photos: gallery('brunchs-tea-time'),
        },
      ),
    ],
  },
  singleFeaturePage({
    path: 'kids-teens',
    title: 'Kids & Teens',
    featureLayout: 'gallery-left',
    galleryLimit: 12,
    description:
      'Culinária pensada especialmente para crianças ou adolescentes, mas que todos apreciam.',
    body: '',
    highlights: [
      {
        title: 'Cocktail Volante',
        text: '3 cardápios diferentes, elaborados com uma variedade de opções criativas e saborosas para agradar pequenos e grandes: cocktail tradicional, comidinhas saudáveis e lanchonete.',
      },
      {
        title: 'Hamburgueria',
        text: 'Hambúrgueres preparados na hora e na frente dos convidados com diversos complementos e sobremesa.',
      },
      {
        title: 'Crêpes e Massas',
        text: 'Nossos menus tradicionais elaborados especialmente para festas infantis e teens.',
      },
      {
        title: 'Bolos & Doces',
        text: 'Oferecemos uma ampla seleção de bolos, docinhos e mini donuts.',
      },
      {
        title: 'Teens Bar',
        text: 'Para festas teens, surpreenda com nosso serviço de bar de drinks sem álcool.',
      },
    ],
    closing: '',
    closingLinks: [
      { label: 'bolos', to: '/servicos-complementares#bolos' },
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
      'Soluções personalizadas de acordo com sua demanda.',
    sections: [
      section(
        'bolos',
        'Bolos',
        'Bolos de diferentes sabores, fabricados artesanalmente com ingredientes frescos de alta qualidade.',
        {
          versoes: '',
          items: [],
          disclaimer: 'A cobertura e a decoração podem ser personalizadas.',
          photos: gallery('servicos-bolos'),
        },
      ),
      section(
        'doces',
        'Doces',
        'Grande variedade de docinhos tradicionais e gourmets e mini cakes donuts lindos e irresistíveis.',
        {
          versoes: '',
          items: [
            'Docinhos: Enrolados ou em verrines, podem ser personalizados com forminhas coloridas e apliques comestíveis.',
            'Mini cakes donut: Massa leve de bolo em forma de donut. Diversos recheios, coberturas e cores.',
            
          ],
          disclaimer:
            'Destaque para nossa linda torre: mini donuts, flores naturais e fitas de cetim.',
          photos: gallery('servicos-doces'),
        },
      ),
      section(
        'bebidas',
        'Bebidas',
        'Todos os nossos buffets incluem bebidas não alcoólicas como água mineral, suco e refrigerantes. Para outros tipos de bebidas, oferecemos uma seleção de qualidade para harmonizar com o menu e o formato do evento.',
        {
          descriptionLines: [
            'Todos os nossos buffets incluem bebidas não alcoólicas como água mineral, suco e refrigerantes.',
            'Para outros tipos de bebidas, oferecemos uma seleção de qualidade para harmonizar com o menu e o formato do evento.',
          ],
          versoes: '',
          items: [
            'Chopp e cervejas.',
            'Carta de vinhos e espumantes de diversas nacionalidades.',
            'Serviço de bar de drinks sem álcool.',
            'Serviço de bar de drinks e caipirinhas com bebidas nacionais e importadas.',
          ],
          disclaimer: '',
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
