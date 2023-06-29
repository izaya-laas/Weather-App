import { createContext } from "preact";
import { useContext, useState, useEffect } from "preact/hooks";

export const LocationContext = createContext({
  handleLocation: () => {},
  locationData: {},
  isReady: Boolean,
});
const initialLocation = localStorage.getItem("location") || "Buenos Aires";

export const LocationProvider = ({ children }) => {
  const [location, setLocation] = useState(initialLocation);
  const [isReady, setIsReady] = useState(false);
  const [locationData, setLocationData] = useState({});

  const handleLocation = (currentLocation) => {
    setLocation(currentLocation);
  };

  useEffect(() => {
    setIsReady(false);
    setTimeout(() => {
      setLocationData({ city: location });
      setIsReady(true);
    }, 1500);
  }, [location]);

  const data = {
    handleLocation,
    locationData,
    isReady,
  };

  return (
    <LocationContext.Provider value={data}>{children}</LocationContext.Provider>
  );
};

export function useLocation() {
  return useContext(LocationContext);
}
