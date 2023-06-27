import { Header } from "./components/Header";
import { Highlights } from "./components/Highlights";
import { MainData } from "./components/MainData";
import { NextDaysData } from "./components/NextDaysData";

export function App() {
  return (
    <>
      <main className="pt-12 relative lg:pt-0">
        <div className="lg:flex lg:w-full lg:items-start ">
          <MainData />
          <div className="lg:px-4 py-2 bg-secondary w-full lg:h-screen ">
            <NextDaysData />
            <Highlights />
          </div>
        </div>
      </main>
    </>
  );
}
