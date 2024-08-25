import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root/Root";
import Login from "../pages/Auth/Login";
import Signup from "../pages/Auth/Signup";
import Profile from "../Pages/Dashboard/Profile/Profile";
import DashboardLayout from "../Layout/DasboardLayout/DashboardLayout";
import AdmissionForm from "../Pages/Dashboard/AdmissionForm/AdmissionForm";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Signup />,
        // element: <Login />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
  {
    path: "dashboard",
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "admissionForm",
        element: <AdmissionForm />,
      },
      // {
      //   path: "settings",
      //   element: <Settings />,
      // },
    ],
  },
]);
