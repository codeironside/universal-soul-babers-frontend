import React, {useState, createContext} from 'react'

export const SidebarContext = createContext()

const SidebarProvider = ({children}) => {

  // Sidebar State 
  return (
    <SidebarContext.Provider>
      {children}
    </SidebarContext.Provider>
  )
}

export default SidebarProvider