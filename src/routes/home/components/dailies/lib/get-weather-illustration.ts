export function getWeatherIllustration(code: number) {
  if (code >= 200 && code <= 232) return "thunder.svg";

  if (code >= 300 && code <= 321) return "rain.svg";

  if (code >= 500 && code <= 531) return "rain.svg";

  if (code >= 801 && code <= 804) return "cloud.svg";

  return "clear.svg";
}
