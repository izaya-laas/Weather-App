export function CloseMenu({ closeFunction }) {
  return (
    <div className="flex justify-end">
      <button
        onClick={closeFunction}
        className="text-white text-2xl rounded-full w-8 h-10"
      >
        <img src="/public/cross-icon.svg" className="w-full" alt="cross icon" />
      </button>
    </div>
  );
}
