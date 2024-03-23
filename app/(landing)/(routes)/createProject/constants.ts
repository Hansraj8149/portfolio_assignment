import { La_Belle_Aurore } from 'next/font/google';
import * as z from 'zod';


export const formSchema = z.object({
    title:z.string().min(1,"Title is required"),
    description:z.string().min(1,"Title is required"),
    technologies: z.array(z.string()),
    liveLink:z.string().min(1,"Title is required").optional(),
    repoLink:z.string().min(1,"Title is required").optional(),
    imageUrl:z.string().min(1,"Title is required").optional(),
})

export const technologyOptions =[
    {
        value: "next.js",
        label: "Next.js",
      },
      {
        value: "sveltekit",
        label: "SvelteKit",
      },
      {
        value: "nuxt.js",
        label: "Nuxt.js",
      },
      {
        value: "remix",
        label: "Remix",
      },
      {
        value: "astro",
        label: "Astro",
      },
      {
        value: "wordpress",
        label: "WordPress",
      },
      {
        value: "express.js",
        label: "Express.js",
      },
      {
        value: "nest.js",
        label: "Nest.js",
      }
]