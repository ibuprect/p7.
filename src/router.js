import { createBrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Error from "../pages/404";
import About from "../pages/about";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/home", element: <Home />, errorElement: <ErrorPage />,},
      {
        path: "/:id",element: <Housing />,errorElement: <ErrorPage />,},
      { path: "/about", element: <About />, errorElement: <ErrorPage />, },
      {path: "*",element: <PageNotFound />, errorElement: <ErrorPage />,},
    ],
  },
]);

export default router