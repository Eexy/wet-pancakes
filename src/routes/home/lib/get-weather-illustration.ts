/**
 * Return illustration base on weather code : https://openweathermap.org/weather-conditions#Weather-Condition-Codes-2
 */
export function getWeatherIllustration(code: number) {
  // thunder
  if (code >= 200 && code <= 232) {
    if (code === 200 || code === 230 || code === 231) return "light-thunder.svg";

    if (code === 202 || code === 232) return "heavy-thunder.svg";

    return "thunder.svg";
  }

  // drizzle
  if (code >= 300 && code <= 321) return "drizzle.svg";

  // rain
  if (code >= 500 && code <= 531) {
    if (code === 500) return "light-rain.svg";

    if (code === 502 || code === 503 || code === 504) return "heavy-rain.svg";

    return "rain.svg";
  }

  // snow
  if (code >= 600 && code <= 622) {
    if (code === 600 || code === 620 || code === 612) return "light-snow.svg";

    if (code === 602 || code === 622) return "heavy-snow.svg";

    if (code === 615 || code === 616) return "rain-snow.svg";

    return "snow.svg";
  }

  // atmosphere
  if (code >= 701 && code <= 781) {
    if (code === 781) return "tornado.svg";

    return "smog.svg";
  }

  if (code >= 801 && code <= 804) {
    if (code === 801) return "scattered-cloud.svg";

    return "cloud.svg";
  }

  return "clear.svg";
}
