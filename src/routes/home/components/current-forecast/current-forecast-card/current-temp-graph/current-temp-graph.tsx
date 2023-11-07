import { Forecast } from "../../../../../../types/forecast.ts";
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

export function CurrentTempGraph({ forecast }: CurrentTempGraphProps) {
  const currentDate = new Date();
  const labels = forecast.hourly.map((_, index) => `${new Date(currentDate.getTime() + (1000 * 60 * 60 * index)).getHours()}h`).slice(0, 6);
  const dataset = forecast.hourly.map(val => val.temp).slice(0, 6);

  const options = {
    responsive: true,
    layout: {
      padding: {
        bottom: 30,
      },
    },
    scales: {
      y: {
        type: "linear" as const,
        grace: 0.5,
        grid: {
          display: false,
        },
        border: {
          color: "transparent",
        },
      },
      x: {
        border: {
          color: "transparent",
        },
        grid: {
          drawTicks: false,
          color: "rgb(255,255,255,0.1)",
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  const data = {
    labels,
    datasets: [{
      data: dataset,
      borderColor: "rgb(255, 255, 255, 0.5)",
      pointBackgroundColor: "white",
      label: "temp",
    }],
  };

  return <div className={"h-72 bg-white/10 rounded-md flex flex-col gap-5 p-3"}>
    <h2 className={"text-wl white font-semibold"}>
      Temperature
    </h2>
    <div>

      <Line data={data} options={options} />
    </div>
  </div>;
}
