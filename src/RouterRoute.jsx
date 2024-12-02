import { createBrowserRouter } from "react-router";
import AppLayout from "./layouts/AppLayout";
import HomePage from "./pages/HomePage";
import TourSpotPage from "./pages/TourSpotPage";
import AllTouristSpotsPage from "./pages/AllTouristSpotsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/tours/:id",
        element: <TourSpotPage />,
      },
      {
        path: "/all-tourist-spots",
        element: <AllTouristSpotsPage />,
      },
    ],
  },
]);

export default router;
