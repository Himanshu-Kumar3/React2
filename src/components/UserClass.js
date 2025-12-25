import React from "react";

class UserClass extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            userInfo:{
                name:"Dummy Name",
                location:"Default"
            }
        };
    }
    async componentDidMount(){
        // Used similiar as useEffect Hooks
        const data =await fetch("https://api.github.com/users/Himanshu-Kumar3") ;
        const json = await data.json();
        console.log(json);

    
        this.setState({
            userInfo : json
        })
        
    }

    componentDidUpdate(){
        console.log("Component Did Update");

    }
    componentWillUnmount(){
        console.log("Component Will unmount  ");
    }
    render(){
        const {name , location} = this.state.userInfo;
        return(
       <div className="user-card">
        <h3>{name}</h3>
        <h3>{location}</h3>
       </div>
    );
    }
}

export  default UserClass;