import React, { lazy , Suspense ,useState , useEffect } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter  , RouterProvider , Outlet} from "react-router";
import Error from "./components/Error";

import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About"
import ContactUs from "./components/ContactUs";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";


// Chunking , code splitting , dynamic bundling 
// lazy loading
const Grocery = lazy(()=>import("./components/Grocery"));

const AppLayout = ()=>{

   const [userName , setUserName] = useState();
//  Authentication :-
  useEffect(()=>{
   // suppose make an api call and get user info from user
   const data = {
      name:"Himanshu Kumar"
   }

   setUserName(data.name)
  })


   return (

       <UserContext.Provider value={{loggedInUser:"Ravi Kumar"}}>
         {/* ravi Kumar  */}
         <div className="app">
          <UserContext.Provider value={{loggedInUser:userName}}>
            {/* userName */}
         <Header/>
          </UserContext.Provider>
         <Outlet/>
      </div>
      </UserContext.Provider>
     
      
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
            path:"/grocery",
            element:<Suspense fallback={<h1>Loading .......</h1>} ><Grocery/></Suspense>

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