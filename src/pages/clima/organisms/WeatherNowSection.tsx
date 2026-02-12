import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "@/store/store";

const LOCATIONS = [
  {
    id: "dublin",
    name: { es: "Dublin, Irlanda", en: "Dublin, Ireland" },
    latitude: 53.3498,
    longitude: -6.2603,
  },
  {
    id: "newry",
    name: { es: "Newry, Irlanda del Norte", en: "Newry, Northern Ireland" },
    latitude: 54.1784,
    longitude: -6.337,
  },
];

type WeatherResult = {
  id: string;
  name: string;
  temperature: number;
  apparent: number;
  precipitation: number;
  wind: number;
  code: number;
  time: string;
  units: {
    temperature: string;
    apparent: string;
    precipitation: string;
    wind: string;
  };
};

type WeatherState =
  | { status: "idle" | "loading"; items: WeatherResult[]; error?: string }
  | { status: "success"; items: WeatherResult[]; error?: string }
  | { status: "error"; items: WeatherResult[]; error: string };

const LABELS = {
  es: {
    title: "Clima en vivo",
    subtitle: "Datos en tiempo real para Irlanda.",
    temp: "Temperatura",
    feels: "Sensacion",
    wind: "Viento",
    precipitation: "Precipitacion",
    updated: "Actualizado",
    source: "Fuente",
    retry: "Reintentar",
    error: "No pudimos obtener el clima en este momento.",
  },
  en: {
    title: "Live weather",
    subtitle: "Real-time data for Ireland.",
    temp: "Temperature",
    feels: "Feels like",
    wind: "Wind",
    precipitation: "Precipitation",
    updated: "Updated",
    source: "Source",
    retry: "Try again",
    error: "We could not load the weather right now.",
  },
};

function getConditionLabel(code: number, language: "es" | "en") {
  const conditions: Record<number, { es: string; en: string }> = {
    0: { es: "Despejado", en: "Clear" },
    1: { es: "Mayormente despejado", en: "Mostly clear" },
    2: { es: "Parcialmente nublado", en: "Partly cloudy" },
    3: { es: "Nublado", en: "Overcast" },
    45: { es: "Niebla", en: "Fog" },
    48: { es: "Niebla helada", en: "Rime fog" },
    51: { es: "Llovizna ligera", en: "Light drizzle" },
    53: { es: "Llovizna", en: "Drizzle" },
    55: { es: "Llovizna intensa", en: "Heavy drizzle" },
    56: { es: "Llovizna helada", en: "Freezing drizzle" },
    57: { es: "Llovizna helada intensa", en: "Heavy freezing drizzle" },
    61: { es: "Lluvia ligera", en: "Light rain" },
    63: { es: "Lluvia", en: "Rain" },
    65: { es: "Lluvia intensa", en: "Heavy rain" },
    66: { es: "Lluvia helada", en: "Freezing rain" },
    67: { es: "Lluvia helada intensa", en: "Heavy freezing rain" },
    71: { es: "Nieve ligera", en: "Light snow" },
    73: { es: "Nieve", en: "Snow" },
    75: { es: "Nieve intensa", en: "Heavy snow" },
    77: { es: "Granulos de nieve", en: "Snow grains" },
    80: { es: "Chubascos ligeros", en: "Light showers" },
    81: { es: "Chubascos", en: "Showers" },
    82: { es: "Chubascos intensos", en: "Heavy showers" },
    85: { es: "Chubascos de nieve", en: "Snow showers" },
    86: { es: "Chubascos de nieve intensos", en: "Heavy snow showers" },
    95: { es: "Tormenta electrica", en: "Thunderstorm" },
    96: { es: "Tormenta con granizo", en: "Thunderstorm with hail" },
    99: {
      es: "Tormenta fuerte con granizo",
      en: "Severe thunderstorm with hail",
    },
  };

  return conditions[code]?.[language] ?? `${code}`;
}

async function fetchWeather(
  location: (typeof LOCATIONS)[number],
): Promise<WeatherResult> {
  const url = new URL("https://api.open-meteo.com/v1/forecast");
  url.searchParams.set("latitude", location.latitude.toString());
  url.searchParams.set("longitude", location.longitude.toString());
  url.searchParams.set(
    "current",
    "temperature_2m,apparent_temperature,precipitation,wind_speed_10m,weather_code",
  );
  url.searchParams.set("timezone", "Europe/Dublin");

  const res = await fetch(url.toString());
  if (!res.ok) {
    throw new Error("weather-request-failed");
  }
  const data = await res.json();

  return {
    id: location.id,
    name: location.name.en,
    temperature: data.current.temperature_2m,
    apparent: data.current.apparent_temperature,
    precipitation: data.current.precipitation,
    wind: data.current.wind_speed_10m,
    code: data.current.weather_code,
    time: data.current.time,
    units: {
      temperature: data.current_units.temperature_2m,
      apparent: data.current_units.apparent_temperature,
      precipitation: data.current_units.precipitation,
      wind: data.current_units.wind_speed_10m,
    },
  };
}

export default function WeatherNowSection() {
  const language = useSelector((state: RootState) => state.language.value);
  const labels = LABELS[language];
  const [state, setState] = useState<WeatherState>({
    status: "idle",
    items: [],
  });
  const [refreshKey, setRefreshKey] = useState(0);

  useEffect(() => {
    let isActive = true;
    setState((prev) => ({ ...prev, status: "loading", error: undefined }));

    Promise.all(LOCATIONS.map((location) => fetchWeather(location)))
      .then((items) => {
        if (!isActive) return;
        const localizedItems = items.map((item) => {
          const location = LOCATIONS.find((entry) => entry.id === item.id);
          return {
            ...item,
            name: location?.name[language] ?? item.name,
          };
        });
        setState({ status: "success", items: localizedItems });
      })
      .catch(() => {
        if (!isActive) return;
        setState({ status: "error", items: [], error: labels.error });
      });

    return () => {
      isActive = false;
    };
  }, [labels.error, language, refreshKey]);

  return (
    <section className="mx-auto w-full max-w-6xl px-4 pb-16 pt-10 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-3">
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-brand-500">
          {labels.title}
        </p>
        <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <h2 className="text-3xl font-semibold text-brand-900 sm:text-4xl">
            {labels.subtitle}
          </h2>
          <p className="text-sm text-brand-600">
            {labels.source}:{" "}
            <a
              className="font-semibold text-brand-700 underline decoration-brand-300 underline-offset-4"
              href="https://open-meteo.com"
              target="_blank"
              rel="noreferrer"
            >
              Open-Meteo
            </a>
          </p>
        </div>
      </div>

      {state.status === "error" ? (
        <div className="mt-8 rounded-3xl border border-brand-100 bg-white p-6 text-center shadow-soft">
          <p className="text-sm text-brand-600">{state.error}</p>
          <button
            type="button"
            onClick={() => setRefreshKey((prev) => prev + 1)}
            className="mt-4 inline-flex items-center justify-center rounded-full border border-brand-200 bg-brand-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-700 transition hover:border-brand-300 hover:bg-brand-100"
          >
            {labels.retry}
          </button>
        </div>
      ) : (
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {(state.status === "loading"
            ? LOCATIONS.map((location) => ({
                id: location.id,
                name: location.name[language],
              }))
            : state.items
          ).map((item) => (
            <div
              key={item.id}
              className="rounded-3xl border border-brand-100 bg-white p-6 shadow-soft"
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-brand-900">
                  {item.name}
                </h3>
                {state.status === "loading" ? (
                  <span className="h-5 w-24 animate-pulse rounded-full bg-brand-100" />
                ) : (
                  <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-brand-600">
                    {getConditionLabel(item.code, language)}
                  </span>
                )}
              </div>
              <div className="mt-6 grid gap-4 text-sm text-brand-700 sm:grid-cols-2">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-brand-500">
                    {labels.temp}
                  </p>
                  <p className="mt-2 text-lg font-semibold text-brand-900">
                    {state.status === "loading"
                      ? "--"
                      : `${item.temperature} ${item.units.temperature}`}
                  </p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-brand-500">
                    {labels.feels}
                  </p>
                  <p className="mt-2 text-lg font-semibold text-brand-900">
                    {state.status === "loading"
                      ? "--"
                      : `${item.apparent} ${item.units.apparent}`}
                  </p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-brand-500">
                    {labels.wind}
                  </p>
                  <p className="mt-2 text-lg font-semibold text-brand-900">
                    {state.status === "loading"
                      ? "--"
                      : `${item.wind} ${item.units.wind}`}
                  </p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-brand-500">
                    {labels.precipitation}
                  </p>
                  <p className="mt-2 text-lg font-semibold text-brand-900">
                    {state.status === "loading"
                      ? "--"
                      : `${item.precipitation} ${item.units.precipitation}`}
                  </p>
                </div>
              </div>
              {state.status === "success" && (
                <p className="mt-5 text-xs uppercase tracking-[0.2em] text-brand-500">
                  {labels.updated}:{" "}
                  {new Date(item.time).toLocaleTimeString(language)}
                </p>
              )}
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
