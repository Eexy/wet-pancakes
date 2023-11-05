import { locationServiceResponseSchema } from "../schemas/location-schema.ts";
import { Location } from "../../../types/location.ts";

export async function getLocation(city: string): Promise<Location | null> {
  const res = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${import.meta.env.VITE_API_KEY}`);
  if (res.status >= 300) {
    return null;
  }

  const json = await res.json();
  const parsed = locationServiceResponseSchema.safeParse(json);
  if (!parsed.success) return null;

  return parsed.data[0];
}
