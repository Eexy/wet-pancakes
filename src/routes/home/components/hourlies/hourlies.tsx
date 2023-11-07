import { useLoaderData } from "react-router-dom";
import { HomeData } from "../../home.tsx";
import { Hourly } from "./components/hourly.tsx";


export function Hourlies() {
  const data = useLoaderData() as HomeData;

  if (!data) return <></>;

  return (
    <div className={"flex flex-col gap-4"}>
      <h2 className={"font-semibold text-xl text-slate-950"}>Hourlies</h2>
      <ul className={"grid grid-cols-5 gap-3"}>
        {data.forecast.hourly.slice(0, 4).map((el, i) => <Hourly forecast={el}
                                                                 hour={new Date(el.dt.getTime() + (1000 * 60 * 60 * i)).getHours()} />)}
      </ul>
    </div>
  );
}
