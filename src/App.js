import React from "react";
import { createBrowserRouter  , RouterProvider , Outlet} from "react-router";
import Error from "./components/Error";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About"
import ContactUs from "./components/ContactUs";
import RestaurantMenu from "./components/RestaurantMenu";



const AppLayout = ()=>{
   return (
      <div className="app">
         <Header/>
         <Outlet/>
      </div>
   )
}


const appRouter = createBrowserRouter([
   {
      path:"/",
      element:<AppLayout/>,
      children:[
         {
            path:"/",
            element:<Body/>
         },
          {
            path: "/about",
            element:<About/>
         },
         {
            path:"/contact",
            element:<ContactUs/>

         },
         {
            path:"/restaurant/:resId",
            element:<RestaurantMenu/>

         }

      ],
      errorElement: <Error/>
   } 
  
])

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider  router={appRouter}/>);