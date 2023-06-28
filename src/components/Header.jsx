import { useState } from "preact/hooks";

export function Header() {
  const [isOpen, SetIsOpen] = useState(false);

  const handleButton = () => {
    SetIsOpen(!isOpen);
  };

  return (
    <>
      <header className="absolute top-0 w-full translate-y-[-40px] lg:translate-y-0">
        <nav className="p-4 flex justify-between items-center">
          <div>
            <button
              onClick={handleButton}
              className="block py-2 text-white-faint rounded-sm bg-gray-dark px-5 text-base"
            >
              Buscar por lugar
            </button>
          </div>
          <button className="w-10 h-10 p-1 rounded-full bg-gray-dark">
            <img
              className="w-full"
              src="/location-icon.svg"
              alt="location icon"
            />
          </button>
        </nav>
      </header>
      <nav
        className={`fixed p-4 lg:absolute bg-main w-screen lg:w-full h-full lg:h-screen top-0  lg:translate-y-0 left-0 ${
          isOpen ? "" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-end">
          <button className="text-white text-2xl rounded-full w-8 h-10">
            <img
              src="/public/cross-icon.svg"
              className="w-full"
              alt="cross icon"
            />
          </button>
        </div>
        <form className="flex mt-8 gap-x-2">
          <div className="border-white-faint border items-center flex gap-x-2 px-2">
            <label htmlFor="search" className="w-8">
              <img src="/public/search-icon.svg" className="w-8" alt="" />
            </label>
            <input
              id="search"
              type="text"
              className="bg-transparent outline-none w-full text-white-faint"
              placeholder="Search Location"
            />
          </div>
          <button type="submit" className="bg-blue-light text-white-faint p-2">
            Search
          </button>
        </form>
        <section className="mt-12">
          <h4 className="text-white-faint font-bold text-lg">
            Popular locations
          </h4>
          <div className="flex flex-col gap-y-4 pt-4 text-base sm:flex-row sm:flex-wrap sm:gap-x-4 lg:flex-col">
            <button className="border-gray-faint border text-white-faint p-2 flex justify-between max-w-sm ">
              Barcelona
              <img
                src="/public/arrow-right-icon.svg"
                className="w-4 ml-4"
                alt="arrow icon"
              />
            </button>
            <button className="border-gray-faint border text-white-faint p-2 flex justify-between max-w-sm">
              Londres
              <img
                src="/public/arrow-right-icon.svg"
                className="w-4 ml-4"
                alt="arrow icon"
              />
            </button>
            <button className="border-gray-faint border text-white-faint p-2 flex justify-between max-w-sm">
              Miami
              <img
                src="/public/arrow-right-icon.svg"
                className="w-4 ml-4"
                alt="arrow icon"
              />
            </button>
            <button className="border-gray-faint border text-white-faint p-2 flex justify-between max-w-sm">
              Buenos Aires
              <img
                src="/public/arrow-right-icon.svg"
                className="w-4 ml-4"
                alt="arrow icon"
              />
            </button>
          </div>
        </section>
      </nav>
    </>
  );
}
