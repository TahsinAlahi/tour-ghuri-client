import { Link } from "react-router";
import testImg from "../assets/hero-1.png";

function AllSpotsCard() {
  return (
    <div className="grid grid-cols-1 gap-4 border-2 border-gray-700 rounded-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 p-2 border border-gray-200 rounded-lg shadow-sm">
        <div className="w-full rounded-lg overflow-hidden">
          <img
            src={testImg}
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="flex flex-col items-start gap-4">
          <h2 className="text-3xl font-semibold">Data.name</h2>
          <ul className="text-lg">
            <li>Cost: data.cost</li>
            <li>Travel Time: data.duration</li>
            <li>Total Visitor / Year: data.visitors</li>
            <li>Seasonality: data.season</li>
          </ul>
          <Link
            to="/tours/2"
            className="text-black text-center bg-detail-btn py-2 px-4 rounded w-full md:w-fit mt-3"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AllSpotsCard;
