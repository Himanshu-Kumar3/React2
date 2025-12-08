import React from "react";
import ReactDOM from "react-dom/client";

// For multiple childs i.e siblings of the child we have to create array of the child 


// This looks more messy than the actual html :- so for this we use jsx not js
const parent = React.createElement('div' ,{id:'parent'} ,
    [React.createElement('div' ,{id:"child" , key:"child1"} ,
      [ React.createElement('h1' ,{key:"h1-1"} , 'H1 from nested div') ,
      React.createElement('h2' , {key:"h2-1"} ,'Hi I am  H2 ') ]) ,

   React.createElement('div' ,{id:"child2" , key:"child2"} ,
      [ React.createElement('h1' ,{key:"h1-2"} , 'H1 from nested div') ,
      React.createElement('h2' , {key:"h2-2"} ,'Hi I am  H2 ') ]) ] );

const root = ReactDOM.createRoot(document.getElementById('root'));  
root.render(parent);