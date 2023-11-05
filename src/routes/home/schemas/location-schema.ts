import { z } from "zod";

export const locationSchema = z.object({
  name: z.string().trim(),
  lat: z.number(),
  lon: z.number(),
});

export const locationServiceResponseSchema = locationSchema.array().min(1);
