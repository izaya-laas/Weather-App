export function Header() {
  return (
    <header className="absolute top-0 w-full translate-y-[-40px] lg:translate-y-0">
      <nav className="p-4 flex justify-between items-center">
        <div>
          <button className="block py-2 text-white-faint rounded-sm bg-gray-dark px-5 text-base">
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
  );
}
