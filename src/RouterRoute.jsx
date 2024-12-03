import { createBrowserRouter } from "react-router";
import AppLayout from "./layouts/AppLayout";
import HomePage from "./pages/HomePage";
import TourSpotPage from "./pages/TourSpotPage";
import AllTouristSpotsPage from "./pages/AllTouristSpotsPage";
import AddTouristPage from "./pages/AddTouristPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

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
      {
        path: "/add-tourist-spot",
        element: <AddTouristPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
    ],
  },
]);

export default router;
