import { z } from "zod";

export const formSchema = z.object({
    title: z.string().min(1, "Title is required"),
    content: z.string().min(1, "Content is required"), // Corrected error message
    createdAt: z.date(),
    author: z.string().min(1, "Author is required").optional(),
    imageUrl: z.string().min(1, "Image URL is required").optional(),
});


