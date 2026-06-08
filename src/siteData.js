import { resolveGalleryMedia } from './utils/galleryMedia'

const coverImage = (file) => `/gallery/covers/${file}`

// Pour modifier une galerie, remplace les fichiers dans le dossier correspondant,
// puis adapte uniquement la liste du dossier concerné ci-dessous.
const defaultGalleryFiles = [
  'sample-1.jpg',
  'sample-2.jpg',
  'sample-3.jpg',
  'sample-4.jpg',
  'sample-5.jpg',
  'sample-6.jpg',
  'sample-7.jpg',
  'sample-8.jpg',
]

const galleryFilesByFolder = {
  'brasileiros-boteco': [
    'sample-1.jpg',
    'sample-2.jpg',
    'sample-3.jpg',
    'sample-4.jpg',
    'sample-5.jpg',
    'sample-6.jpg',
    'sample-7.jpg',
    'sample-8.png',
  ],
  'brasileiros-churrasco': [
    '15 CHURRASCO ESPECIAL.jpg',
    'churrasco_1.jpg',
    'churrasco_2.jpg',
    'churrasco_3.jpg',
    'churrasco_4.jpg',
    'churrasco_5.jpeg',
    'churrasco_7.jpg',
    'churrasco_8.jpg',
    'Cópia de 12 FEIJOADA_CHURRASCO - PUDIM DE LEITE CONDENSADO.jpg',
    'Foto de LA GALETTE - Nathalie.jpg',
    'Foto de LA GALETTE - Nathalie(2).jpg',
    'Foto de LA GALETTE - Nathalie(3).jpg',
    'Foto de LA GALETTE - Nathalie(6).jpg',
    'Foto de LA GALETTE - Nathalie(8).jpg',
    'Foto de LA GALETTE - Nathalie(9).jpg',
  ],
  'kids-teens': [
    'sample-1.jpg',
    'sample-2.jpg',
    // Exemple vidéo :
    // { type: 'video', src: 'video-1.mp4', poster: 'video-1-poster.jpg' },
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
  ],
}

const gallery = (folder, files = galleryFilesByFolder[folder] ?? defaultGalleryFiles) => {
  const media = files.map((file) => resolveGalleryMedia(folder, file))
  media.folder = folder
  media.manifestUrl = `/gallery/${folder}/gallery.json`

  return media
}

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
  items,
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
  items,
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
    image: coverImage('menus-brasileiros.jpg'),
    to: '/brasileiros',
  },
  {
    title: 'Internacionais',
    description:
      'Uma viagem gastronômica inspirada em diversas culturas para experiências refinadas.',
    icon: 'internacionais',
    image: coverImage('menus-internacionais.jpg'),
    to: '/internacionais',
  },
  {
    title: 'Finger foods & Ilhas',
    description:
      'Elegância e requinte em combinações de cores e sabores para uma vivência visual e gustativa surpreendente.',
    icon: 'finger-food',
    image: coverImage('menus-finger-food.png'),
    to: '/finger-food',
  },
  {
    title: 'Brunch',
    description: 'Ideal em eventos diurnos com leveza e muito sabor.',
    icon: 'brunchs',
    image: coverImage('menus-brunchs.jpg'),
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
    description: 'Grande variedade de docinhos tradicionais e gourmets e mini donuts lindos e irresistíveis.',
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
  {
    name: 'Lucas Almeida',
    eventType: 'Finger Food',
    quote:
      'La Galette criou um menu fluido, generoso e perfeitamente adaptado à nossa recepção.',
  },
]

export const faqItems = [
  {
    question: 'Qual é o número mínimo de convidados?',
    answer: [
      'O mínimo é de 30 pessoas para a maioria dos nossos cardápios. Para eventos com ilhas gastronômicas, o mínimo sobe para 40 pessoas, devido à estrutura diferenciada que essa modalidade exige.',
    ],
  },
  {
    question: 'Quanto tempo vocês servem?',
    answer: [
      'Dependendo do cardápio escolhido, servimos os convidados entre 4 e 5 horas. Caso precise de mais tempo, é possível estender o serviço por até 2 horas adicionais, com cobrança de hora extra por profissional.',
      'A continuidade do serviço de alimentos e bebidas nesse período também tem custo adicional.',
    ],
  },
  {
    question: 'Os profissionais trabalham uniformizados?',
    answer: [
      'Sim. A vestimenta dos nossos garçons é preta: calça, avental longo, camisa e gravata. A equipe de cozinha trabalha com uniforme branco, seguindo as normas de higiene e segurança alimentar.',
    ],
  },
  {
    question: 'A partir de que idade as crianças são cobradas?',
    answer: [
      'A cobrança varia conforme o cardápio escolhido.',
      {
        label: 'Cardápios infantis',
        items: [
          'até 3 anos: gratuito',
          'de 4 a 6 anos: 50% do valor',
          'a partir de 7 anos: valor integral',
        ],
      },
      {
        label: 'Demais cardápios',
        items: [
          'até 4 anos: gratuito',
          'de 5 a 9 anos: 50% do valor',
          'a partir de 10 anos: valor integral',
        ],
      },
    ],
  },
  {
    question: 'O que está incluso nos cardápios de vocês?',
    answer: [
      'Incluímos cocktail volante com finger foods ou petiscos, pratos quentes e frios, sobremesa, café e bebidas não alcoólicas.',
    ],
  },
  {
    question: 'Vocês têm opções para convidados vegetarianos e veganos?',
    answer: [
      'Sim. Todos os nossos cardápios já incluem alimentos vegetarianos. Para convidados veganos, podemos incluir opções específicas mediante solicitação prévia.',
    ],
  },
  {
    question: 'Vocês fornecem louças e talheres?',
    answer: [
      'Sim. Fornecemos louças, talheres e todo o material necessário de acordo com o tipo de buffet contratado.',
    ],
  },
  {
    question: 'Os copos e taças estão inclusos?',
    answer: [
      'Incluímos copos para água, sucos, bebidas não alcoólicas e cerveja. As taças para vinho e espumante são cobradas à parte, exceto se você contratar nosso serviço de vinhos e espumantes. Nesse caso, as taças já estão inclusas.',
    ],
  },
  {
    question: 'Vocês fornecem bebidas alcoólicas?',
    answer: [
      'As bebidas não alcoólicas já estão inclusas. Bebidas alcoólicas não fazem parte do pacote padrão, mas é possível contratar separadamente nosso bar de drinks, além de vinhos, espumantes, cerveja e chopp.',
      'Podemos montar juntos a combinação ideal para o seu evento.',
    ],
  },
  {
    question: 'Se eu fornecer minhas próprias bebidas alcoólicas, vocês servem?',
    answer: [
      'Sim. Nossos garçons são capacitados para servir qualquer bebida alcoólica que você fornecer. A exceção é a preparação de drinks e o serviço de chopp, pois exigem dedicação exclusiva e comprometem o andamento do serviço.',
      'Para isso, você pode contratar separadamente um garçom especializado em chopp e nosso bar de drinks.',
    ],
  },
  {
    question: 'Posso acrescentar meus próprios alimentos ou bebidas no buffet?',
    answer: [
      'Sim. Pedimos apenas que nos avise com antecedência, pois precisamos providenciar o material necessário para servir o que você nos fornecer, como louças, suportes e utensílios específicos. Esses itens são alugados em empresas especializadas, e o custo é cobrado à parte.',
    ],
  },
  {
    question: 'Se eu retirar o café e a sobremesa, vocês dão desconto?',
    answer: [
      'Entendemos que cada evento tem suas particularidades, mas retirar etapas do buffet desvaloriza o serviço e deixa o evento incompleto. Um buffet bem estruturado, com entradas, prato principal, sobremesa e café, garante a satisfação dos seus convidados do início ao fim.',
      'Podemos estudar descontos muito pequenos nesses casos, porém, na nossa experiência, a economia não compensa: o serviço fica comprometido e os convidados acabam sentindo a diferença.',
    ],
  },
  {
    question: 'Se comparecer menos pessoas do que o previsto, vocês dão desconto?',
    answer: [
      'Infelizmente não. Todo o planejamento, incluindo compra de alimentos, bebidas e dimensionamento da equipe, é feito com base no número de convidados confirmado. Por isso, mesmo que compareçam menos pessoas, o valor contratado é mantido.',
    ],
  },
  {
    question: 'E se comparecer mais pessoas do que o previsto, vocês conseguem servir?',
    answer: [
      'Sempre levamos alimentos e bebidas para até 10% a mais do número de convidados confirmado, e a diferença é cobrada ao final do serviço.',
      'Para além disso, não podemos garantir que não faltem alimentos e bebidas, e a equipe pode ficar sobrecarregada, comprometendo a qualidade do atendimento. Por isso, é muito importante confirmar o número de convidados com precisão.',
    ],
  },
  {
    question: 'Até quando posso confirmar o número de pessoas?',
    answer: [
      'Você pode confirmar o número de convidados até 5 dias úteis antes do evento. Lembrando que sempre levamos para até 10% a mais do confirmado, e qualquer diferença é cobrada ao final do serviço.',
    ],
  },
  {
    question: 'Terei monitores de recreação e músicos no meu evento. Vocês cobram?',
    answer: [
      'Sim. Qualquer outro prestador de serviço que consumir alimentos e bebidas é cobrado 50% do valor integral por pessoa.',
    ],
  },
  {
    question: 'Como posso ter garantia de que a data está reservada para mim?',
    answer: [
      'Para garantir a sua data, formalizamos tudo com um contrato completo e detalhado, e pedimos o pagamento de um sinal para confirmar a reserva. Assim você fica tranquila sabendo que tudo está assegurado para o seu evento.',
    ],
  },
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
        'Crêpes francesas preparadas com uma receita familiar, massa fina e leve e recheios salgados e doces, dos clássicos aos exclusivos.',
        {
          versoes: 'Nas versões: Tradicional, Vip e Gourmet.',
          items: [
            'Cocktail inicial de finger foods.',
            'Crêpes salgadas, saladas e molhos quentes.',
            'Crêpes doces, sorvete e calda.',
            'Finalização com café e petit-fours.',
          ],
          disclaimer:
            'Complemente este cardápio com a sofisticação dos nossos vinhos e espumantes franceses.',
          photos: gallery('tradicionais-crepes'),
        },
      ),
      section(
        'massas',
        'Massas',
        'Massas frescas artesanais preparadas com diversos temperos e molhos.',
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
        'Risottos preparados com arroz arbóreo e diferentes temperos.',
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
            'Espetinhos: preparados com ingredientes de primeira linha e servidos com diferentes guarnições. Finalização com sobremesa e café.',
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
            'Serviço volante: diversos petiscos irresistíveis e porções em mini louças para um toque de requinte.',
            'Ilha gastronômica: apresentação primorosa de salgados tradicionais, pratos quentes em rechauds de barro, pães frescos, saladas, sobremesas típicas e café para finalizar.',
          ],
          disclaimer:
            'Para uma festa completa e perfeita, acrescente nosso delicioso chopp e um bar de caipirinhas refrescantes.',
          photos: gallery('brasileiros-boteco'),
        },
      ),
      section(
        'juninos',
        'Junino',
        'Junho ou julho, a festa tem que ser alegre com todas as comidinhas típicas que esperamos o ano todo.',
        {
          hideInNav: true,
          versoes: '',
          items: [
            'Churrasco de espetinhos.',
            'Cocktail volante de salgados diversos.',
            'Linda mesa de doces tradicionais.',
            'Vinho quente e quentão para se aquecer.',
          ],
          disclaimer: 'Com um chopp e uma caipirinha, a festa fica ainda mais perfeita.',
          imageAlt: 'Galeria de menus juninos',
          photos: gallery('brasileiros-juninos'),
        },
      ),
    ],
  },
  {
    path: 'internacionais',
    layout: 'split-sections',
    title: 'Menus Internacionais',
    description:
      'Uma viagem gastronômica inspirada em diversas culturas para experiências refinadas.',
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
            'Cocktail inicial de tapas.',
            'Paella preparada por nosso chef de cozinha, na hora e na frente dos convidados.',
            'Outros pratos quentes, guarnições e saladas.',
            'Sobremesas típicas e café com petit-fours.',
          ],
          disclaimer:
            'Acrescente ainda mais autenticidade com nossos vinhos e cavas espanhóis.',
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
            'Múltiplas escolhas de rótulos italianos, franceses e espanhóis na nossa seleção de vinhos e espumantes para enriquecer este delicioso menu.',
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
      'Elegância e requinte em combinações de cores e sabores para uma vivência visual e gustativa surpreendente.',
    sections: [
      section(
        'cocktail-volante',
        'Cocktails',
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
        'Ilhas',
        'Sofisticação em diferentes opções de acordo com o estilo do evento e uma apresentação sempre primorosa e criativa.',
        {
          versoes: '',
          items: ['Ilha de finger foods: combinações irresistíveis de cores e sabores em sticks, taças, verrines e mini louças.',
            'Ilha gastronômica: finger foods, terrines, dips, queijos, frios, mini pães, toasts, frutas, nuts…elaborados com ingredientes frescos e sofisticados.',
            'Grazing table: apresentação em material rústico, natural e orgânico que valorizam nossos arranjos de queijos finos, frios fatiados, frutas frescas e nuts crocantes e complementos como mini pães, dips e geleias.'

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
            'No café da manhã, bebidas quentes e frias, mini-sanduíches, salgadinhos, frutas, bolos e doces.',
            'No almoço, tortas, massas e saladas.',
            'Na finalização, sobremesas e café.',
          ],
          disclaimer:
            'No almoço, surpreenda servindo um dos nossos espumantes.',
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
        text: 'Diferentes cardápios elaborados com uma variedade de opções saborosas para agradar pequenos e grandes.',
        note: 'Nas versões: tradicional, saudável e lanchonete.',
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
    path: 'corporativo',
    layout: 'split-sections',
    title: 'Corporativos',
    description:
      'Inaugurações, vernissages, reuniões empresariais, congressos, palestras... para cada tipo de evento, menus específicos em diversos serviços e formatos.',
    sections: [
      section(
        'welcome-coffee',
        'Welcome coffee e Coffee-break',
        'Uma pausa para descontrair e conversar.',
        {
          versoes: '',
          items: [
            'Bebidas quentes, sucos naturais e águas saborizadas.',
            'Mini sanduíches e salgados diversos.',
            'Bolos caseiros, doces e frutas.',
          ],
          disclaimer: '',
          photos: gallery('corporativo-welcome-coffee'),
        },
      ),
      section(
        'almoco',
        'Almoço',
        'Um momento agradável com um menu farto e cheio de sabor.',
        {
          versoes: '',
          items: [
            'Variados pratos quentes.',
            'Guarnições e saladas.',
            'Sobremesas com doces e frutas.',
            'Bebidas refrescantes.',
            'Café com petits fours.',
          ],
          disclaimer: '',
          imageAlt: 'Galeria de almoços corporativos',
          photos: gallery('corporativo-almoco'),
        },
      ),
      section(
        'cocktail-happy-hour',
        'Cocktail e Happy-hour',
        'Salgados artesanais e finger foods elegantes e criativos em combinações surpreendentes de cores e sabores.',
        {
          versoes: '',
          items: [
            'Salgadinhos tradicionais.',
            'Finger foods frios em taças e verrines.',
            'Finger foods quentes em mini louças e bowls.',
            'Água, sucos e refrigerantes.',
            'Café gourmet com mini sobremesas.',
          ],
          disclaimer:
            'Um drink em nosso bar, um chopp gelado, ou ainda, um bom vinho ou espumante serão bem-vindos e apreciados por todos.',
          imageAlt: 'Galeria de cocktails e happy-hours corporativos',
          photos: gallery('corporativo-cocktail-happy-hour'),
        },
      ),
    ],
  },
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
        'Grande variedade de docinhos tradicionais e gourmets e mini donuts lindos e irresistíveis.',
        {
          versoes: '',
          items: [
            'Docinhos: Enrolados ou em verrines, podem ser personalizados com forminhas coloridas e apliques comestíveis.',
            'Mini Donuts: Massa leve de bolo em formato de donut. Diversos recheios, coberturas e cores.',
            
          ],
          disclaimer:
            'Destaque para nossa linda torre de mini donuts com flores naturais e fitas de cetim.',
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
    path: 'personalizado',
    title: 'Personalizados',
    featureLayout: 'gallery-left',
    galleryLimit: 12,
    description:
      'Cardápios sob medida elaborados de acordo com suas preferências e motivo da comemoração.',
    body:
      'Tantos motivos, sonhos e ideias para criarmos menus sob medida de acordo com o estilo, tema e local do evento, que seja particular ou corporativo.',
    items: [
      'Almoço country',
      'Aniversário no sítio',
      'Lançamento de livro',
      'Aniversário da empresa',
      'Almoço corporativo especial',
      'Casamento na praia ou no campo',
      'Inauguração de loja, clínica e escola',
      'Encerramento de congresso internacional',
    ],
    folder: 'personalizado',
    imageAlt: 'Galeria de menus personalizados',
  }),
]

const menuSubmenuPaths = ['tradicionais', 'brasileiros', 'internacionais']

export const menuLinks = [
  ...homeMenuCards.map((card) => {
    const page = menuPages.find((menuPage) => `/${menuPage.path}` === card.to)
    const children = menuSubmenuPaths.includes(page?.path)
      ? page.sections
          .filter((sectionItem) => !sectionItem.hideInNav)
          .map((sectionItem) => ({
            label: sectionItem.title,
            to: `${card.to}#${sectionItem.id}`,
          }))
      : undefined

    return {
      label: card.title.toUpperCase(),
      to: card.to,
      children,
    }
  }),
  { label: 'CORPORATIVOS', to: '/corporativo' },
  { label: 'PERSONALIZADOS', to: '/personalizado' },
]
