import DashboardContainer from "@/components/DashboardContainer";
import Sidebar from "@/components/Sidebar";
import SidebarAction from "@/components/SidebarAction";
import { ReactNode } from "react";

interface DashboardLayoutProps {
  children: ReactNode;
}
export default function DashboardLayout(props: DashboardLayoutProps) {
  return (
    <DashboardContainer
    >
      <Sidebar />
      <section className="rounded-2xl shadow-lg overflow-hidden overflow-y-scroll h-full bg-neutral">
        <SidebarAction />
        {props.children}
      </section>
    </DashboardContainer>
  );
}
