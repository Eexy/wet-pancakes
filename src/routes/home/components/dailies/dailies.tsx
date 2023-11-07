import { useLoaderData } from "react-router-dom";
import { HomeData } from "../../home.tsx";
import { Daily } from "./components/daily.tsx";


export function Dailies() {
  const data = useLoaderData() as HomeData;

  if (!data) return <></>;

  return (
    <div className={"text-slate-950"}>
      <h2 className={"text-xl font-semibold"}>Dailies</h2>
      <ul className={"py-3 flex flex-col gap-3"}>
        {data.forecast.daily.map(el => <Daily forecast={el} />)}
      </ul>
    </div>
  );
}

