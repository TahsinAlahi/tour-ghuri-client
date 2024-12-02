import testImg from "../assets/hero-1.png";

function TourSpotPage() {
  return (
    <main className=" min-h-[calc(100svh-72px)] max-w-screen-xl mx-auto relative flex flex-col ">
      <div className="absolute top-0 bottom-0 left-0 right-0 pointer-events-none -z-10">
        <img
          src={testImg}
          className="w-full h-full object-center object-cover"
        />
      </div>

      <div className="lg:w-1/3 w-full flex items-center justify-center h-full inset-0 bg-black/40 backdrop-blur-sm text-white font-nunito flex-1">
        <div className="w-5/6">
          <div className="border-b-4 border-blue-600 mb-6">
            <h1 className="text-4xl font-semibold font-playfair">Data.name</h1>
            <p className="text-2xl font-semibold">data.country</p>
          </div>
          <div className="mb-4">
            <h2 className="text-3xl font-semibold font-playfair">Details</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam
              voluptas ea at? Aliquam modi numquam voluptates, maiores ducimus
              libero perspiciatis velit, quam ullam rem obcaecati, laborum
              voluptatem dolorum. Molestiae, sapiente?
            </p>
          </div>
          <ul className="space-y-1">
            <li>
              Cost: <span className="font-semibold">data.cost</span>
            </li>
            <li>
              Travel Time: <span className="font-semibold">data.time</span>
            </li>
            <li>
              Total Visitors / Year :{" "}
              <span className="font-semibold">data.visitors</span>
            </li>
            <li>
              Seasonality:{" "}
              <span className="font-semibold">data.seasonality</span>
            </li>
            <li>
              Author: <span className="font-semibold">data.name</span>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}

export default TourSpotPage;
