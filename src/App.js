import React, { lazy , Suspense ,useState , useEffect } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter  , RouterProvider , Outlet} from "react-router";
import { Provider } from "react-redux"; // import -> react-redux -> act as a bridge btw store <-> react

import Error from "./components/Error";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About"
import ContactUs from "./components/ContactUs";
import RestaurantMenu from "./components/RestaurantMenu";
import Cart from "./components/Cart";

import UserContext from "./utils/UserContext";
import appStore from "./utils/appStore";


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
  } , [])


   return (
       <Provider store={appStore}>
       <UserContext.Provider value={{loggedInUser:userName , setUserName}}>
         {/* ravi Kumar  */}
         <div className="app">
            {/* userName */}
         <Header/>
         <Outlet/>
      </div>
      </UserContext.Provider>
      </Provider>
     
      
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

         },
         {
            path:"/cart",
            element:<Cart/>
         }

      ],
      errorElement: <Error/>
   } 
  
])

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider  router={appRouter}/>);