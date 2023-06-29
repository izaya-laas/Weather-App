import { useLocation } from "../context/locationContext";

export default function Skeleton({ className, children }) {
  const { isReady } = useLocation();
  return (
    <>
      {!isReady ? (
        <div
          className={`w-full py-2 bg-gray-faint animate-pulse mt-4 rounded-[5px] ${className}`}
        ></div>
      ) : (
        <>{children}</>
      )}
    </>
  );
}
