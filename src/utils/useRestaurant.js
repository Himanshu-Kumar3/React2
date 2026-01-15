import { useEffect  , useState} from "react";
import { RESTAURANT_URL } from "./constant";


const useRestaurant = ()=>{
    const [restaurantInfo , setRestaurantInfo] = useState([]);

    useEffect(()=>{
        getRestaurantInfo();
        },[]);
   
    const getRestaurantInfo = async()=>{
  
        const data = await fetch(RESTAURANT_URL);
        const json = await data.json();
        // console.log(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setRestaurantInfo(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    }

    return restaurantInfo ;
}

export default useRestaurant;