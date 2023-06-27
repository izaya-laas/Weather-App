import { CardDay } from "../components/CardDay";

export function NextDaysData() {
  return (
    <section className="bg-secondary px-4 pb-16 pt-12 grid grid-cols-2 place-items-center gap-y-8 lg:flex lg:gap-y-0 lg:gap-x-4 sm:grid-cols-3 sm:px-20 md:px-32 sm:gap-x-8 md:gap-x-0 lg:px-0 lg:justify-center lg:pb-2 lg:pt-16 lg:lg:max-w-2xl lg:mx-auto">
      <CardDay day="tomorrow" icon="/light-cloud.png" maxTem="16" minTem="11" />
      <CardDay day="tomorrow" icon="/light-cloud.png" maxTem="16" minTem="11" />
      <CardDay day="tomorrow" icon="/light-cloud.png" maxTem="16" minTem="11" />
      <CardDay day="tomorrow" icon="/light-cloud.png" maxTem="16" minTem="11" />
      <CardDay day="tomorrow" icon="/light-cloud.png" maxTem="16" minTem="11" />
    </section>
  );
}
