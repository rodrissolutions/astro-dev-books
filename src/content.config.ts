import { defineCollection } from 'astro:content'
import { glob } from 'astro/loaders'
import { z } from 'astro/zod'
// z -> zod

const booksCollection = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './src/content/books',
  }),
  schema: z.object({
    title: z.string(),
    author: z.string(),
    img: z.string(),
    readtime: z.int(),
    description: z.string(),
    buy: z.object({
      ecuador: z.url(),
      usa: z.url(),
    }),
  }),
})

export const collections = {
  books: booksCollection,
}
