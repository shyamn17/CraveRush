import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import Instamart from "./components/Instamart";
import Contact from "./components/Contact";
import RestuarantMenu from "./components/RestaurantMenu";
import Profile from "./components/Profile"
import Cart from "./components/Cart"
import { Provider } from "react-redux";
import Store from "./Redux/Store";

const AppComponent=()=>{
    return(
      <div >
    <Provider store={Store}>
       <Header /> 
       <Outlet />
       <Footer />
    </Provider>
    </div>
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
            path: "/instamart",
            element: <Instamart />
          },
         {
            path: "/about",
            element: <About />,
            children: [{
              path: "profile",
              element: <Profile/>
            }]
          },
          {
            path: "/contact",
            element: <Contact />
          },
          {
            path: "/cart",
            element: <Cart />
          },
          {
            path: "/restaurant/:resId",
            element: <RestuarantMenu />
          },
      ],
    },
  ]);


const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
