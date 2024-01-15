import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    data: null,
    error: false
}

export const fetchTodo = createAsyncThunk('fetchTodo', async () => {

})


const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {

    }
})

export default userSlice.reducer