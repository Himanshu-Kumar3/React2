import React from "react";

class UserClass extends React.Component {
    constructor(props){
        super(props);


        this.state ={
            count:0,
            count2:2
        };
    }
    render(){
        const {count , count2} = this.state;
        return(
       <div className="user-card">
        <h3>count : {count}</h3>
         <h3>count : {count2}</h3>

         <button className="btn-update " onClick={ ()=>{
            // Never update the State variable directly

            // It only updates / change the var which in inside the seState and doesn't touch the remaining
            this.setState({
                count:count+1
            });
 
            }
         }>
            Increase Button
         </button>
        <h3>{this.props.name}</h3>
        <h3>{this.props.location}</h3>
        <h3>{this.props.linkdin}</h3>
       </div>
    );
    }
}

export  default UserClass;