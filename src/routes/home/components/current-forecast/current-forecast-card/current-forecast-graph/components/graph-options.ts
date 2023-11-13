export const graphOptions = {
  responsive: true,
  maintainAspectRatio: false,
  layout: {
    padding: {},
  },
  scales: {
    y: {
      type: "linear" as const,
      ticks: {
        color: "rgb(255, 255, 255, 0.7)",
      },
      grace: 1,
      grid: {
        display: false,
      },
      border: {
        color: "transparent",
      },
    },
    x: {
      ticks: {
        color: "rgb(255,255,255,0.7)",
      },
      border: {
        color: "transparent",
      },
      grid: {
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
