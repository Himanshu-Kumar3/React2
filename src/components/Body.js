import ResCard from "../components/ResCard";
import resList from "../utils/mockData";
import { useState } from "react";

// Body :-
   // not using keys(Not acceptable) <<<<< index as key <<<<<<<<<<<<<<<<<<<<<<< unique id (Best practice :) )
const Body = ()=>{
    // Local useState Variable = superPowerFul state variable : for this we use : "useSatate() :- Hook"
    const [listOfRestaurant, setListOfRestaurant] = useState(resList);


   return(
      <div className="body">
            <button className="filter-btn" onClick ={()=>{
                const filterList = listOfRestaurant.filter((rest)=> rest.info.avgRating > 4);
                setListOfRestaurant(filterList);
            }} >Top Rated Restaurant</button>
            <div className="res-card-container">
               {/* everytime it iterate into the list element -> obj , pass that obj to the ResCard component as props -> argument and also key */}
                {listOfRestaurant.map((restaurant) =>(
                  <ResCard key={restaurant.info.id} resData = {restaurant} />
                ))}

               {/* <ResCard resName="KFC" cusine="Burger, French Fries , Chicken Fires" imgLink="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/1/11/4df6c301-66e9-4b76-83cf-c44dfe08eaf7_975195.JPG"/> */}
            </div>
         </div>
   )
};
export default Body;