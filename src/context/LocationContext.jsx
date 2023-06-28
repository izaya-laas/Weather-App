import { createContext } from "preact";
import { useState } from "preact/hooks";

const LocationContext = createContext();
const initialLocation = localStorage.getItem("location") || "Buenos Aires";

export const LocationProvider = ({ children }) => {
  const [location, setLocation] = useState(initialLocation);

  const handleLocation = (currentLocation) => {
    setLocation(currentLocation);
  };

  const data = {
    location,
    handleLocation,
  };

  return (
    <LocationContext.Provider value={data}>{children}</LocationContext.Provider>
  );
};
