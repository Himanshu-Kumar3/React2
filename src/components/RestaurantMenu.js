
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestautantMenu";
import RestaurantCategory from "./RestaurantCategory";


const RestaurantMenu = ()=>{
    const {resId} = useParams();
    const resInfo = useRestaurantMenu(resId);

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
        <div className="restauarant-menu">
           <h2>{name}</h2>
           <h3>{cuisines.join(" , ")}</h3>
           {/* {resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.map()} */}

           {categories.map((category)=>(<RestaurantCategory key={category?.card?.card?.categoryId} data={category?.card?.card}/>))}

           <ul>
            {finalItemCards.map((item)=> <li key={item?.card?.info?.id}>{item?.card?.info?.name} - Rs.{item?.card?.info?.price/100 || item?.card?.info?.defaultPrice/100}</li> )}
           </ul>
        </div>
    )
}

export default RestaurantMenu;