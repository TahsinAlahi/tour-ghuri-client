import { IoLocationSharp } from "react-icons/io5";
import testImage from "../assets/hero-3.png";

function HomeTouristCard() {
  return (
    <div className="relative h-80 rounded-lg overflow-hidden">
      <div className="absolute top-0 bottom-0 left-0 right-0 z-[-10] pointer-events-none select-none">
        <img
          src={testImage}
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="p-4 w-full h-full bg-home-card flex flex-col justify-between text-white ">
        <h1 className="text-2xl font-playfair font-semibold capitalize">
          data.name
        </h1>
        <div className="flex items-center justify-between">
          <div className="text-lg">
            <p className="text-xl capitalize">data.place</p>
            <p className="space-x-1">
              <IoLocationSharp className="inline" color="white" />
              <span className="capitalize">data.country</span>
            </p>
          </div>
          <button className="bg-white text-black px-3 py-1">View more</button>
        </div>
      </div>
    </div>
  );
}

export default HomeTouristCard;
