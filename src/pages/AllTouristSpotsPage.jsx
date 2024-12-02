import AllSpotsCard from "../components/AllSpotsCard";

function AllTouristSpotsPage() {
  return (
    <main className="min-h-[calc(100svh-72px)] max-w-screen-lg mx-auto">
      <h1 className="text-5xl font-bold text-center mb-10 border-b-4 border-title-underline w-fit mx-auto font-nunito pt-10">
        All Tourist Spots
      </h1>

      <div className="w-full flex items-center justify-center flex-col gap-4 px-4">
        <AllSpotsCard />
        <AllSpotsCard />
        <AllSpotsCard />
      </div>
    </main>
  );
}

export default AllTouristSpotsPage;
