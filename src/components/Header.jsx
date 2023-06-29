import { memo } from "preact/compat";
import { useState } from "preact/hooks";
import { CloseMenu } from "./CloseMenu";
import { useLocation } from "../context/locationContext";
import { PopularLocations } from "./PopularLocations";
import { SearchLocation } from "./SearchLocation";

function Header() {
  const [isOpen, SetIsOpen] = useState(false);
  const { handleLocation, fetchingData } = useLocation();

  console.log("Header", fetchingData);
  const handleButton = () => {
    SetIsOpen(!isOpen);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const location = event.target.location.value;
    localStorage.setItem("location", location);
    handleLocation(location);
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
        className={`fixed p-4 lg:absolute bg-main w-screen lg:w-full h-full lg:h-screen top-0  lg:translate-y-0 left-0 transition-transform duration-700 z-10 ${
          isOpen ? "" : "-translate-x-full"
        }`}
      >
        <CloseMenu closeFunction={handleButton} />
        <SearchLocation handleSubmit={handleSubmit} />
        <PopularLocations />
      </nav>
    </>
  );
}

export default memo(Header);
