import { LOGO_URL } from "../utils/constant";
// Head :-
const Header = ()=>
     (
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
             </ul>
            </div>
         </div>
   );

export default Header;   