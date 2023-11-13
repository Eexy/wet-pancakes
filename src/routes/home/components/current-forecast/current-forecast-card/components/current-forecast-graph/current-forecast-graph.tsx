import { Forecast } from "../../../../../../../types/forecast.ts";
import { useState } from "react";
import { TempGraph } from "./components/temp-graph.tsx";
import { HumidityGraph } from "./components/humidity-graph.tsx";
import { ForecastGraphSwitch } from "./components/forecast-graph-switch.tsx";

export type ForecastGraphProps = {
  forecast: Forecast
}

export function CurrentForecastGraph({ forecast }: ForecastGraphProps) {
  const [graphType, setGraphType] = useState<"temp" | "humidity">("temp");

  if (graphType === "humidity") {
    return <div className={"h-80 bg-white/10 rounded-md flex flex-col gap-5 p-3"}>
      <ForecastGraphSwitch type={graphType} setType={setGraphType} />
      <div className={"flex-1"}>
        <HumidityGraph forecast={forecast} />
      </div>
    </div>;
  }

  return <div className={"h-80 bg-white/10 rounded-md flex flex-col gap-5 p-3"}>
    <ForecastGraphSwitch type={graphType} setType={setGraphType} />
    <div className={"flex-1"}>
      <TempGraph forecast={forecast} />
    </div>
  </div>;

}
