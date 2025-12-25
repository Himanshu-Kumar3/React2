import { LOGO_URL } from "../utils/constant";
import { useState } from "react";
import {Link} from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
// Head :-
const Header = ()=>{
  const [ChangeloginBtn , setChangeLoginBtn] = useState("Login");
  const onlineStatus = useOnlineStatus();

    
  return (    
      <div className="head">
            <div className="logo">
              <img className="logo-img" alt="logo-img"src={LOGO_URL}/>
            </div>
            <div className="nav-links">
             <ul>
              <li>Online Status : {onlineStatus ? "🟢":"🔴"}</li>
               <li><Link to="/" className="nav-link">Home</Link></li>
               <li><Link to="/contact" className="nav-link">Contact us</Link></li>
               <li><Link to="/about" className="nav-link">About</Link></li>
               <li>Cart</li>
               <li><Link to="/grocery" className="nav-link">Grocery</Link></li>
               <button className="login-btn" onClick={()=>{
                ChangeloginBtn== "Login" ? setChangeLoginBtn("Logout"):setChangeLoginBtn("Login")
               }}>{ChangeloginBtn}</button>
             </ul>
            </div>
         </div>
   );
  }
export default Header;   