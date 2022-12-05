export default {
  global: {
    componenteFormativo: 'Procesos, reportes de fuentes de datos',
    descripcionCurso:
      'El manejo de grandes cantidades de datos requiere de un tratamiento diferente, especial, lo cual implica unos saberes y competencias igual de especiales por las implicaciones que esto conlleva principalmente, por su gran importancia en la toma de decisiones empresariales.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal-.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal-.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1-.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2-.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Fuentes de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Sistemas transaccionales',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Bases de datos',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Archivos planos',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'APIs',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Ficheros de texto',
            hash: 't_1_5',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Procesos ETL',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: '<em>Slowly Changing Dimensions</em> (SCD)',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Creación <em>data warehause</em>',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Herramientas de depuración',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Gestión de bodega de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '6.1',
            titulo: 'Consultas y reportes de bodega de datos',
            hash: 't_6_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '6.2',
            titulo: 'Sistemas de soporte y apoyo',
            hash: 't_6_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Data warehouse',
      referencia:
        'Luna, E. & García, F. (2006). El repositorio de metadatos en un data warehouse. <em>Red Revista de Facultad de Ingeniería.</em> ',
      tipo: 'Revista',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/12241',
    },
    {
      tema: 'Data warehouse',
      referencia:
        'Curto, J. & Conesa, J. (2015). <em>¿Cómo crear un data warehouse? Editorial UOC.</em> ',
      tipo: 'Libro',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/114035',
    },
    {
      tema: 'Grafos',
      referencia:
        'Rodríguez, M. & Conesa, J. (2017). <em>¿Cómo usar una base de datos en grafo?</em> Editorial UOC. ',
      tipo: 'Libro',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/58639',
    },
    {
      tema: 'Ingeniería de Requerimientos',
      referencia:
        'Pressman, R. (2010). Ingeniería de software. Un enfoque práctico <em>(7 edición)</em>.  Mac Graw Hill.',
      tipo: 'Libro',
      link:
        'https://www-ebooks7-24-com.bdigital.sena.edu.co/stage.aspx?il=&pg=&ed=',
    },
  ],
  glosario: [
    {
      termino: 'API',
      significado:
        '<em>Application Programming Interface,</em> que en español quiere decir interfaz de programación de aplicaciones.',
    },
    {
      termino: 'CRUD',
      significado: 'acrónimo de <em>Create, Read, Update, Delete.</em>',
    },
    {
      termino: '<em>Data mining</em>',
      significado:
        'en español significa minería de datos, es una herramienta utilizada para el análisis de grandes cantidades de información.',
    },
    {
      termino: '<em>Data warehouse</em>',
      significado:
        'es un gran repositorio de datos, que nos permite una visión general, global e integrada de la información de una organización.',
    },
    {
      termino: 'ERP',
      significado:
        '<em>Enterprise Resource Planning,</em> que en español quiere decir sistema de planificación de recursos empresariales.',
    },
    {
      termino: 'ETL',
      significado:
        '<em>Extract, Transform, Load,</em> que en español se traduce como extraer, transformar y cargar.',
    },
    {
      termino: 'JSON',
      significado:
        '<em>JavaScript Object Notation,</em> que en español quiere decir notación de objetos de <em>JavaScript.</em>',
    },
    {
      termino: 'NoSQL',
      significado: 'bases de datos no relacionadas de alto desempeño.',
    },
    {
      termino: 'OLAP',
      significado:
        '<em>Online Analytical Processing</em> que se traduce como procesamiento analítico en línea.',
    },
    {
      termino: 'SDC',
      significado:
        '<em>Slowly Changing Dimensions</em> que en español quiere decir dimensiones lentamente cambiantes.',
    },
    {
      termino: 'XML',
      significado:
        '<em>Extensible Markup Language</em> que se traduce como lenguaje de marcado.',
    },
  ],
  referencias: [
    {
      referencia:
        'Arias, J. (19 de mayo de 2020). Herramientas gratis para hacer wireframes y prototipos. <em>UXABLES BLOG.</em>',
      link:
        'http://www.uxables.com/herramientas-recursos-ux-ui/herramientas-gratis-para-hacer-wireframes-y-prototipos/',
    },
    {
      referencia:
        'Capacho, J. & Nieto, W. (2017). <em>Diseño de base de datos.</em> Universidad del Norte. ',
      link:
        'https://editorial.uninorte.edu.co/catalogsearch/advanced/result/?products_keywords=Dise%C3%B1o+de+bases+de+datos ',
    },
    {
      referencia:
        'Carmona, G. (2020). <em>Aplicaciones informáticas de base de datos relacionales. </em>IC Editorial.',
    },
    {
      referencia:
        'Crespo, S., Medianero, X. & Clunie, C. (2012). M-TAR: metodología para el tratamiento de apectos en requerimientos. <em>Prisma Tecnológico 3(1).</em> ',
      link:
        'https://revistas.utp.ac.pa/index.php/prisma/article/view/550/html#:~:text=El%20Modelo%20ViewPoint%20(Puntos%20de,detallado%20y%20mejorado%20%5B9%5D',
    },
    {
      referencia:
        'Duque, C, (2022). Levantamiento de requerimientos en tiempos de pandemia.<em> Tecnología Investigación y Academia, 10(1), 5-19.</em> ',
      link:
        'https://revistas.udistrital.edu.co/index.php/tia/article/view/17883',
    },
    {
      referencia:
        'Echeverri, J. (2013).<em> Reflexiones sobre ingeniería de requisitos y pruebas de software.</em> Fondo Editorial Remington. ',
      link:
        'https://www.academia.edu/29568035/Reflexiones_sobre_ingenier%C3%ADa_de_requisitos_y_pruebas_de_software',
    },
    {
      referencia:
        'Grupo ACMS Consultores. (2019). Norma ISO 33000 calidad de procesos de desarrollo software. <em>Grupo ACMS Consultores.</em> ',
      link: 'https://www.grupoacms.com/norma-iso-33000',
    },
    {
      referencia:
        'Luján, D. (2017). ¿Cómo se deciden las versiones del<em> software? EDteam.</em> ',
      link: 'https://ed.team/blog/como-se-deciden-las-versiones-del-software',
    },
    {
      referencia:
        'Martínez, J., & Gallegos, A. (2017). <em>Programación de base de datos relacionales. </em>Ediciones de la U.',
    },
    {
      referencia:
        'Medina, J., Pineda, E. & Téllez, F. (2019). Requerimientos de <em>software</em>: prototipado,<em> software</em> heredado y análisis de documentos.<em> Ingenieria y Desarrollo, 37(2).</em> ',
      link:
        'http://www.scielo.org.co/scielo.php?script=sci_arttext&pid=S0122-34612019000200327',
    },
    {
      referencia:
        'Molina, D. (9 de diciembre de 2021). Qué es un product backlog y cómo hacer uno [Guía Scrum].<em>IEBS.</em> ',
      link:
        'https://www.iebschool.com/blog/que-es-un-product-backlog-y-como-hacer-uno-guia-scrum-agile-scrum/#:~:text=Un%20product%20backlog%20es%20una,visibles%20para%20todo%20el%20equipo',
    },
    {
      referencia:
        'Naeem, T. (21 de febrero de 2020). <em>Automatización de datos:</em> cómo transforma el panorama empresarial. <em>Astera.</em> ',
      link:
        'https://www.astera.com/es/tipo/blog/automatizaci%C3%B3n-de-datos/ ',
    },
    {
      referencia:
        'Novoseltseva, E. (16 de enero de 2020). Técnicas de priorización de requererimientos de Software.<em> Apiumhub. </em>',
      link:
        'https://apiumhub.com/es/tech-blog-barcelona/priorizacion-requerimientos-software/',
    },
    {
      referencia:
        'Peralta, E. (2021). Cómo funciona la metodología Scrum. <em>Genwords.</em> ',
      link: 'https://www.genwords.com/blog/metodologia-scrum',
    },
    {
      referencia:
        'Rehan, A. (20 de abril de 2021). ¿Qué es un archivo plano?<em> Astera.</em> ',
      link:
        'https://www.astera.com/es/topic/data-integration/flat-file-connectors/',
    },
    {
      referencia: 'UNNE. (2018). <em>Ingenieria de Software I. </em>',
      link:
        'https://isi2018.wordpress.com/2018/04/09/metodologia-agil-crystal/',
    },
    {
      referencia:
        'Valderrey, P. (2020).<em> Gestión de bases de datos.</em> Starbook.',
    },
    {
      referencia:
        'Wanumen, L., Rivas, E. & Mosquera, D. (2017).<em> Bases de datos en SQL Server.</em> Ecoe Ediciones.',
    },
    {
      referencia:
        'Vaware Labs. (19 de febrero de 2020). Wireframes y Mockups: conoce los tipos de prototipo. <em>Vaware Labs.</em> ',
      link:
        'https://vawarelabs.com/comunidad-agile/diseno-ux-ui/wifreframes-prototipos-diseno-mockups/',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
