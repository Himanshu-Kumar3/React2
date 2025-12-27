import ResCard ,{withDiscountLabel} from "../components/ResCard";
import { use, useEffect, useState } from "react";
import {Link } from "react-router";

import Shimmer from "./Shimmer";
import { RESTAURANT_URL } from "../utils/constant";
import useOnlineStatus from "../utils/useOnlineStatus";
import useRestaurant from "../utils/useRestaurant";



// Body :-
   // not using keys(Not acceptable) <<<<< index as key <<<<<<<<<<<<<<<<<<<<<<< unique id (Best practice :) )
const Body = ()=>{
    // Local useState Variable = superPowerFul state variable : for this we use : "useSatate() :- Hook"
    const [filteredRestaurant , setFilteredRestaurant] = useState([]); // copy of original // for changes to be done in original data
    const [searchText , setSearchText] = useState("")


   const listOfRestaurant = useRestaurant();
   useEffect(()=>{
      if (listOfRestaurant.length > 0 ){
         setFilteredRestaurant(listOfRestaurant);
      }
    } , [listOfRestaurant])


    const RestaurantWithDiscount = withDiscountLabel(ResCard);


  const onlineStatus = useOnlineStatus();
  if (onlineStatus == false){
   return (<h2>Looks Like You're Offline ! Please check your internet connection :( </h2>);
  }
 
   return listOfRestaurant.length === 0? (<Shimmer/>): (
      <div className="body">
         <div className="filter h-24 m-4 p-4 flex items-center  ">
          <div className="searchContainer ">
            <input 
             type="text"  
             className="search-box border border-solid rounded-md border-black w-60 h-8" 
             value={searchText} 
             onChange={(e)=>{
               setSearchText(e.target.value);
             }}>  
             </input>
            <button className="searchBtn bg-green-100 w-20 h-10 mx-8 rounded-lg" onClick={()=>{
               const filteredList = listOfRestaurant.filter((res)=>{
                  return res.info.name.toLowerCase().includes(searchText.toLowerCase());
                  }); 
               // console.log(filteredList);
               setFilteredRestaurant(filteredList);
            }}> Search</button>
          </div>
          <div className="topRated mx-40">
            <button className="filter-btn bg-gray-200 w-60 h-10 rounded-md text-lg font-normal" onClick ={()=>{
             const filterList = listOfRestaurant.filter((rest)=> rest.info.avgRating > 4);
             setFilteredRestaurant(filterList);
            }} >Top Rated Restaurant</button>
          </div> 
         </div>

         <div className="res-card-container flex flex-wrap">
            {/* everytime it iterate into the list element -> obj , pass that obj to the ResCard component as props -> argument and also key */}
            {filteredRestaurant.map((restaurant) =>(
                 <Link key={restaurant?.info?.id} to={"restaurant/"+restaurant?.info?.id}>
                  {restaurant?.info?.aggregatedDiscountInfoV3 ? <RestaurantWithDiscount resData= {restaurant}/> :<ResCard  resData = {restaurant} />}
                  
                  </Link> 
             ))}

             {/* <ResCard resName="KFC" cusine="Burger, French Fries , Chicken Fires" imgLink="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/1/11/4df6c301-66e9-4b76-83cf-c44dfe08eaf7_975195.JPG"/> */}
         </div>
      </div>
   )
};
export default Body;