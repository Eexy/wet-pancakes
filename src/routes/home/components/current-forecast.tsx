import { useLoaderData } from "react-router-dom";
import { HomeData } from "../home.tsx";
import { CurrentForecastCard } from "./current-forecast/components/current-forecast-card.tsx";

export function CurrentForecast() {
  const data = useLoaderData() as HomeData;

  if (!data) return <></>;

  return (
    <div>
      <CurrentForecastCard location={data.location} forecast={data.forecast} />
    </div>
  );
}
