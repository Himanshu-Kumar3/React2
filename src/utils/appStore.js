import { configureStore } from "@reduxjs/toolkit"; // import from @redux/toolkit -> core redux thing 
import cartReducer from "./cartSlice";
const appStore = configureStore({
    //  This reducer is responsible for modifying the appStore -> one big reducer combination of slice reducers -> 
    reducer: {
        cart : cartReducer,
        // user : userReducer
    }
});

export default appStore;