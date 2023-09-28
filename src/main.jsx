import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./Pages/login.jsx";
import RegisterPage from "./Pages/register.jsx";
import ErrorPage from "./Pages/404.jsx";
import Product from "./Pages/product";
import Profile from "./Pages/profile";
import DetailProductPage from "./Pages/detailproduct";
import { Provider } from "react-redux";
import store from "./redux/store";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello Word</div>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/products",
    element: <Product />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/product/:id",
    element: <DetailProductPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
