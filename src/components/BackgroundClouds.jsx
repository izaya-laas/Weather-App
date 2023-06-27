export function BackgroundClouds() {
  return (
    <div className="absolute -z-10 bg-cover bg-top inset-0 h-[19rem] w-auto max-w-[32rem] mx-auto lg:left-0 top-0">
      <img
        src="cloud-background.png"
        alt="background clouds"
        className="w-full h-full opacity-10 object-cover"
      />
    </div>
  );
}
