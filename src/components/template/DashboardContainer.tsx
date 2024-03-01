"use client";

import useSidebarState from "@/data/hooks/useSidebarState";
import { ReactNode } from "react";

interface DashboardContainerProps {
  children: ReactNode;
}
export default function DashboardContainer(props: DashboardContainerProps) {
  const { isSidebarOpen, setIsSidebarOpen } = useSidebarState();

  return (
    <main
      className={`grid ${
        isSidebarOpen
          ? "grid-cols-[280px_1fr] gap-5 p-5"
          : "grid-cols-[50px_1fr] gap-3 p-3"
      } grid-rows-1 h-screen overflow-hidden transition-all`}
    >
      {props.children}
    </main>
  );
}
