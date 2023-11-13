export type GraphSwitchProps = {
  type: "humidity" | "temp",
  setType: (val: "humidity" | "temp") => void
}

export function ForecastGraphSwitch({ type, setType }: GraphSwitchProps) {
  return <div className={"overflow-hidden flex rounded-md bg-sky-950 w-fit"}>
    <button
      className={`${type === "temp" ? "bg-white text-sky-950" : "bg-transparent"} text-white font-semibold py-1 px-3`}
      onClick={() => setType("temp")}>
      Temperature
    </button>
    <button onClick={() => setType("humidity")}
            className={`${type === "humidity" ? "bg-white text-sky-950" : "bg-transparent"} text-white font-semibold py-1 px-3`}>
      Humidity
    </button>
  </div>;
}
