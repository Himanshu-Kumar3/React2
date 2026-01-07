import { CDN_URL } from "../utils/constant";
const GetCardData = (props)=>{
// console.log("GETDATA" ,props);
const {data} = props;
console.log(data);
    return(
  <div>
    {data.map((card)=>{
        return <div key={card?.card?.info?.id} className="Menu-card-type flex justify-between relative  my-2 pt-4  border-gray-400 shadow-md border-b-2">
             <div className="title w-3/4 text-left">
                 <h2 className="font-bold text-md px-4">{card?.card?.info?.name} - ₹ {card?.card?.info?.price ? card?.card?.info?.price /100 : card?.card?.info?.defaultPrice/100}</h2>
                 <h3 className="font-bold px-4"> {card?.card?.info?.ratings?.aggregatedRating?.rating} </h3>
                 <p className="px-4 mt-2">{card?.card?.info?.description}</p>
             </div>
        
              <div className="discription h-52 w-3/12   items-center justify-center relative ">
                <img src={CDN_URL +card?.card?.info?.imageId } alt="Food_Image" className="h-35 w-60 absolute bottom-4 right-4 object-cover rounded-xl" ></img>
                <button className="bg-black text-white absolute z-1 bottom-0 text-center font-normal left-13 w-20 text-lg rounded-lg h-10">Add +</button>
              </div>
            </div>    
    })}
  </div>
    )
}
export default GetCardData;