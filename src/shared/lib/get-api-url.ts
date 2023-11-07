export function getApiUrl() {
  if (import.meta.env.DEV) return `https://api.openweathermap.org/`;

  return "/api";
}
