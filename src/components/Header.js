import { LOGO_URL } from "../utils/constant";
import { useState  , useContext} from "react";
import {Link} from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
// Head :-
const Header = ()=>{
  const [ChangeloginBtn , setChangeLoginBtn] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const {loggedInUser} = useContext(UserContext);  // 



  // Selector :-  subscribing to the store using selector & gives access to the store -> selector is react hook at the end of the day
  const cartItems = useSelector((store)=>store.cart.items); // defines which portion of the store we access / subscribe
  
    
  return (    
      <div className=" header h-24  sticky top-0 flex justify-between bg-green-50 shadow-lg z-2">
            <div className="logo px-4">
              <img className=" w-24  h-24" alt="logo-img"src={LOGO_URL}/>
            </div>
            <div className="nav-links">
             <ul className="flex p-4 m-4 items-center text-xl">
              <li className="px-4">
                Online Status : {onlineStatus ? "🟢":"🔴"}
              </li>
              <li className="nav-link px-4">
                <Link to="/" >Home</Link>
              </li>
              <li className="nav-link px-4">
                <Link to="/contact" >Contact us</Link>
              </li>
              <li className="nav-link px-4">
                <Link to="/about" >About</Link>
              </li>
              <li className="px-4 font-bold">
               <Link to="/cart">Cart- ({cartItems.length} items)</Link> 
              </li>
              <li className="nav-link px-4">
                <Link to="/grocery" >Grocery</Link>
              </li>
               <button className="login-btn" onClick={()=>{
                ChangeloginBtn== "Login" ? setChangeLoginBtn("Logout"):setChangeLoginBtn("Login")
               }}>{ChangeloginBtn}</button>

               <li className="nav-link px-4">
                <Link to="/grocery" >{loggedInUser}</Link>
              </li>
             </ul>
            </div>
         </div>
   );
  }
export default Header;   