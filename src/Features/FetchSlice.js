import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



const fetchUsers = createAsyncThunk("users/fetchUsers",
    async () => {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users")
        return response.data
    }
)
const initialState = {
    loading: false,
    users: [],
    error: null,
}
const fetchUserSlice = createSlice({
    name: "users",
    initialState: initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state, action) => {
            state.loading = true;
        })
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.users = action.payload;
            state.loading = false;
        })
        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.error = action.error.message;
        })
    }
})
export {fetchUsers};
export default fetchUserSlice.reducer;
