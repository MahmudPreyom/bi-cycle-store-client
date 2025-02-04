import { createBrowserRouter } from "react-router-dom";
import Main from "../components/layout/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/registerLogin/Login";
import Register from "../pages/registerLogin/Register";
import App from "../App";
import AllBicycles from "../pages/Home/AllBiCycle";
import SingleBicycleDetails from "../pages/Home/SingleBicycleDetails";
import About from "../pages/Home/About";
import { routeGenerator } from "../utils/routesGenerator";
import { adminPath } from "./admin.routes";
import { userPaths } from "./user.routes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/all-bicycles",
        element: <AllBicycles />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/details-bicycles",
        element: <SingleBicycleDetails />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <App />,
    children: routeGenerator(adminPath),
  },
  {
    path: "/dashboard",
    element: <App />,
    children: routeGenerator(userPaths),
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);
