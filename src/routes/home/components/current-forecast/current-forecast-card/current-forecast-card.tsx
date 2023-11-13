import { Location } from "../../../../../types/location.ts";
import { Forecast } from "../../../../../types/forecast.ts";
import { CurrentForecastGraph } from "./components/current-forecast-graph/current-forecast-graph.tsx";
import { CurrentForecastTemp } from "./components/current-forecast-temp/current-forecast-temp.tsx";

export type CurrentForecastCardProps = {
  location: Location;
  forecast: Forecast
}

export function CurrentForecastCard({ location, forecast }: CurrentForecastCardProps) {
  return (
    <div className={"bg-sky-950 p-3 rounded-md flex flex-col text-white"}>
      <CurrentForecastTemp location={location} forecast={forecast} />
      <CurrentForecastGraph forecast={forecast} />
    </div>
  );
}



