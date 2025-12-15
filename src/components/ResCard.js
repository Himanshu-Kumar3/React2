
import {CDN_URL} from "../utils/constant";


const ResCard =(props)=>{ // we can also do destructuring in place of props
   const {resData} = props ;
   // Destructure of the resData :-
   const {name , cuisines , avgRatingString , costForTwo , sla} = resData?.info;
   return(
      <div className="card">
         <img className="card-img"alt="Card-img"src= {CDN_URL + resData.info.cloudinaryImageId}/>
         <h3>{name}</h3>
         <h4> {avgRatingString} stars</h4>
         <h5>{cuisines.join(", ")}</h5>
         <h5>{costForTwo}</h5>
         <h5>{sla.deliveryTime} minutes</h5>
      </div>
   )
}
export default ResCard;