import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    users:[
        {
            id:"1",
            name:"UPI",
    
        },
        {
            id:"2",
            name:"Ready Made Cash"
        }
    ]
};
export const accountSlice = createSlice({
    name:"users",
    initialState,
    reducers:{
        addAccount:(state, action)=>{
            state.users=[...state.users,{id:Math.floor(Math.random()), name:action.payload}]
        }
    }
})

export const {addAccount}=accountSlice.actions;
export default accountSlice.reducer;