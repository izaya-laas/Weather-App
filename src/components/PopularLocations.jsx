import { PopularLocation } from "./PopularLocation";
const popularLocations = ["Barcelona", "Londres", "Miami", "Buenos Aires"];

export function PopularLocations() {
  return (
    <section className="mt-12">
      <h4 className="text-white-faint font-bold text-lg">Popular locations</h4>
      <div className="flex flex-col gap-y-4 pt-4 text-base sm:flex-row sm:flex-wrap sm:gap-x-4 lg:flex-col">
        {popularLocations.map((location, index) => (
          <PopularLocation key={index} location={location} />
        ))}
      </div>
    </section>
  );
}
