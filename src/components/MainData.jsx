import { BackgroundClouds } from "./BackgroundClouds";
import { Header } from "./Header";

export function MainData() {
  return (
    <section className="relative px-4 pb-24 flex justify-center items-center flex-col pt-16 lg:px-8 lg:w-[420px] lg:pb-0 lg:pt-36 ">
      <Header />
      <BackgroundClouds />
      <img src="/clear.png" className="w-32" alt="light-icon" />
      <div className="mt-4 text-white-faint lg:mt-10">
        <h1 className="text-8xl text-center font-mynerve-bold">15°c</h1>
        <div className="mt-4 text-gray-faint">
          <h2 className="text-3xl text-center my-6">Shower</h2>
          <div className="flex justify-center gap-x-2 lg:mt-12">
            <p>Today</p>
            <span>·</span>
            <p>Fri, 5 Jun</p>
          </div>
          <p className="flex gap-x-2 justify-center mt-4 font-bold">
            <img
              className="w-6"
              src="/location-2-icon.svg"
              alt="Ubication icon"
            />
            Helsinki
          </p>
        </div>
      </div>
    </section>
  );
}
