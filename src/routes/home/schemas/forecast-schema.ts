import { z } from "zod";

export const forecastSchema = z.object({
  current: z.object({
    temp: z.number().transform(val => Math.floor(val)),
    weather: z.object({
      description: z.string().transform(val => {
        const temp = val.split("");
        temp[0] = temp[0].toUpperCase();
        return temp.join("");
      }),
    }).array(),
  }),
});
