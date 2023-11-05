import { LoaderFunctionArgs } from "react-router-dom";
import { getLocation } from "./services/location-service.ts";
import { getForecast } from "./services/forecast-service.ts";

export async function homeAction({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const city = url.searchParams.get("city");
  if (city) {
    const location = await getLocation(city);
    if (!location) return null;

    const forecast = await getForecast(location.lon, location.lat);
    if (!forecast) return null;

    return { location, forecast };
  }

  return null;
}
