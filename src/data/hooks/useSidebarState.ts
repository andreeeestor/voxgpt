import { useContext } from "react";
import { SidebarContext } from "../contexts/SidebarContext";

const useSidebarState = () => useContext(SidebarContext);

export default useSidebarState