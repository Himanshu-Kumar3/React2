import { use } from "react";
import { CDN_URL } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
// ->we have useSelector for reading -> useDispatch for modifying / writing

const GetCardData = (props)=>{
const {data} = props;  
const dispatch = useDispatch(); // function from the useDispatch() hook
// To update the store -> dispatch
const handleAddItem = (item)=>{
// console.log(item);
dispatch(addItem(item))  
// behind the scene when we dispatch an action -> addItem("Burger") ->
 /*
 {
  payload: "burger"
 } -> take it and put it as a second argument in cartSlice 
}
 */
}

    return(
  <div>
    {data.map((item)=>{
      // console.log(item);
        return <div key={item?.card?.info?.id} data-testid ="foodItems" className="Menu-card-type flex justify-between relative  my-2 pt-4  border-gray-400 shadow-md border-b-2">
             <div className="title w-3/4 text-left">
                 <h2 className="font-bold text-md px-4">{item?.card?.info?.name} - ₹ {item?.card?.info?.price ? item?.card?.info?.price /100 : item?.card?.info?.defaultPrice/100}</h2>
                 <h3 className="font-bold px-4"> {item?.card?.info?.ratings?.aggregatedRating?.rating} </h3>
                 <p className="px-4 mt-2">{item?.card?.info?.description}</p>
             </div>
        
              <div className="discription h-45 w-3/12   items-center justify-center relative ">
                <img src={CDN_URL + item?.card?.info?.imageId } alt="Food_Image" className="h-30 w-50 absolute bottom-4 right-4 object-cover rounded-xl" ></img>
                <button className="bg-black text-white absolute z-1 bottom-0 text-center font-normal left-13 w-20 text-lg rounded-lg h-10" onClick={()=>handleAddItem(item) }>Add +</button>
              </div>
            </div>    
    })}
  </div>
    )
}
export default GetCardData;