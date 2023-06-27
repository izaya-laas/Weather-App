export function CardHighlight({ highlight, value, children }) {
  return (
    <div className="bg-main text-white-faint text-center mt-8 p-4 pb-8 max-w-[400px] min-w-[300px] mx-auto lg:pt-4 lg:pb-6 lg:mt-4 lg:w-full">
      <p className="text-base mb-4">{highlight}</p>
      <h3 className="text-5xl font-raleway font-bold ">{value}</h3>
      {children}
    </div>
  );
}
