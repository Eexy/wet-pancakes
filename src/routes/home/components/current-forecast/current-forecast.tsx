import { useLoaderData } from "react-router-dom";
import { HomeData } from "../../home.tsx";
import { CurrentForecastCard } from "./current-forecast-card.tsx";
import { CurrentForecastInfos } from "./current-forecast-infos.tsx";

export function CurrentForecast() {
  const data = useLoaderData() as HomeData;

  if (!data) return <></>;

  return (
    <div className={"flex flex-col gap-4"}>
      <CurrentForecastCard location={data.location} forecast={data.forecast} />
      <CurrentForecastInfos forecast={data.forecast} />
    </div>
  );
}
