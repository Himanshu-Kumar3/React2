
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestautantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";


const RestaurantMenu = ()=>{
    const {resId} = useParams();
    const resInfo = useRestaurantMenu(resId);
    const [showIndex , setShowIndex] = useState(0);
    console.log("ShowIndex" ,showIndex);

    if (resInfo === null) return <Shimmer/>;

     const {name , cuisines } = resInfo?.data.cards[2]?.card?.card?.info;
     console.log(resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
     const card = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
     
    //  Get the itemCard :-
    const {itemCards} = card || {};
    const finalItemCards = itemCards ?? card?.categories?.[0]?.itemCards;
    console.log(finalItemCards);



    const allowedType = ["type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory" , "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"];
    const categories = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((category)=>{
        return allowedType.includes(category?.card?.card?.["@type"]);
    });
    console.log(categories);
 
    return (
        <div className="restauarant-menu mx-auto text-center">
           <h2 className="my-6 font-bold text-3xl ">{name}</h2>
           <h3 className="my-4">{cuisines.join(" , ")}</h3>
           {/* {resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.map()} */}

           {categories.map((category, index)=>{
            console.log(index);
            return <RestaurantCategory
            key={category?.card?.card?.categoryId} data={category?.card?.card} 
           showItems ={index === showIndex ? true : false}
           setShowIndex={()=>setShowIndex(index)}/>})}

           
        </div>
    )
}

export default RestaurantMenu;