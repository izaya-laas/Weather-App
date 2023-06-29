import { createContext } from "preact";
import { useContext, useState, useEffect } from "preact/hooks";
const key = import.meta.env.VITE_API_KEY;
const api = `https://api.weatherapi.com/v1/forecast.json?key=${key}&lang=es&days=6&`;

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

    fetch(api.concat(`q=${location}`))
      .then((res) => (res.ok ? res.json() : Promise.reject(res)))
      .then((json) => {
        setLocationData(json);
        setIsReady(true);
      });
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
