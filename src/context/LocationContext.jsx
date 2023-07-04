import { createContext } from "preact";
import { useContext, useState, useEffect } from "preact/hooks";
import api from "../api/api.js";

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
  const [error, setError] = useState({});

  const handleLocation = (currentLocation) => {
    setLocation(currentLocation);
  };

  useEffect(() => {
    setIsReady(false);
    let timeout;

    const fetchingData = async () => {
      try {
        //Fetching API
        const res = await fetch(api.concat(`q=${location}`));

        if (!res.ok) throw new Error(res);

        const jsonData = await res.json();

        //Set states
        localStorage.setItem("location", location);
        setLocationData(jsonData);
        setIsReady(true);
      } catch (err) {
        setIsReady(true);
        setError({
          status: err.status,
          statusText: `${location} no se ha encontrado.`,
        });

        timeout = setTimeout(() => {
          setError({});
        }, 5000);
      }
    };

    fetchingData();

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
