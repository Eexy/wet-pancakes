import { Forecast } from "../../../../types/forecast.ts";
import { Card } from "../../../../shared/components/card.tsx";
import { ReactNode } from "react";
import { BoltIcon, MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { WindIcon } from "./icons/wind-icon.tsx";
import { DropletIcon } from "./icons/droplet-icon.tsx";

export type CurrentForecastInfosProps = {
  forecast: Forecast
}

export function CurrentForecastInfos({ forecast }: CurrentForecastInfosProps) {
  return (<div>
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

type ForecasCardInfoProps = {
  title: string;
  icon?: ReactNode;
  val?: string
}

export function ForecastCardInfo({ title, icon, val }: ForecasCardInfoProps) {
  return (
    <Card>
      <div className={"flex flex-col gap-4"}>
        <div className={"flex item-center gap-2"}>
          <span>{icon}</span>
          <span className={"capitalize text-sm font-semibold"}>{title}</span>
        </div>
        <div className={"text-2xl"}>{val}</div>
      </div>

    </Card>
  );
}
