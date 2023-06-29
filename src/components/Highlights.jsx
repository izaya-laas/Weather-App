import { useLocation } from "../context/locationContext";
import { CardHighlight } from "./CardHighlight";

export function Highlights() {
  const { locationData } = useLocation();
  const current = locationData.current;

  const humidity = current?.humidity;
  const pressure = current?.pressure_mb;
  const gust = current?.gust_kph;
  const visibility = current?.vis_km;

  return (
    <section className="bg-secondary px-4 pt-6 pb-12 lg:pb-0">
      <h2 className="text-white-faint text-2xl text-center mb-6 font-raleway font-bold lg:mb-0 lg:text-xl">
        Destacados de hoy
      </h2>
      <div className="sm:grid sm:grid-cols-2 sm:gap-x-8 lg:max-w-2xl mx-auto">
        <CardHighlight highlight="Viento" value={`${gust}kph`} />
        <CardHighlight highlight="Humedad" value={`${humidity}%`}>
          <input
            type="range"
            value={humidity}
            disabled
            className="bg-yellow-300 h-2 appearance-none mt-6"
          />
        </CardHighlight>
        <CardHighlight highlight="Visibilidad" value={`${visibility} km`} />
        <CardHighlight highlight="Presion de aire" value={`${pressure}mb`} />
      </div>
    </section>
  );
}
