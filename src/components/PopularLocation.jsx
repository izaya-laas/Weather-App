import { useLocation } from "../context/locationContext";

export function PopularLocation({ location }) {
  const { handleLocation } = useLocation();

  return (
    <button
      className="border-gray-faint border text-white-faint p-2 flex justify-between max-w-sm "
      onClick={() => {
        localStorage.setItem("location", location);
        handleLocation(location);
      }}
    >
      {location}
      <img
        src="/public/arrow-right-icon.svg"
        className="w-4 ml-4"
        alt="arrow icon"
      />
    </button>
  );
}
