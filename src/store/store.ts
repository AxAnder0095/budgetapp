import {configureStore} from "@reduxjs/toolkit";
// import loginReducer from "./loginSlice";
import userReducer from './userSlice'
import pageNameReducer from './pageNameSlice'

export const store  = configureStore({
    reducer: {
        users: userReducer,
        pageTitle: pageNameReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;