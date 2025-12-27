
const RestaurantCategory = (categories)=>{

    console.log(categories);
    return(
        <div className="mx-auto w-6/12  bg-gray-200  ">
            <div className="flex justify-between m-2 p-2  border-gray-200 border-b-2 shadow-lg">
                <span>{categories?.data?.title} ({categories?.data?.itemCards ? categories?.data?.itemCards.length : categories?.data?.categories.length})</span>
                <span>⬇️</span>
            </div>

            
            
            
        </div>
    )
}
export default RestaurantCategory;