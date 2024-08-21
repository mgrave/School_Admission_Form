// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Route";
import { ThemeProvider } from "@material-tailwind/react";
import AuthProvider from "./Context/AuthProvider";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <AuthProvider>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </AuthProvider>
  // </StrictMode>
);
