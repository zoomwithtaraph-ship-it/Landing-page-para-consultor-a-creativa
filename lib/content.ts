export const CONTENT = {
  hero: {
    eyebrow: 'CONSULTORÍA CREATIVA · 30 MIN · GRATIS',
    title: 'Si tu marca no se ve lo suficientemente buena, acá te digo por qué.',
    subtitle:
      'Diagnóstico honesto de tu identidad visual en 30 minutos. Descubre qué frena tu crecimiento y lleva 3 mejoras concretas para aplicar ya.',
    ctaPrimary: 'Agendar mi sesión gratuita',
    ctaSecondary: 'Ver cómo funciona',
    trust: '30 minutos · Sin compromiso · 100% gratis',
  },
  problems: {
    title: 'Si te suena alguno de estos, esta sesión es para ti.',
    items: [
      {
        title: 'Mi marca se ve bien… pero no convierte.',
        description: 'Cards sin sentido sin diagnóstico claro.',
      },
      {
        title: 'Cada pieza que sale parece de una marca distinta.',
        description: 'Falta sistema visual, sobra improvisación.',
      },
      {
        title: 'Sé que necesito invertir, pero no sé en qué primero.',
        description: 'Quieres priorizar bien tu presupuesto creativo.',
      },
    ],
  },
  benefits: {
    title: 'En 30 minutos sales con esto:',
    items: [
      {
        icon: 'CheckCircle2',
        title: 'Diagnóstico honesto',
        description: 'Te digo exactamente cómo se está leyendo tu marca hoy.',
      },
      {
        icon: 'Target',
        title: 'Asesoría gratuita',
        description: 'Tres mejoras concretas y priorizadas que puedes aplicar ya.',
      },
      {
        icon: 'MessageSquare',
        title: 'Feedback real',
        description: 'Te digo si tiene sentido trabajar juntos o no. Sin rodeos.',
      },
      {
        icon: 'Lightbulb',
        title: 'Recomendaciones creativas',
        description: 'Direcciones específicas para subir la percepción visual de tu empresa.',
      },
    ],
  },
  process: {
    title: 'Cómo trabajamos en la sesión.',
    steps: [
      {
        number: '1',
        title: 'Agendas en mi calendario',
        description: 'Eliges hora, completas 4 datos rápidos.',
      },
      {
        number: '2',
        title: 'Yo reviso tu marca antes',
        description: 'Visito tu web, IG, materiales. Llego con notas.',
      },
      {
        number: '3',
        title: '30 min en Zoom/Meet',
        description: 'Te muestro qué veo, qué cambiar y qué pasos seguir.',
      },
    ],
  },
  forWhom: {
    isFor: {
      title: 'Es para ti si:',
      items: [
        'Tienes un negocio o emprendimiento activo.',
        'Estás listo para escuchar feedback honesto.',
        'Quieres mejorar tu identidad visual en serio.',
      ],
    },
    isNotFor: {
      title: 'No es para ti si:',
      items: [
        'Buscas una consulta técnica gratis (Photoshop, código, etc.).',
        'No tienes una marca aún (mejor empecemos por estrategia, contáctame por email).',
        'Solo quieres validación, no diagnóstico.',
      ],
    },
  },
  aboutMe: {
    title: 'Quién va a estar del otro lado de la pantalla.',
    bio: 'Soy estratega creativo enfocado en identidad visual. He diagnosticado cientos de marcas y sé exactamente qué hace que una se vea "meh" y otra irresistible. No ofrezco paliativos, ofrezco cambios reales que impacten cómo se percibe tu empresa.',
  },
  faq: [
    {
      question: '¿Cuánto cuesta?',
      answer: 'Cero. La sesión es gratis y sin compromiso.',
    },
    {
      question: '¿Me vas a vender algo?',
      answer: 'Solo si tiene sentido. Si no encajamos, te lo digo y nos despedimos bien.',
    },
    {
      question: '¿Qué necesito preparar?',
      answer: 'Nada. Yo reviso tu marca antes de la sesión.',
    },
    {
      question: '¿Cuánto dura?',
      answer: '30 minutos exactos. Respeto tu tiempo.',
    },
    {
      question: '¿Es por Zoom o en persona?',
      answer: 'Online, vía Google Meet (link automático al agendar).',
    },
    {
      question: '¿Y si no tengo marca todavía?',
      answer: 'Escríbeme por email, empezamos por estrategia.',
    },
  ],
  booking: {
    title: 'Elige tu hora. Yo me ocupo del resto.',
    subtitle: '30 minutos. Gratis. Sin compromiso.',
    fallbackText: '¿Prefieres escribirme?',
    fallbackEmail: 'zoomwithtaraph@gmail.com',
  },
  footer: {
    name: 'Zoom with Tara',
    socialLinks: [
      { label: 'Instagram', url: 'https://www.instagram.com/zoomwith_tarara/' },
      { label: 'Email', url: 'mailto:zoomwithtaraph@gmail.com' },
    ],
  },
  config: {
    calendlyLink: process.env.NEXT_PUBLIC_CALENDLY_LINK || 'https://calendly.com/sebastian/consultoria-creativa',
    instagramUrl: 'https://www.instagram.com/zoomwith_tarara/',
    email: 'zoomwithtaraph@gmail.com',
  },
}
