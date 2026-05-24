import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Home from "../pages/home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
    children: [
      { index: true, Component: Home },
      { path: "acerca", Component: Home },
      { path: "producto/:city", Component: Home },
    ],
  },
]);