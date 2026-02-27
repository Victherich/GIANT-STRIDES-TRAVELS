import React, { createContext } from 'react'

export const Context = createContext();



const ContextProvider = ({children})=>{

    const state = true

    const bankDetail = {
        accountName:"Huda Giant Stride Travel And Tours Ltd",
        Bank1:"GTB"
        
    }

    return(
        <Context.Provider value={{state}}>
            {children}
        </Context.Provider>
    )

}

export default ContextProvider