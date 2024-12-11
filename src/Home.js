import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestuarantMenu from "./components/RestaurantMenu";

const AppComponent=()=>{
    return(
    <React.Fragment>
       <Header /> 
       <Outlet />
       <Footer />
    </React.Fragment>
    )
}

const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <AppComponent />,
      errorElement: <Error />,
      children: [
        {
            path: "/",
            element: <Body />
          },
         {
            path: "/about",
            element: <About />
          },
          {
            path: "/contact",
            element: <Contact />
          },
          {
            path: "/restuarant/:id",
            element: <RestuarantMenu />
          },
      ],
    },
  ]);


const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
