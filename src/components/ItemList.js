import { ITEM_TYPE ,NESTED_ITEM  , CDN_URL} from "../utils/constant";
import RestaurantCategory from "./RestaurantCategory";
import {useState} from "react";
import GetCardData from "./GetCardData";


const ItemList = (props) =>{


  const {itemData} = props;
  const type = itemData?.["@type"];

 const [showItemsById , setShowItemsById] = useState(null);
 
 const handleClick = (categoryId)=>{
          setShowItemsById(prev => prev === categoryId ? null : categoryId);
          console.log(showItemsById);
      }
  if (type === ITEM_TYPE){
    // console.log("Item cards",itemData?.itemCards);
    return(
        
        <div>  
            
        <GetCardData data={itemData?.itemCards}/>
        </div>
    )} 
    if (type === NESTED_ITEM){
        // console.log();
        return (
            <div>
                {itemData?.categories.map((category)=>{
                    return(
                        <div key={category.categoryId} className="nested-menu text-left border-b border-gray-500 z-1">
                            <div className="heading flex justify-between cursor-pointer py-2"  onClick={()=>handleClick(category.categoryId)}>
                                <span className="font-bold py-2 ">{category.title} ({category?.itemCards.length})</span>
                                <span>{showItemsById === category.categoryId ?  "▼":"▲" }</span>
                            </div>
                             {showItemsById === category.categoryId && (<GetCardData  data={category?.itemCards}/>)}
                        </div>
                    )

                })}
              
            </div>
        )
    }
  

}
export default ItemList;