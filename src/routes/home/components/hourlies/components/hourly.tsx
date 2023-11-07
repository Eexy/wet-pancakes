import { Card } from "../../../../../shared/components/card.tsx";
import { z } from "zod";
import { hourlyForecastSchema } from "../../../schemas/forecast-schema.ts";
import { getWeatherIllustration } from "../../../lib/get-weather-illustration.ts";

export type HourlyProps = {
  hour: number;
  forecast: z.infer<typeof hourlyForecastSchema>
}

export function Hourly({ hour, forecast }: HourlyProps) {
  return (<li>
    <Card>
      <div className={"flex gap-3 flex-col items-center"}>
        <div className={" text-lg "}>{hour}h</div>
        <div>
          <img src={`./${getWeatherIllustration(forecast.weather[0].id)}`} className={"w-12 h-12"}
               alt={"weather illustration"} />
        </div>
        <div className={"font-semibold"}>
          {forecast.temp}°
        </div>
      </div>
    </Card>
  </li>);
}
