
import {CDN_URL} from "../utils/constant";


const ResCard =(props)=>{ // we can also do destructuring in place of props
   const {resData} = props ;
   // Destructure of the resData :-
   const {name , cuisines , avgRatingString , costForTwo , sla} = resData?.info;
   return(
      <div className="card p-2 m-4 w-60 h-95 bg-gray-100 flex  flex-col flex-wrap hover:bg-gray-200 hover: rounded-lg">
         <img className="card-img h-34 w-59 rounded-lg shadow-lg "alt="Card-img"src= {CDN_URL + resData.info.cloudinaryImageId}/>
         <h3 className="text-lg font-medium py-3">{name}</h3>
         <h4 className="font-medium"> {avgRatingString} stars</h4>
         <h5 className="text-base">{cuisines.join(", ")}</h5>
         <h5>{costForTwo}</h5>
         <h5>{sla.deliveryTime} minutes</h5>
      </div>
   )
}
export default ResCard;