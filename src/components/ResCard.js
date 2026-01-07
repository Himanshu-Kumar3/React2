
import { useContext } from "react";
import {CDN_URL} from "../utils/constant";
import UserContext from "../utils/UserContext";


const ResCard =(props)=>{ // we can also do destructuring in place of props
   const {resData} = props ;
   // Destructure of the resData :-
   const {name , cuisines , avgRatingString , costForTwo , sla} = resData?.info;

   const {loggedInUser} = useContext(UserContext);
   return(
      <div className="ResCard p-2 m-4 w-70 h-95 bg-gray-100 flex  flex-col flex-wrap hover:bg-gray-200 hover: rounded-lg">
         <img className="card-img h-41 w-69 rounded-lg shadow-lg   to-transparent"alt="Card-img"src= {CDN_URL + resData.info.cloudinaryImageId}/>
         <h3 className="text-lg font-medium py-3">{name}</h3>
         <h4 className="font-medium"> {avgRatingString} stars</h4>
         <h5 className="text-base">{cuisines.join(", ")}</h5>
         <h5>{costForTwo}</h5>
         <h5>{sla.deliveryTime} minutes</h5>
          <h5> userLog : {loggedInUser}</h5>
      </div>
   )
};

export const withDiscountLabel = (ResCard)=>{

   return (props)=>{
      // console.log("Nested: ",props);
   const {resData} = props ;
      const {aggregatedDiscountInfoV3 : {header , subHeader}} = resData?.info
     return(
      <div className="withLabelCard relative ">
         <label className=" text-2xl text-white w-66 rounded-sm h-9 text-center bg-black/20 font-bold absolute top-34 left-1/2 -translate-x-1/2  bg-linear-to-t from-black/60   "> {header} {subHeader}</label>
         <ResCard {...props}/>
      </div>
     );
   }
};


export default ResCard;


