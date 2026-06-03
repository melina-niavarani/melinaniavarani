export default {
  meta: {
    home: {
      title: 'Melina Niavarani | Frontend Developer & Digital Marketing Specialist',
      description:
        'Portfolio of Melina Niavarani — frontend developer and Digital Marketing Specialist. Next.js, Vue, React, and B2B digital growth for oil, bitumen, and industrial markets.',
    },
    archive: {
      title: 'Project Archive | Melina Niavarani',
      description:
        'Full project archive by Melina Niavarani — web apps, demos, and client work built with Vue, React, and modern frontend tooling.',
    },
    demo: {
      title: 'Video Call Demo | Melina Niavarani',
      description:
        'Live video call demo powered by Jitsi Meet — create or join meetings in the browser.',
    },
  },
  lang: {
    switchTo: 'فارسی',
    current: 'English',
    label: 'Language',
  },
  nav: {
    about: 'About',
    experience: 'Experience',
    projects: 'Projects',
  },
  intro: {
    role1: 'Frontend Developer',
    role2: 'Digital Marketing Specialist',
    nameFirst: 'Melina',
    nameLast: 'Niavarani',
    bio:
      'I craft fast, accessible web applications with {stack}, and drive organic growth through {seo} — with hands-on expertise in {industry}.',
    stack: 'Next.js, Vue, and React',
    seo: 'technical SEO & content strategy',
    industry: 'oil, bitumen, and industrial B2B markets',
    badgeAvailable: 'Available for Projects',
    badgeTimezone: 'GCC Time Zone',
    badgeLanguages: 'English & Persian',
  },
  about: {
    ariaLabel: 'About me',
    title: 'About',
    p1: "Hi, I'm Melina — a Frontend Developer and Digital Marketing/SEO Specialist. I build fast, accessible web applications with Next.js, Vue, and React, and help B2B brands grow through technical SEO and content strategy. I also have domain expertise in the oil, bitumen, and industrial sectors.",
    p2: "My focus is the intersection of UI performance and SEO — from architecture and schema to multilingual optimization and analytics. I'm available for project-based or part-time contracts, GCC-ready (Dubai/Oman time-zone aligned), and comfortable working in English & Persian.",
    p3: 'Outside of work, I enjoy walking, spending time with family and friends, playing Piano, and a good match of Tennis.',
    toolsTitle: 'Here are a few technologies & tools I use regularly:',
    tools: [
      'Next.js / React',
      'Vue 3 / Vite',
      'TypeScript / Tailwind CSS',
      'Node.js / Strapi',
      'Technical SEO / Schema / i18n',
      'GA4 / Plausible / A/B testing',
      'Enterprise SEO (DNN & legacy systems)',
      'B2B content for oil/bitumen industry',
    ],
  },
  experience: {
    ariaLabel: 'Work experience',
    title: 'Experience',
    subtitle: 'My professional journey in frontend development and digital marketing',
    viewResume: 'View Full Résumé',
    viewResumeAria: 'View Full Résumé',
    items: [
      {
        period: '2025 — Present',
        category: 'Design & Development',
        role: 'Frontend Developer',
        company: 'RevivoEarth',
        url: 'https://revivoearth.com',
        description:
          'Developed the frontend of RevivoEarth, a platform focused on environmental awareness. Built with Next.js, TypeScript, and Tailwind, optimized for accessibility and scalability.',
        tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Accessibility'],
      },
      {
        period: '2025 — Present',
        category: 'Design & Development',
        role: 'Designer & Developer',
        company: 'BitumPro',
        url: 'https://bitumpro.com',
        description:
          'Designed and developed a complete corporate website for BitumPro, an international trading company specializing in bitumen and asphalt supply. Created a modern, multilingual platform with responsive design and SEO optimization.',
        tags: ['Web Design', 'Frontend Development', 'Multilingual', 'Corporate Website', 'B2B Platform'],
      },
      {
        period: '2025 — Present',
        category: 'Design & Development',
        role: 'Designer & Developer',
        company: 'ReEarthly',
        url: 'https://reearthly.netlify.app/en',
        description:
          'Designed and developed an environmental sustainability platform with carbon footprint tracking, renewable energy solutions, waste reduction programs, and community gardens — emphasizing user engagement and impact visualization.',
        tags: ['Web Design', 'Frontend Development', 'Sustainability', 'Environmental Tech', 'Impact Platform'],
      },
      {
        period: '2024 — Present',
        category: 'Web Application',
        role: 'Full-stack Developer',
        company: 'Dejpa NFC Business Cards',
        url: 'https://dejpanfc.netlify.app/en',
        description:
          'Developed a digital business card system with NFC integration for Dejpa team members, QR code fallback, and a secure admin dashboard for centralized contact management.',
        tags: ['NFC Technology', 'QR Code Integration', 'Secure Authentication', 'Digital Business Cards', 'Contact Management'],
      },
      {
        period: '2024 — Present',
        category: 'Full-time',
        role: 'SEO & Digital Marketing Specialist',
        company: 'Dejpa',
        url: 'https://dejpa.com',
        description:
          "Led SEO strategy and digital marketing for Dejpa's main website in the oil and bitumen industry. Implemented keyword strategy, content optimization, and technical SEO for local and international markets.",
        tags: ['SEO', 'Digital Marketing', 'Content Strategy', 'Technical SEO', 'B2B Growth'],
      },
      {
        period: '2025 — Present',
        category: 'Design & Development',
        role: 'Full-stack Developer',
        company: 'Rahrosell',
        url: 'https://rahrosell.com',
        description:
          'Designed and developed a complete online bookstore platform with a Next.js & Tailwind frontend and Strapi backend for inventory, admin panel, and custom roles — optimized for SEO, performance, and shopping UX.',
        tags: ['Next.js', 'Strapi', 'Tailwind CSS', 'E-commerce', 'SEO / Performance'],
      },
    ],
  },
  projects: {
    ariaLabel: 'Selected projects',
    title: 'Projects',
    subtitle: 'A showcase of my recent work and side projects',
    viewArchive: 'View Full Project Archive',
    viewArchiveAria: 'View Full Project Archive',
    techAria: 'Technologies used:',
    items: [
      {
        title: 'Video Call',
        ariaLabel: 'Video Call Demo',
        description:
          'A real video calling app just like Google Meet! Create a meeting or join with a code. HD video/audio, screen sharing, live chat, and supports English, Persian, and Arabic. No registration needed.',
        tags: ['Vue 3', 'Jitsi Meet', 'WebRTC', 'Real-time', 'P2P'],
        internal: true,
        to: '/demo/call',
      },
      {
        title: 'IAMDB App',
        ariaLabel: 'IAMDB App',
        href: 'https://iamdb-by-m.netlify.app/',
        description:
          'IAMDB is an online database of films, TV series, podcasts, games, and streaming content — including cast, crew, biographies, plot summaries, trivia, and reviews.',
        tags: ['Vue', 'Option API', 'Pinia', 'Netlify'],
      },
      {
        title: 'Etalon App',
        ariaLabel: 'Etalon App',
        href: 'https://etalon.netlify.app',
        description:
          'A shopping app that lets customers browse and buy products or services from a retailer or service provider.',
        tags: ['Vue', 'Pinia', 'Netlify'],
      },
      {
        title: 'Rock Paper Scissors',
        ariaLabel: 'Rock Paper Scissors Game',
        href: 'https://rock-paper-scissors-by-m.netlify.app',
        description: 'Play a classic game of Rock-Paper-Scissors.',
        tags: ['Vue', 'Netlify'],
      },
      {
        title: 'Todo List App',
        ariaLabel: 'Todo List App',
        href: 'https://todolist-by-m.netlify.app',
        description: 'A task management app to help you stay organized and manage your day-to-day.',
        tags: ['Vue', 'Netlify'],
      },
    ],
  },
  archive: {
    skip: 'Skip to Content',
    back: 'Melina Niavarani',
    title: 'All Projects',
    subtitle: 'A comprehensive archive of all my development work and creative projects',
    table: {
      year: 'Year',
      project: 'Project',
      madeAt: 'Made at',
      builtWith: 'Built with',
      link: 'Link',
      personal: 'Personal',
    },
  },
  demoPage: {
    back: 'Back to Portfolio',
  },
  footer: {
    builtBy: 'Built by',
    developedWith: 'Developed with',
    and: 'and',
    rights: 'All rights reserved.',
  },
}
