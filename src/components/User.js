import {useState} from "react";
const User = (props)=>{
    const {name , location, linkdin} = props;
    const [count] = useState(0)
    const [ count1] = useState(1);

    return(
       <div className="user-card">
         <h3>count : {count}</h3>
         <h3>count : {count1}</h3>
         <h3>{name}</h3>
         <h3>{location}</h3>
         <h3>{linkdin}</h3>
       </div>
    );
}

export  default User;