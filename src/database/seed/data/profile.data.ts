import type { ProfileSeedInput } from '../profile-seed.schema.js';

export const profileData = {
  name: 'Максим Федоров',
  headline: 'Fullstack-разработчик',
  description:
    'Fullstack-разработчик на TypeScript с коммерческим опытом с 2024 года. ' +
    'Во frontend работаю с React и Next.js, в backend — с Node.js, NestJS, PostgreSQL и Prisma. ' +
    'Помимо основной работы создал и запустил SaaS-сервис QR-меню tap-menu.ru. ' +
    'Образование — Пермский государственный технический колледж, «Информационные системы» (2026). ' +
    'Быстро осваиваю новое и постоянно развиваю навыки.',
  location: 'Пермь, готов к удалённой работе',
  links: [
    { label: 'GitHub', url: 'https://github.com/FedorovMaks' },
    { label: 'HeadHunter', url: 'https://hh.ru/resume/6ed0c7ceff0d87d5950039ed1f366849453134' },
  ],
  skills: [
    { name: 'TypeScript', category: 'Языки' },
    { name: 'JavaScript', category: 'Языки' },
    { name: 'HTML5', category: 'Языки' },
    { name: 'CSS3', category: 'Языки' },
    { name: 'React', category: 'Frontend' },
    { name: 'Next.js', category: 'Frontend' },
    { name: 'Tailwind CSS', category: 'Frontend' },
    { name: 'Zustand', category: 'Frontend' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'NestJS', category: 'Backend' },
    { name: 'Express', category: 'Backend' },
    { name: 'GraphQL', category: 'Backend' },
    { name: 'REST API', category: 'Backend' },
    { name: 'PostgreSQL', category: 'Базы данных' },
    { name: 'MySQL', category: 'Базы данных' },
    { name: 'MS SQL', category: 'Базы данных' },
    { name: 'Prisma', category: 'Базы данных' },
    { name: 'Git', category: 'Инструменты' },
    { name: 'Docker', category: 'Инструменты' },
  ],
  experience: [
    {
      company: 'ООО «КБ «Молотов»',
      position: 'Fullstack-разработчик',
      startDate: '2024-09-01',
      achievements: [
        'Разрабатываю frontend-часть веб-приложений компании',
        'Разрабатываю и переделываю сайты для заказчиков',
        'Проектирую и внедряю новые модули приложения',
        'Интегрирую интерфейсы с RESTful API: получение и обработка данных',
      ],
    },
  ],
  projects: [
    {
      name: 'Digital Card API',
      description:
        'GraphQL API цифровой визитки: модульная архитектура NestJS, батчинг вложенных данных через DataLoader, автоматические миграции и заполнение базы при старте.',
      url: 'https://digital-card-api-92x1.onrender.com/graphql',
      repositoryUrl: 'https://github.com/FedorovMaks/buisnessCard',
      technologies: ['TypeScript', 'NestJS', 'GraphQL', 'Prisma', 'PostgreSQL', 'Docker'],
    },
    {
      name: 'tap-menu.ru',
      description:
        'SaaS-сервис электронного меню по QR-коду для заведений: конструктор меню с drag-and-drop, генерация QR-кодов, авторизация и push-уведомления.',
      url: 'https://tap-menu.ru',
      repositoryUrl: 'https://github.com/FedorovMaks/saasQR',
      technologies: [
        'TypeScript',
        'Next.js',
        'React',
        'Tailwind CSS',
        'Zustand',
        'Prisma',
        'PostgreSQL',
        'Docker',
      ],
    },
    {
      name: 'Система опросов ПГТК',
      description:
        'Веб-приложение для анкетирования студентов и преподавателей колледжа с админ-панелью и экспортом результатов в Excel. Дипломный проект.',
      url: 'https://survey-app-five-ivory.vercel.app',
      repositoryUrl: 'https://github.com/FedorovMaks/diplom',
      technologies: ['JavaScript', 'Node.js', 'Express', 'PostgreSQL'],
    },
  ],
} satisfies ProfileSeedInput;
