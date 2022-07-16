import React, { createContext, useContext,useState } from 'react';


export const MyContext = createContext();


const MyProvider = ({ children }) => {
    
    let [search, setsearch]=useState("")


    return (
        <MyContext.Provider value={{ search, setsearch }} >
        {children}
        </MyContext.Provider>
    
    );
    




}


export default MyProvider;