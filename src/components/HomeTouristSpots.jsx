import testImage from "../assets/hero-3.png";

function HomeTouristSpots() {
  return (
    <main className="w-full">
      <h1 className="text-5xl font-bold text-center font-playfair mb-10 pt-10 border-b-2 border-title-underline w-fit mx-auto">
        Tourist Spots
      </h1>
      <div className="grid grid-cols-3 max-w-screen-lg mx-auto min-h-[50svh] w-full rounded-lg">
        <div className="relative h-80 rounded-lg overflow-hidden">
          <div className="absolute top-0 bottom-0 left-0 right-0 z-[-10]">
            <img
              src={testImage}
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="w-full h-full bg-home-card"></div>
        </div>
      </div>
    </main>
  );
}

export default HomeTouristSpots;
