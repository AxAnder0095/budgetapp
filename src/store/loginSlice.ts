import {createSlice} from "@reduxjs/toolkit";

interface loginState {
    email: string;
    password: string;
}

const initialState: loginState = {
    email: '',
    password: ''
}

const loginSlice = createSlice({
    name: 'login data',
    initialState,
    reducers: {
        setEmail: (state, action) => {
            state.email = action.payload;
        },
        setPassword: (state, action) => {
            state.password = action.payload;
        }
    }
});

export const {setEmail, setPassword} = loginSlice.actions;
export default loginSlice.reducer;