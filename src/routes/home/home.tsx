import { SearchForm } from "./components/search-form.tsx";
import { useLoaderData } from "react-router-dom";
import { Location } from "../../types/location.ts";
import { Forecast } from "../../types/forecast.ts";
import { CurrentForecast } from "./components/current-forecast.tsx";

export type HomeData = { location: Location, forecast: Forecast } | null

export function Home() {
  const res = useLoaderData() as HomeData;
  console.info(res);


  return <div className={"p-3"}>
    <SearchForm />
    <CurrentForecast />
  </div>;
}
