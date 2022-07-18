import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../Features/FetchSlice";
import todoReducer from "../Features/todoSlice";


const store=configureStore({
    reducer:{
        todoReducer:todoReducer,
        usersReducer:userReducer
    }
});
export default store;