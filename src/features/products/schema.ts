import { z } from "zod";

const slugRegex = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

export const ProductCreate = z.object({
  title: z.string().min(1, "title required"),
  slug: z.string().regex(slugRegex, "slug must be kebab-case"),
  priceInCents: z.number().int().positive("price must be >0"),
  isActive: z.boolean().optional().default(true),
});

export type ProductCreateInput = z.infer<typeof ProductCreate>;
