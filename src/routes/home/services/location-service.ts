import { locationServiceResponseSchema } from "../schemas/location-schema.ts";
import { Location } from "../../../types/location.ts";
import { getApiUrl } from "../../../shared/lib/get-api-url.ts";

export async function getLocationWithCity(city: string): Promise<Location | null> {
  const res = await fetch(`${getApiUrl()}/geo/1.0/direct?q=${city}&limit=1&appid=${import.meta.env.VITE_API_KEY}`);
  if (res.status >= 300) {
    return null;
  }

  const json = await res.json();
  const parsed = locationServiceResponseSchema.safeParse(json);
  if (!parsed.success) return null;

  return parsed.data[0];
}

export async function getLocationWithCoordinates(lon: number, lat: number): Promise<Location | null> {
  const res = await fetch(`${getApiUrl()}/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=1&appid=${import.meta.env.VITE_API_KEY}`);
  if (res.status >= 300) {
    return null;
  }

  const json = await res.json();
  const parsed = locationServiceResponseSchema.safeParse(json);
  if (!parsed.success) return null;

  return parsed.data[0];
}
