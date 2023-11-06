import { SearchForm } from "./components/search-form.tsx";
import { Location } from "../../types/location.ts";
import { Forecast } from "../../types/forecast.ts";
import { CurrentForecast } from "./components/current-forecast.tsx";

export type HomeData = { location: Location, forecast: Forecast } | null

export function Home() {
  return <div className={"p-3 flex flex-col gap-4"}>
    <SearchForm />
    <CurrentForecast />
  </div>;
}
