export default {
  global: {
    componenteFormativo:
      'Elementos y procedimientos para la planeación logística en el e-commerce',
    descripcionCurso:
      'El estudio de la logística proporciona el resultado del conocimiento y los procesos logísticos innovadores en la flexibilidad operativa. Se fundamenta teóricamente en la visión de la empresa basada en los recursos, ampliada con la visión basada en el conocimiento. Los procesos logísticos se proponen como recursos clave en el desarrollo de una importante capacidad logística. Un modelo de datos de los KPI apoya las relaciones propuestas e indica que los procesos logísticos pueden conducir a una mayor flexibilidad operativa. También conduce a niveles más altos de rendimiento analizando sus variables dentro de la cadena.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.svg'),
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
        titulo: 'Diagnóstico en procesos logísticos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'KPI - Key Performance Indicators',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Estrategias y acciones',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Mediciones y optimización',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Logística inversa',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Buenas prácticas de bioseguridad',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      //{
      //  nombreRuta: 'actividad',
      //  icono: 'far fa-question-circle',
      //  titulo: 'Actividad didáctica',
      //  desarrolloContenidos: true,
      //},
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
  creditos: {
    liderEquipo: {
      nombre: 'Maria Camila Garcia Santamaria',
      cargo: 'Líder del equipo',
    },
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro: 'Centro industrial del diseño y la manufactura',
        regional: 'Regional Santander',
      },
      {
        nombre: 'Nelly Parra Guarín',
        cargo: 'Experto temático',
        centro: 'Centro de gestión industrial',
        regional: 'Distrito Capital',
      },
      {
        nombre: 'Paula Andrea Taborda Ortiz',
        cargo: 'Diseñador instruccional',
        centro: 'Centro de diseño y metrología',
        regional: 'Regional Distrito Capital',
      },
      {
        nombre: 'Carolina Coca Salazar',
        cargo: 'Revisión metodológica y pedagógica',
        centro: 'Centro para la industria de la comunicación gráfica',
        regional: 'Regional Distrito Capital',
      },
      {
        nombre: 'Jhana Bustillo',
        cargo: 'Corrección de estilo',
        centro: 'Centro para la industria de la comunicación gráfica',
        regional: 'Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro: 'Centro industrial del diseño y la manufactura',
        regional: 'Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro industrial del diseño y la manufactura',
        regional: 'Regional Santander',
      },
      {
        nombre: 'Blanca Flor Tinoco Torres',
        cargo: 'Diseño web',
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
      {
        nombre: [
          'Arnulfo Beltrán',
          'Adriana Ariza Luque',
          'Daniela Muñoz Bedoya',
        ],
        cargo: 'Producción audiovisual',
        centro: 'Centro industrial del diseño y la manufactura',
        regional: 'Regional Santander',
      },
      {
        nombre: ['Lina Marcela Pérez', 'Ángela Maldonado'],
        cargo: 'Ilustración',
        centro: 'Centro industrial del diseño y la manufactura',
        regional: 'Regional Santander',
      },
      {
        nombre: 'Rafael Augusto Mantilla López',
        cargo: 'Validación de diseño y contenido',
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
      {
        nombre: 'Jhon Jairo Urueta Alvarez',
        cargo: 'Desarrollo front-end',
        centro: 'Centro de comercio y servicios',
        regional: 'Regional Tolima',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de comercio y servicios',
        regional: 'Regional Tolima',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'A. Heredia Zurita y M. Dini, “Análisis de las políticas de apoyo a las pymes para enfrentar la pandemia de COVID-19 en América Latina”, Documentos de Proyectos (LC/TS.2021/29), Santiago, Comisión Económica para América Latina y el Caribe (CEPAL), 2021.',
    },
    {
      referencia:
        'García Olivares, Arnulfo Arturo:(2004) Recomendaciones táctico – operativas para implementar un programa de Logística Inversa, editado por eumed. Net. México.',
    },
    {
      referencia:
        'Gómez Acosta, Marta (2007) La logística moderna de la empresa, editora Logicuba.',
    },
    {
      referencia:
        'Lord Kelvin, Recipient of The John Fritz Medal in 1905 Matthew Trainer, Physics in Perspective, (2008).',
    },
    {
      referencia:
        'Monroy N & Ahumada C (2006) Logística Reversa: Retos para la Ingeniería Industrial. Revista de Ingeniería Pág 23.',
    },
  ],
  glosario: [
    {
      termino: 'Bioseguridad',
      significado:
        'conjunto de medidas preventivas, destinadas a mantener el control de factores de riesgo laborales procedentes de agentes biológicos, físicos o químicos, logrando la prevención de impactos nocivos.',
    },
    {
      termino: 'Distribución',
      significado:
        'la logística de distribución proporciona vínculos físicos de organización y de información entre almacén de salida de la empresa y los consumidores finales.',
    },
    {
      termino: 'Innovación',
      significado:
        'el  trabajo de desarrollar nuevas prácticas en la visión organizativa y la gestión del conocimiento, de manera que  faciliten  el desarrollo y la integración en la aplicación del conocimiento, con supuestos y un sistema de propuestas constantes,  para implementar desarrollo empresarial y sostenimiento en el mercado.',
    },
    {
      termino: 'Producción',
      significado:
        'el objetivo fundamental de la logística de producción puede formularse como la búsqueda de una mayor capacidad de entrega y fiabilidad con el menor número posible de operaciones logísticas.',
    },
  ],
  complementario: [
    {
      texto:
        'Ministerio de Salud y Protección Social, 2021. Resolución protocolo de seguridad.',
      tipo: 'PDF',
      link:
        'https://www.minsalud.gov.co/Normatividad_Nuevo/Resoluci%C3%B3n%20No.%20889%20de%202020.pdf',
    },
    {
      texto:
        'Servicio Nacional de Aprendizaje, 2021. Mesas Sectoriales – Conectando Sectores.',
      tipo: 'Página web',
      link:
        'https://www.sena.edu.co/es-co/Empresarios/Paginas/mesasSectoriales.aspx ',
    },
  ],
}
