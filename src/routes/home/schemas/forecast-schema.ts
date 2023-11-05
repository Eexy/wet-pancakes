import { z } from "zod";

export const forecastSchema = z.object({
  current: z.object({
    temp: z.number(),
  }),
});
