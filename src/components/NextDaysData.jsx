import dayjs from "dayjs";
import { CardDay } from "../components/CardDay";
import { useLocation } from "../context/locationContext";
import "dayjs/locale/es";

const days = [1, 2, 3, 4, 5];

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function NextDaysData() {
  const { locationData } = useLocation();

  console.log();
  return (
    <section className="bg-secondary px-4 pb-16 pt-12 grid grid-cols-2 place-items-center gap-y-8 lg:flex lg:gap-y-0 lg:gap-x-4 sm:grid-cols-3 sm:px-20 md:px-32 sm:gap-x-8 md:gap-x-0 lg:px-0 lg:justify-center lg:pb-2 lg:pt-16 lg:lg:max-w-2xl lg:mx-auto">
      {days.map((number) => {
        const currentDayData = locationData.forecast?.forecastday[number];

        const date = currentDayData?.date;
        const dayString = capitalizeFirstLetter(
          dayjs(date).locale("es").format("dddd")
        );

        const maxTemp = parseInt(currentDayData?.day.maxtemp_c);
        const minTemp = parseInt(currentDayData?.day.mintemp_c);

        const icon = currentDayData?.day.condition.icon;

        return (
          <CardDay
            key={number}
            day={dayString}
            icon={icon}
            maxTem={maxTemp}
            minTem={minTemp}
          />
        );
      })}
    </section>
  );
}
