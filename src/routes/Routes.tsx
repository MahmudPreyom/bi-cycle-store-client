import { createBrowserRouter } from "react-router-dom";
import Main from "../components/layout/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/registerLogin/Login";
import Register from "../pages/registerLogin/Register";
import App from "../App";
import AllBicycles from "../pages/Home/AllBiCycle";

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
        path: "/admin",
        element: <App />,
      },
      {
        path: "/all-bicycles",
        element: <AllBicycles />,
      },
    ],
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
