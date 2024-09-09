import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AppWrapper from "../AppWrapper";
import Home from "../Pages/Home";
import Career from "../Pages/Career";
import Testimonial from "../Pages/Testimonial";

import Login from "../Pages/Login";

import React from "react";

const routes = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <AppWrapper />,
    children: [
      {
        path: "careers",
        element: <Career />,
      },
      { path: "testimonials", element: <Testimonial /> },
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={routes} />;
};

export default AppRouter;
