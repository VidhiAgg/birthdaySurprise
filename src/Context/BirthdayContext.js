import React from 'react'
import { createContext } from 'react'
import { useState } from 'react';
export  const  BirthdayContext = createContext();
export const BirthdayContextProvider = ({children}) => {
    const [events,setEvents] = useState({
        showInputField : false,
        showInputText : false,
        showBallons : false
    })
  return (
   <BirthdayContext.Provider value = {{events}} >
    {children}
   </BirthdayContext.Provider>
  )
}

