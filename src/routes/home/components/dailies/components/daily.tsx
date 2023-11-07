import { z } from "zod";
import { dailyForecastSchema } from "../../../schemas/forecast-schema.ts";
import { Card } from "../../../../../shared/components/card.tsx";
import { getWeatherIllustration } from "../../../lib/get-weather-illustration.ts";

type DailyProps = {
  forecast: z.infer<typeof dailyForecastSchema>
}

export function Daily({ forecast }: DailyProps) {
  function getDayString(code: number) {
    if (code === 0) return "sunday";
    if (code === 1) return "monday";
    if (code === 2) return "tuesday";
    if (code === 3) return "wednesday";
    if (code === 4) return "thursday";
    if (code === 5) return "friday";

    return "saturday";
  }

  return <li>
    <Card>
      <div className={"flex justify-between items-center text-slate-950"}>
        <div>
          <div className={"capitalize font-semibold pb-4"}>
            {getDayString(forecast.sunrise.getDay())}
          </div>
          <div>{forecast.sunrise.toLocaleDateString()}</div>
        </div>
        <div>
          <img src={`./${getWeatherIllustration(forecast.weather[0].id)}`} className={"h-12 w-12"}
               alt={"weather illustration"} />
        </div>
        <div className={"text-lg font-semibold"}>
          {forecast.temp.day}°
        </div>
      </div>
    </Card>
  </li>;
}
