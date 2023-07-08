import React from "react";
import ReactDOM from "react-dom/client";
import Product from "./pages/Product";
import Home from "./pages/Home";
import Products from "./pages/Products";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import "./App.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products/:cat",
        element: <Products />,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
