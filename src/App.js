
import React, {  lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AppLayout from "./components/AppLayout";
import { createBrowserRouter , RouterProvider, } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import Body from "./components/Body";
import RestaurantMenu from "./components/restaurantMenu";
import Profile from "./components/Profile";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import { Shimmer } from "react-shimmer";


const Instamart= lazy(()=>import("./components/Inatamart"))




const appRouter= createBrowserRouter([
    {
      path:"/",
      element:<AppLayout/>,
      errorElement:<Error/>,
      children:[
        {
          path:"/about", element:<About/>,
          children:[{
            path:"profile",
            element:<Profile/>
          }]
        },
        {
          path:"/contact", element:<Contact/>
        },
        {
          path:"/cart", element:<Cart/>
        },
        {
          path:"/", element:<Body/>
        },
        {
          path:"/restaurant/:id", element:<RestaurantMenu/>
        },
        {
          path:"/instamart", element:<Suspense fallback={<Shimmer/>}><Instamart/></Suspense>
        }
      ]
    },
   
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    
<RouterProvider router={appRouter}/>
);
