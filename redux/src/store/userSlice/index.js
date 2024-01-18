import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    list: [],
};

const userSlice = createSlice({
    name: 'users',
    initialState: initialState,
    reducers: {
        addUsers: (state, action) => {
            state.list = action.payload;
        },
        deleteExactUser: (state, action) => {
            const {id} = action.payload;
            state.list = state.list.filter(user => user.id !== id)
        }
    }
})

export const {addUsers, deleteExactUser} = userSlice.actions;
export default userSlice.reducer;