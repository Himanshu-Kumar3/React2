import UserClass from "./UserClass";
import User from "./User";


const About = ()=>{
    
    return (
        <div className="about">

            <h1>About</h1>
            <h2>Hey I am about...!</h2>
           <User  name ="Himanshu Kumar" location="Bokaro" linkdin="himanshu@123"/>
           <UserClass name ="Himanshu Kumar" location="Bokaro" linkdin="himanshu@123"/>
        </div>
    )
}
export default About;