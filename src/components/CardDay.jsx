import Skeleton from "./Skeleton";

export function CardDay({ day, icon, minTem, maxTem }) {
  return (
    <article className="w-32 h-44 bg-main p-4 flex flex-col justify-around items-center sm:w-36 md:w-40 md:h-48 lg:w-32 lg:h-44 ">
      <h3 className="text-white-faint text-base text-center font-bold">
        {day}
      </h3>
      <Skeleton className="w-[64px] h-[64px] rounded-[100%]">
        <img className="w-16" src={icon} alt="icon day" />
      </Skeleton>
      <Skeleton>
        <p className="text-lg text-white-faint">
          {maxTem}°c <span className="ml-2 text-gray-faint">{minTem}°c</span>
        </p>
      </Skeleton>
    </article>
  );
}
