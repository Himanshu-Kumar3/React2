import ResCard from "../components/ResCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

// Body :-
   // not using keys(Not acceptable) <<<<< index as key <<<<<<<<<<<<<<<<<<<<<<< unique id (Best practice :) )
const Body = ()=>{
    // Local useState Variable = superPowerFul state variable : for this we use : "useSatate() :- Hook"
    const [listOfRestaurant, setListOfRestaurant] = useState([]);
    const [filteredRestaurant , setFilteredRestaurant] = useState([]); // copy of original // for changes to be done in original data


    const [searchText , setSearchText] = useState("")


   //  useEffect():-
   useEffect(()=>{
      console.log("Use Effect");
      fetchData();
   }, []);


   const fetchData= async ()=>{
           const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.71700&lng=75.83370&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
           const json = await data.json();
           console.log(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
           setListOfRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
           setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
   }


 
   return listOfRestaurant.length === 0? (<Shimmer/>): (
      <div className="body">


         <div className="filter">
            <div className="searchContainer">
            <input 
             type="text"  
             className="search-box" 
             value={searchText} 
             onChange={(e)=>{
               setSearchText(e.target.value);
             }}>  
             </input>
            <button className="searchBtn" onClick={()=>{
               const filteredList = listOfRestaurant.filter((res)=>{
                  return res.info.name.toLowerCase().includes(searchText.toLowerCase());
                  }); 
               console.log(filteredList);
               setFilteredRestaurant(filteredList);
            }}> Search</button>
         </div>

         <button className="filter-btn" onClick ={()=>{
             const filterList = listOfRestaurant.filter((rest)=> rest.info.avgRating > 4);
             setFilteredRestaurant(filterList);
            }} >Top Rated Restaurant</button>
         </div>

         <div className="res-card-container">
            {/* everytime it iterate into the list element -> obj , pass that obj to the ResCard component as props -> argument and also key */}
            {filteredRestaurant.map((restaurant) =>(
                  <ResCard key={restaurant.info.id} resData = {restaurant} />
             ))}

             {/* <ResCard resName="KFC" cusine="Burger, French Fries , Chicken Fires" imgLink="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/1/11/4df6c301-66e9-4b76-83cf-c44dfe08eaf7_975195.JPG"/> */}
         </div>
      </div>
   )
};
export default Body;