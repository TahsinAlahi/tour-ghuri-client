import HomeTouristCard from "./HomeTouristCard";

function HomeTouristSpots() {
  return (
    <main className="w-full">
      <h1 className="text-5xl font-bold text-center mb-10 pt-10 border-b-2 border-title-underline w-fit mx-auto font-nunito">
        Tourist Spots
      </h1>
      <div className="grid grid-cols-3 max-w-screen-lg mx-auto min-h-[50svh] w-full rounded-lg gap-4">
        <HomeTouristCard />
        <HomeTouristCard />
        <HomeTouristCard />
      </div>
    </main>
  );
}

export default HomeTouristSpots;
