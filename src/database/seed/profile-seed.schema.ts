import { z } from 'zod';

const text = z.string().trim().min(1);
const isoDate = z.iso.date().transform((value) => new Date(value));

const linkSchema = z.object({
  label: text,
  url: z.url(),
});

const skillSchema = z.object({
  name: text,
  category: text.optional(),
});

const experienceSchema = z
  .object({
    company: text,
    position: text,
    startDate: isoDate,
    endDate: isoDate.optional(),
    achievements: z.array(text).default([]),
  })
  .refine(({ startDate, endDate }) => !endDate || endDate >= startDate, {
    message: 'endDate must not precede startDate',
    path: ['endDate'],
  });

const projectSchema = z.object({
  name: text,
  description: text.optional(),
  url: z.url().optional(),
  repositoryUrl: z.url().optional(),
  technologies: z.array(text).default([]),
});

export const profileSeedSchema = z
  .object({
    name: text,
    headline: text,
    description: text,
    location: text.optional(),
    links: z.array(linkSchema).default([]),
    skills: z.array(skillSchema).default([]),
    experience: z.array(experienceSchema).default([]),
    projects: z.array(projectSchema).default([]),
  })
  .superRefine(({ skills, projects }, ctx) => {
    const knownSkills = new Set<string>();

    skills.forEach(({ name }, index) => {
      if (knownSkills.has(name)) {
        ctx.addIssue({
          code: 'custom',
          message: `Duplicate skill "${name}"`,
          path: ['skills', index],
        });
      }
      knownSkills.add(name);
    });

    projects.forEach(({ technologies }, projectIndex) => {
      technologies.forEach((technology, index) => {
        if (!knownSkills.has(technology)) {
          ctx.addIssue({
            code: 'custom',
            message: `Technology "${technology}" is not listed in skills`,
            path: ['projects', projectIndex, 'technologies', index],
          });
        }
      });
    });
  });

export type ProfileSeedInput = z.input<typeof profileSeedSchema>;
