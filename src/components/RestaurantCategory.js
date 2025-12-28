import {  ITEM_TYPE , NESTED_ITEM } from "../utils/constant";
import ItemList from "./ItemList";
import {useState} from "react";

const RestaurantCategory = (props , )=>{
    // console.log("Sh" ,props.showItems);
    const {data , showItems ,setShowIndex} = props;
    const type = data?.["@type"];
    // const [showItems , setShowItems] = useState(false);
    const handleClick = ()=>{
        // setShowItems(!showItems);
        setShowIndex();

    }
  
    return(
        <div className="mx-auto w-6/12  bg-gray-100  shadow-lg ">
            <div className=" m-2 p-2  border-gray-200 border-b-2 ">
             <div className="flex justify-between font-bold text-xl my-4 cursor-pointer " onClick={handleClick}>
                <span>{data?.title} ({data?.itemCards ? data?.itemCards.length : data?.categories.length})</span>
                <span>⬇️</span>
             </div>
              {showItems && <ItemList itemData = {data}/>}
            </div>       
        </div>
    )
}
export default RestaurantCategory;