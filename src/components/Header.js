import { LOGO_URL } from "../utils/constant";
import { useState } from "react";
// Head :-
const Header = ()=>{
  const [ChangeloginBtn , setChangeLoginBtn] = useState("Login");

    
  return (    
      <div className="head">
            <div className="logo">
              <img className="logo-img" alt="logo-img"src={LOGO_URL}/>
            </div>
            <div className="nav-links">
             <ul>
               <li>Home</li>
               <li>Contact us</li>
               <li>About</li>
               <li>Cart</li>
               <button className="login-btn" onClick={()=>{
                ChangeloginBtn== "Login" ? setChangeLoginBtn("Logout"):setChangeLoginBtn("Login")
               }}>{ChangeloginBtn}</button>
             </ul>
            </div>
         </div>
   );
  }
export default Header;   