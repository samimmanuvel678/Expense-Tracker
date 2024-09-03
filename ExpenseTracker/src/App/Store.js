import {configureStore} from "@reduxjs/toolkit"
import accountReducer from "../Features/Account/accountSlices"

export const store = configureStore({
    reducer:{
        userAccount:accountReducer
    }
})