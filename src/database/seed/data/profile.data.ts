import type { ProfileSeedInput } from '../profile-seed.schema.js';

export const profileData = {
  name: 'Your Name',
  headline: 'Backend Developer',
  description: 'A short summary of who you are, what you build and what you care about.',
  location: 'City, Country',
  links: [
    { label: 'GitHub', url: 'https://github.com/username' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/username' },
    { label: 'Telegram', url: 'https://t.me/username' },
  ],
  skills: [
    { name: 'TypeScript', category: 'Languages' },
    { name: 'Node.js', category: 'Runtime' },
    { name: 'NestJS', category: 'Frameworks' },
    { name: 'GraphQL', category: 'API' },
    { name: 'PostgreSQL', category: 'Databases' },
    { name: 'Prisma', category: 'Databases' },
    { name: 'Docker', category: 'Infrastructure' },
    { name: 'Git', category: 'Tools' },
  ],
  experience: [
    {
      company: 'Company Name',
      position: 'Backend Developer',
      startDate: '2023-01-01',
      achievements: ['Describe a measurable result', 'Describe another impact you made'],
    },
    {
      company: 'Previous Company',
      position: 'Junior Developer',
      startDate: '2021-06-01',
      endDate: '2022-12-31',
      achievements: ['Describe what you delivered'],
    },
  ],
  projects: [
    {
      name: 'Digital Card API',
      description: 'GraphQL API that presents this profile.',
      repositoryUrl: 'https://github.com/username/digital-card-api',
      technologies: ['TypeScript', 'NestJS', 'GraphQL', 'Prisma', 'PostgreSQL', 'Docker'],
    },
    {
      name: 'Another Project',
      description: 'What the project does and what your role was.',
      url: 'https://example.com',
      repositoryUrl: 'https://github.com/username/another-project',
      technologies: ['TypeScript', 'Node.js', 'PostgreSQL'],
    },
  ],
} satisfies ProfileSeedInput;
