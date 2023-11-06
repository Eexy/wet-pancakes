import { z } from "zod";

const forecastBasis = z.object({
  humidity: z.number(),
  uvi: z.number(),
  wind_speed: z.number(),
  pressure: z.number(),
  clouds: z.number(),
});

export const weatherSchema = z.object({
  id: z.number(),
  main: z.string(),
  description: z.string().transform(val => {
    const temp = val.split("");
    temp[0] = temp[0].toUpperCase();
    return temp.join("");
  }),
});

export const basisDailyForecast = forecastBasis.extend({
  sunrise: z.number().transform((val) => new Date(val * 1000)),
  sunset: z.number().transform((val) => new Date(val * 1000)),
  weather: weatherSchema.array(),
});

export const currentForecastSchema = basisDailyForecast.extend({
  temp: z.number().transform(val => Math.floor(val)),
});

export const hourlyForecastSchema = forecastBasis.extend({
  temp: z.number().transform(val => Math.floor(val)),
  weather: weatherSchema.array(),
});

export const dailyForecastSchema = basisDailyForecast.extend({
  temp: z.object({
    day: z.number().transform(val => Math.floor(val)),
  }),
});

export const forecastSchema = z.object({
  current: currentForecastSchema,
  hourly: hourlyForecastSchema.array(),
  daily: dailyForecastSchema.array(),
});
