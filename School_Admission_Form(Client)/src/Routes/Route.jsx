import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root/Root";
import Login from "../Pages/Auth/Login";
import Signup from "../Pages/Auth/Signup";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Signup></Signup>,
        // element: <Login></Login>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      // {
      //   path: "/",
      //   element: <Signup></Signup>,
      // },
    ],
  },
]);
