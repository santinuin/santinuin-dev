import { defineCollection, z } from "astro:content";

const sections = defineCollection({
    schema: z.object({
        language: z.string(),
        order: z.number().optional(),
        title: z.string(),
        description: z.string(),
    }),
});

export const collections = { sections };