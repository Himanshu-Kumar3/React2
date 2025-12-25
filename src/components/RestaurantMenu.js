import { useState , useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import { MENU_URL } from "../utils/constant";

const RestaurantMenu = ()=>{

    const [resInfo , setResInfo] = useState(null);
    const {resId} = useParams();
    console.log(resId);

    const fetchData = async()=>{
        try{
        const data = await fetch(MENU_URL + resId);
        const json = await data.json();
        console.log(json?.data);
        setResInfo(json);
        }catch(er){
            console.log("ERROR: " , er);
        }   
     }
    

    useEffect(()=>{
     fetchData();
    },[]);

  
     
    if (resInfo === null) return <Shimmer/>;

     const {name , cuisines } = resInfo?.data.cards[2]?.card?.card?.info;
     console.log(resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card);
     const card = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
     
    //  Get the itemCard :-
    const {itemCards} = card || {};
    const finalItemCards = itemCards ?? card?.categories?.[0]?.itemCards;
    console.log(finalItemCards);
 
    return (
        <div className="restauarant-menu">
           <h2>{name}</h2>
           <h3>{cuisines.join(" , ")}</h3>
           <ul>
            {finalItemCards.map((item)=> <li key={item?.card?.info?.id}>{item?.card?.info?.name} - Rs.{item?.card?.info?.price/100 || item?.card?.info?.defaultPrice/100}</li> )}
           </ul>
        </div>
    )
}

export default RestaurantMenu;