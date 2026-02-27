import React, { createContext } from 'react'

export const Context = createContext();



const ContextProvider = ({children})=>{

    

    const bankDetails = {
        accountName:"Huda Giant Stride Travel And Tours Ltd",
        bank1:"GTB",
        account1:"3003606285",

        bank2:"POLARIS BANK",
        account2:"4092023120",

        bank3:"Dollar - GTB",
        account3:"3003606302"
        
    }

    return(
        <Context.Provider value={{bankDetails}}>
            {children}
        </Context.Provider>
    )

}

export default ContextProvider