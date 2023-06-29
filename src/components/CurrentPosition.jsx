import { useLocation } from "../context/locationContext";

export function CurrentPosition() {
  const { handleLocation } = useLocation();

  const handleCurrentLocation = async () => {
    navigator.geolocation.getCurrentPosition((res) => {
      const coords = res.coords;

      const latitude = coords.latitude;
      const longitude = coords.longitude;

      const currentLocation = `${latitude},${longitude}`;

      handleLocation(currentLocation);
    });
  };
  return (
    <button
      onClick={handleCurrentLocation}
      className="w-10 h-10 p-1 rounded-full bg-gray-dark"
    >
      <img className="w-full" src="/location-icon.svg" alt="location icon" />
    </button>
  );
}
