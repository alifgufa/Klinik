import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Page/Login";
import Home from "./Page/Home";
import NotFound from "./components/NotFound";
// import NotFound from "./components/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/Beranda",
    element: <Home />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

function Route() {
  return <RouterProvider router={router} />;
}

export default Route;
