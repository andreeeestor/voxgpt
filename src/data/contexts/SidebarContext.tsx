"use client"
import { createContext, ReactNode, useState } from "react";

interface SidebarProviderProps {
    children: ReactNode
}

interface SidebarContextData {
    isSidebarOpen: boolean;
    setIsSidebarOpen: (isSidebarOpen: boolean) => void;
}

export const SidebarContext = createContext({} as SidebarContextData)

export default function SidebarProvider(props : SidebarProviderProps){
    const [isSidebarOpen, setIsSidebarOpen] = useState(true)

    return(
        <SidebarContext.Provider value={{isSidebarOpen, setIsSidebarOpen}}>
        {props.children}
        </SidebarContext.Provider>
    )
}