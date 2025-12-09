import React from "react";
import ReactDOM from "react-dom/client";

// For multiple childs i.e siblings of the child we have to create array of the child 


// This looks more messy than the actual html :- so for this we use jsx not js
// const parent = React.createElement('div' ,{id:'parent'} ,
//     [React.createElement('div' ,{id:"child" , key:"child1"} ,
//       [ React.createElement('h1' ,{key:"h1-1"} , 'H1 from nested div') ,
//       React.createElement('h2' , {key:"h2-1"} ,'Hi I am  H2 ') ]) ,

//    React.createElement('div' ,{id:"child2" , key:"child2"} ,
//       [ React.createElement('h1' ,{key:"h1-2"} , 'H1 from nested div') ,
//       React.createElement('h2' , {key:"h2-2"} ,'Hi I am  H2 ') ]) ] );



// Day 3
// JSX => babel transpile to React.createElement => ReactElement (Object) => render => HTML element

// For multiple line we use (jsx1 jsx2);
const jsxHeading = (<h1 id="h1" className="heading">Hey I am jsx heading 🚀</h1>);
const root = ReactDOM.createRoot(document.getElementById('root'));  
root.render(jsxHeading);



// components :- everything in jsx is just a component 
// two types :- class based-> old way of writing code  & functional-> generally and mainly used | new way
// Functional comp : is just a function that returns some jsx code / elements
const number = 400;

const head = <h3>I am a heading element </h3>
const HeadingComponent = ()=>{
     return <div>
        {head}
        <Title/>
        {Title()} 
        <h2>{number + 200}</h2>
        <h1 id="h1">Hi I am a functional Heading component</h1>
     </div> 
};  // with return {} without return () // inside the parans{}in div we can execute any js code

// as soon as the div renders js code will be executed

// Or :- 
const Title = ()=> <h1>Hi I am a title component</h1> ; // we can also write without return just like arrow function / b/c comp. is just a function;
//  to render this we use 
root.render(<HeadingComponent/>);