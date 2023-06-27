import { CardHighlight } from "./CardHighlight";

export function Highlights() {
  return (
    <section className="bg-secondary px-4 pt-6 pb-12 lg:pb-0">
      <h2 className="text-white-faint text-2xl text-center mb-6 font-raleway font-bold lg:mb-0 lg:text-xl">
        Destacados de hoy
      </h2>
      <div className="sm:grid sm:grid-cols-2 sm:gap-x-8 lg:max-w-2xl mx-auto">
        <CardHighlight highlight="Viento" value="7mph" />
        <CardHighlight highlight="Humedad" value="84%">
          <input
            type="range"
            value="84"
            disabled
            className="bg-yellow-300 h-2 appearance-none mt-6"
          />
        </CardHighlight>
        <CardHighlight highlight="Visibilidad" value="6,4 millas" />
        <CardHighlight highlight="Presion de aire" value="998mb" />
      </div>
    </section>
  );
}
