import { Location } from "../../../../../types/location.ts";
import { Forecast } from "../../../../../types/forecast.ts";
import { MapPinIcon } from "@heroicons/react/24/outline";

export type CurrentForecastCardProps = {
  location: Location;
  forecast: Forecast
}

export function CurrentForecastCard({ location, forecast }: CurrentForecastCardProps) {
  return (
    <div className={"bg-sky-950 p-3 rounded-md flex flex-col text-white"}>
      <CurrentForecastTemp location={location} forecast={forecast} />
    </div>
  );
}

function CurrentForecastTemp({ location, forecast }: CurrentForecastCardProps) {
  const date = new Date();

  return (
    <div className={"h-64 flex flex-col"}>
      <div className={"flex items-center justify-between"}>
        <div className={"flex gap-2 items-center"}>
          <span><MapPinIcon className={"text-white h-4 w-4"} /></span>
          <span className={"capitalize text-lg"}>{location.name}</span>
        </div>
        <div className={"font-light"}>
          <span>Today</span>
          {" - "}
          <span>{date.getHours()}:{date.getMinutes()}</span>
        </div>
      </div>
      <div className={"flex-1 flex items-center justify-center text-8xl"}>
        {forecast.current.temp}
        <span className={"font-light"}>°</span>
      </div>
    </div>
  );
}
