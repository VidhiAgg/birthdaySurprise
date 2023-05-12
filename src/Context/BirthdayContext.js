import React from 'react'
import { createContext } from 'react'

export  const  BirthdayContext = createContext();
export const BirthdayContextProvider = ({children}) => {
   
  return (
   <BirthdayContext.Provider value = {{}} >
    {children}
   </BirthdayContext.Provider>
  )
}

