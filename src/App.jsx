import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error"
import RestaurantMenu from "./components/RestaurantMenu";
import Shimmer from "./components/Shimmer";
const Grocery = lazy(()=> import("./components/Grocery"))

function App() {

  return (
    <>
      <div className="container">
      <Header />
      <Outlet />
    </div>
    </>
  )
}

const AppLayout = createBrowserRouter([
  {
    path: "/",
    element:<App />,
    children: [{
      path:"/",
      element: <Body />
    },
    {
      path: "/about",
      element: <About />
    },
    {
      path: "/contact",
      element: <Contact />
    },{
      path:"/restaurants/:resId",
      element: <RestaurantMenu />
    },
    {
      path: "/grocery",
      element: <Suspense fallback={<h1>This is loading</h1>}><Grocery /></Suspense>
    },],
    errorElement: <Error />,
  },
  
]);


export default AppLayout;
