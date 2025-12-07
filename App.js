const h1 = React.createElement('h1' , {id:'h1' , xyz:'xyz'} , 'Hello with react');
console.log(h1);  // returns object

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(h1);



// For nested 
/* <div>
     <div id="child1"> 
        <h1> </h1>
        <h2> </h2>
     </div> 
     <div id="child2"> 
        <h1> </h1>
        <h2> </h2>
     </div>  
   </div>
*/


// For multiple childs i.e siblings of the child we have to create array of the child 


// This looks more messy than the actual html :- so for this we use jsx not js
const parent = React.createElement('div' ,{id:'parent'} ,
    [React.createElement('div' ,{id:'child'} ,
      [ React.createElement('h1' ,{} , 'H1 from nested div') ,
      React.createElement('h2' , {} ,'Hi I am  H2 ') ]) ,
   React.createElement('div' ,{id:'child2'} ,
      [ React.createElement('h1' ,{} , 'H1 from nested div') ,
      React.createElement('h2' , {} ,'Hi I am  H2 ') ]) ] );
root.render(parent)