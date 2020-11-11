import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { type } from "os";
import loginReducer from './loginReducer'
const store=configureStore({
    reducer:{
        login:loginReducer,
    },
});
export default store;
const rootReducer=combineReducers(store);
export type RootState=ReturnType<typeof rootReducer>;
