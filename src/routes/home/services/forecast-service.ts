import { forecastSchema } from "../schemas/forecast-schema.ts";
import { Forecast } from "../../../types/forecast.ts";

export async function getForecast(lon: number, lat: number): Promise<Forecast | null> {
  const res = await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${import.meta.env.VITE_API_KEY}`);
  if (res.status >= 300) {
    return null;
  }

  const json = await res.json();
  const parsed = forecastSchema.safeParse(json);
  if (!parsed.success) return null;

  return parsed.data;
}
