import { useEffect  , useState} from "react";
import { MENU_URL } from "./constant";

const useRestaurantMenu = (resId)=>{

    const [resInfo , setResInfo] = useState(null);
    useEffect(()=>{
      fetchData();
    },[]);

    const fetchData = async ()=>{
     
      try{
        const data = await fetch(MENU_URL + resId);
        const json = await data.json();
        console.log(json?.data);
        setResInfo(json);
        }catch(er){
            console.log("ERROR: " , er);
        } 
    }

    return resInfo
}

export default useRestaurantMenu; 