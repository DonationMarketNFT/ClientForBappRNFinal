import React, {createContext, useReducer, useEffect, useState} from "react";
import AppReducer from "./AppReducer.js"

//create context
export const GlobalContext = createContext(initialState);

const initialState = {
    isLogin:false,
}
//provider components
const GlobalProvider = (props)=>{
    const [state, dispatch] = useReducer(AppReducer, initialState)
        // Watchlist Actions
    const changeLoginState = state =>{
        dispatch({type:"CHANGE_LOGIN_STATE", payload:state})
    }
    return(
        <GlobalContext.Provider value={{
            isLogin:state.isLogin,
            changeLoginState,
        }}>
            {props.children}
        </GlobalContext.Provider>
    )
} 
export default GlobalProvider
