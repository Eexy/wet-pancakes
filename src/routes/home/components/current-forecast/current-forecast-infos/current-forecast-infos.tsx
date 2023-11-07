import { Forecast } from "../../../../../types/forecast.ts";
import { BoltIcon, MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { WindIcon } from "./components/current-forecast-info/components/wind-icon.tsx";
import { DropletIcon } from "./components/current-forecast-info/components/droplet-icon.tsx";
import { ForecastCardInfo } from "./components/current-forecast-info/current-forecast-info.tsx";

export type CurrentForecastInfosProps = {
  forecast: Forecast
}

export function CurrentForecastInfos({ forecast }: CurrentForecastInfosProps) {
  return (<div className={"text-slate-950"}>
    <h2 className={"text-xl font-semibold"}>More Infos</h2>
    <div className={"grid grid-cols-2 gap-3 py-3"}>
      <ForecastCardInfo title={"sunrise"}
                        val={`${forecast.current.sunrise.getHours()}:${forecast.current.sunrise.getMinutes()}`}
                        icon={<SunIcon className={"h-5 w-5"} />} />
      <ForecastCardInfo title={"sunset"}
                        val={`${forecast.current.sunset.getHours()}:${forecast.current.sunset.getMinutes()}`}
                        icon={<MoonIcon className={"h-5 w-5"} />} />
      <ForecastCardInfo title={"wind"} icon={<WindIcon />} val={`${forecast.current.wind_speed} Km/h`} />
      <ForecastCardInfo title={"humidity"} icon={<DropletIcon />} val={`${forecast.current.humidity}`} />
      <ForecastCardInfo title={"pressure"} icon={<BoltIcon className={"h-5 w-5"} />}
                        val={`${forecast.current.pressure} Pa`} />
    </div>
  </div>);
}

