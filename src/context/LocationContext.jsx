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
  const [oldLocation, setOldLocation] = useState("");
  const [isReady, setIsReady] = useState(false);
  const [locationData, setLocationData] = useState({});
  const [error, setError] = useState({});

  const handleLocation = (currentLocation) => {
    setLocation(currentLocation);
    setOldLocation(location);
  };

  useEffect(() => {
    setIsReady(false);
    let timeout;

    fetch(api.concat(`q=${location}`))
      .then((res) => (res.ok ? res.json() : Promise.reject(res)))
      .then((json) => {
        console.log(json);

        localStorage.setItem("location", location);
        setLocationData(json);
        setIsReady(true);
      })
      .catch((err) => {
        setOldLocation(location);
        setIsReady(true);
        setError({
          status: err.status,
          statusText: `${location} no se ha encontrado.`,
        });

        timeout = setTimeout(() => {
          setError({});
        }, 5000);
      });

    return () => {
      clearTimeout(timeout);
    };
  }, [location]);

  const data = {
    handleLocation,
    locationData,
    isReady,
    error,
  };

  return (
    <LocationContext.Provider value={data}>{children}</LocationContext.Provider>
  );
};

export function useLocation() {
  return useContext(LocationContext);
}
