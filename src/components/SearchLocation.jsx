export function SearchLocation({ handleSubmit }) {
  return (
    <form className="flex mt-8 gap-x-2" onSubmit={handleSubmit}>
      <div className="border-white-faint border items-center flex gap-x-2 px-2">
        <label htmlFor="search" className="w-8">
          <img
            src="/public/search-icon.svg"
            className="w-8"
            alt="Search icon"
          />
        </label>
        <input
          name="location"
          id="search"
          type="text"
          className="bg-transparent outline-none w-full text-white-faint"
          placeholder="Search Location"
        />
      </div>
      <button type="submit" className="bg-blue-light text-white-faint p-2">
        Search
      </button>
    </form>
  );
}
