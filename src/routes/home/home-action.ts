import { LoaderFunctionArgs } from "react-router-dom";
import { getLocationWithCity, getLocationWithCoordinates } from "./services/location-service.ts";
import { Location } from "../../types/location.ts";
import { getForecast } from "./services/forecast-service.ts";

export async function homeAction({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const city = url.searchParams.get("city");
  const lon = Number(url.searchParams.get("lon"));
  const lat = Number(url.searchParams.get("lat"));

  let location: Location | null = null;
  if (city) {
    location = await getLocationWithCity(city);
  } else if (lon && lat) {
    location = await getLocationWithCoordinates(lon, lat);
  }

  if (!location) return null;

  const forecast = await getForecast(location.lon, location.lat);

  if (!forecast) return null;

  return { location, forecast };
}

