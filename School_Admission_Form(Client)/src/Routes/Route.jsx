import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root/Root";
import Login from "../pages/Auth/Login";
import Signup from "../pages/Auth/Signup";
import Profile from "../Pages/Dashboard/Profile/Profile";
import DashboardLayout from "../Layout/DasboardLayout/DashboardLayout";
import AdmissionForm from "../Pages/Dashboard/AdmissionForm/AdmissionForm";
import Dashboard from "../Pages/Dashboard/Dashboard/Dashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Signup />,
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
        path: "home",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "admissionForm",
        element: <AdmissionForm />,
      },
    ],
  },
]);
