import {createSlice} from "@reduxjs/toolkit";

interface userState {
    currentUser: any
}

const initialState: userState = {
    currentUser: null
}

const userSlice = createSlice({
    name: 'user slice',
    initialState,
    reducers: {
       setUser: (users, action) => {
           users.currentUser = action.payload;
       }
    }
});

export const {setUser} = userSlice.actions;

export const selectUsers = state => state.users;

export default userSlice.reducer;