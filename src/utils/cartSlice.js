import { createSlice , current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState :{
        items : []
    },
    // contains many reducer functions
    reducers:{

        // Behind the Scene
        /*
        {
          payload : "burger" 
        }
        */
        // These are the reducer function but mapped as a action
        addItem: (state , action)=>{
            // In Vanilla(older) REDUX => DON'T MUTATE THE STATE i.e MUTATING PROHABITAED  , returning was mandatory
            // const newState = [...state];
            // newState.items.push(action.payload)
            // return newState


            // REDUX Toolkit => MUTATING  is mandatory and no need to return -> it handles automagically
           state.items.push(action.payload); // here-> burger inplace of action.payload
        } ,
        removeItem :(state )=>{
            state.items.pop();
        },

        // Original state = {item:["pizza"]}
        clearCart : (state)=>{ // since the state here is a local var that refers the original state
            // state = []  it simply makes the local state var empty but doesn't modify/ change the original state
            console.log(current(state)); // to log the original state -> b/c
            // console.log(state); // logs as proxy object
            state.items.length = 0;  // original state = {item:[]}

            // Or we can do 
            // return {item:[]}  => works fine b/c it returns the value -> modifies the original state
        }
    }
})

export const {addItem , removeItem , clearCart} = cartSlice.actions;
export default cartSlice.reducer;