import { CityForm } from "./components/city-form.tsx";
import { useLoaderData } from "react-router-dom";
import { Location } from "../../types/location.ts";
import { Forecast } from "../../types/forecast.ts";

type HomeData = { location: Location, forecast: Forecast } | null

export function Home() {
  const res = useLoaderData() as HomeData;
  console.info(res);


  return <div className={"p-3"}>
    <CityForm />
  </div>;
}
