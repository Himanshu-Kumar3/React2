import { useSelector , useDispatch } from "react-redux";
import GetCardData from "./GetCardData";
import { clearCart } from "../utils/cartSlice";
const Cart = ()=>{


    // Should be in mind -> always subscribe/ select the specific portion of the store not the entire store like
    // const store = useSelector((store)=>store)
    // const items = store.cart.items : => works same but it is less efficient
    const items = useSelector((store)=>store.cart.items);
    console.log(items);
    
    const dispatch = useDispatch();
    const handleClearCart=()=>{
     dispatch(clearCart())
    }
    return (
        <div className="cart">
            <h1 className="name font-bold text-2xl text-center m-4 p-4">Cart</h1>
           
            <div className="items w-6/12 m-auto relative  ">
             <button className="clearCart h-10 w-20 text-xl rounded-lg bg-black text-white absolute right-2 z-1" onClick={handleClearCart}>Clear</button>    
              <GetCardData  data = {items}/>
            </div>

        </div>
    )
}
export default Cart;