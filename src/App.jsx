import React, { lazy, Suspense, useContext, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Shimmer from "./components/Shimmer";
import Home from "./components/Home";
import SearchContext from "./components/context/SearchContext";
import { Provider } from "react-redux";
import store from "./store/store";
import CartDetails from "./components/CartDetails";
const Grocery = lazy(() => import("./components/Grocery"));

function App() {
  const [search, setSearch] = useState("");

  return (
    <Provider store={store}>
      <SearchContext.Provider value={{ searchText: search, setSearch }}>
        <Home />
      </SearchContext.Provider>
    </Provider>
  );
}

const AppLayout = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: <CartDetails />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>This is loading</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

export default AppLayout;
