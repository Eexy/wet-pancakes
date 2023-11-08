import { SearchForm } from "./components/search-form/search-form.tsx";
import { Location } from "../../types/location.ts";
import { Forecast } from "../../types/forecast.ts";
import { CurrentForecast } from "./components/current-forecast/current-forecast.tsx";
import { Dailies } from "./components/dailies/dailies.tsx";
import { Hourlies } from "./components/hourlies/hourlies.tsx";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export type HomeData = { location: Location, forecast: Forecast } | null

export function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    if (navigator.geolocation) {
      const success = (pos: GeolocationPosition) => {
        navigate(`/?lon=${pos.coords.longitude}&lat=${pos.coords.latitude}`);
      };

      const error = (err: GeolocationPositionError) => {
        console.log(err);
      };

      const options = {
        enableHighAccuracy: true,
        timeout: 1000,
      };

      navigator.geolocation.getCurrentPosition(success, error, options);
    }
  }, []);

  return <div className={"flex-1 p-3 flex flex-col gap-4"}>
    <SearchForm />
    <CurrentForecast />
    <Hourlies />
    <Dailies />
    <p className={"text-gray-500 capitalize"}>provider : OpenWeather</p>
  </div>;
}
