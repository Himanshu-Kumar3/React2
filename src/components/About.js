import UserClass from "./UserClass";
import User from "./User";
import React from "react";



class About extends React.Component{
    constructor(props){
        super(props);
        
    }
    componentDidMount(){
        console.log("Parent componentDidMount");
    }
    render(){
        return(
        
        <div className="about">

            <h1>About</h1>
            <h2>Hey I am about...!</h2>
           <User  name ="Himanshu Kumar" location="Bokaro" linkdin="himanshu@123"/>
           <UserClass name ="First" location="Bokaro" linkdin="himanshu@123"/>
           <UserClass name ="Second" location="Bokaro" linkdin="himanshu@123"/>
        </div>
        )
    }
}
export default About;


/* 
- Parent Constructor 
- Parent Render - called
  - First Child Constructor
  - First Child render

  - Second Child Constructor
  - Second Child render

 < DOM UPDATED - > IN SINGLE BATCH>
  - First Child ComponentDidMount
  - Second Child ComponentDidMount

- Parent ComponentDidMount 

*/