import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../Features/todoSlice";


const store=configureStore({
    reducer:{
        todoReducer:todoReducer
    }
});
export default store;