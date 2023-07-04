import { useLocation } from "../context/locationContext";
import { BackgroundClouds } from "./BackgroundClouds";
import Header from "./Header";
import Skeleton from "./Skeleton";

const today = new Date().toLocaleDateString();

export function MainData() {
  const { locationData } = useLocation();
  const current = locationData.current;
  return (
    <section className="relative px-4 pb-24 flex justify-center items-center flex-col pt-16 lg:px-8 lg:w-[420px] lg:pb-0 lg:pt-36 ">
      <Header />
      <BackgroundClouds />
      <Skeleton className="w-[128px] h-[128px] rounded-[100%]">
        <img src={current?.condition.icon} className="w-32" alt="light-icon" />
      </Skeleton>
      <div className="mt-4 text-white-faint lg:mt-10">
        <Skeleton className="py-10 rounded-lg w-[250px]">
          <h1 className="text-8xl text-center font-raleway font-bold">
            {parseInt(current?.feelslike_c)}°c
          </h1>
        </Skeleton>
        <div className="mt-4 text-gray-faint">
          <Skeleton className="py-4 ">
            <h2 className="text-3xl text-center my-6">
              {current?.condition.text}
            </h2>
          </Skeleton>
          <Skeleton>
            <div className="flex justify-center gap-x-2 lg:mt-12">
              <p>Hoy</p>
              <span>·</span>
              <p>{today}</p>
            </div>
          </Skeleton>
          <Skeleton className="">
            <p
              className={`flex gap-x-2 justify-center flex-wrap mt-4 font-bold 
            }`}
            >
              <img
                className="w-6"
                src="/location-2-icon.svg"
                alt="Ubication icon"
              />
              {`${locationData.location?.name}, ${locationData.location?.country}`}
            </p>
          </Skeleton>
        </div>
      </div>
    </section>
  );
}
