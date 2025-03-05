import {createSlice} from "@reduxjs/toolkit";

interface pageNameState {
    pageTitle: string;
}

const initialState: pageNameState = {
    pageTitle: ''
}

const pageNameSlice = createSlice({
    name: 'page title',
    initialState,
    reducers: {
        setPageTitle: (state, action) => {
            state.pageTitle = action.payload;
        }
    }
});

export const {setPageTitle} = pageNameSlice.actions;
export default pageNameSlice.reducer;