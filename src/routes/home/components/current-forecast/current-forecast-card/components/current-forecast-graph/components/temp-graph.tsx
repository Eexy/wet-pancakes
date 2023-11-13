import { Forecast } from "../../../../../../../../types/forecast.ts";
import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { graphOptions } from "./graph-options.ts";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

type CurrentTempGraphProps = {
  forecast: Forecast
}

export function TempGraph({ forecast }: CurrentTempGraphProps) {
  const currentDate = new Date();
  const labels = forecast.hourly.map((_, index) => `${new Date(currentDate.getTime() + (1000 * 60 * 60 * index)).getHours()}h`).slice(0, 6);
  const dataset = forecast.hourly.map(val => val.temp).slice(0, 6);

  const data = {
    labels,
    datasets: [{
      data: dataset,
      borderColor: "rgb(255, 255, 255, 0.5)",
      pointBackgroundColor: "white",
      label: "temp",
    }],
  };

  return <Line data={data} options={graphOptions} />;
}
