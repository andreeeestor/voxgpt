"use client"
import useSidebarState from "@/data/hooks/useSidebarState";
import ThemeToggle from "./ThemeToggle";
import * as Lucide from "lucide-react";

interface SidebarHeaderProps {

}
export default function SidebarHeader(props : SidebarHeaderProps){
    const { isSidebarOpen } = useSidebarState()
    return(
        <header className={`flex items-center ${isSidebarOpen ? "justify-between" : "justify-center"}`}>
          <div className={`flex items-center gap-x-2`}>
            <Lucide.Bot className={`text-blue-600 `} size={40} />
            <h1 className={`${isSidebarOpen ? "block" : "hidden"} text-xl font-semibold`}>VoxGPT</h1>
          </div>
          <ThemeToggle onHeader={isSidebarOpen} />
        </header>
    )
}