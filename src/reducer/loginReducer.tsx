
import {createSlice, PayloadAction} from '@reduxjs/toolkit'
interface ExampleState{
    privateLogin:boolean;
}
const initialState:ExampleState={
    privateLogin:false
};

const loginSlice=createSlice({
    name:'login',
    initialState,
    reducers:{
        login(state,action:PayloadAction<boolean>){
            state.privateLogin=action.payload;
        },
    },
});

export const {login} =loginSlice.actions;
export default loginSlice.reducer;
