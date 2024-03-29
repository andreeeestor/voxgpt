import DashboardContainer from "@/components/template/DashboardContainer";
import Sidebar from "@/components/template/Sidebar";
import SidebarAction from "@/components/template/SidebarAction";
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
        <main className="p-5 pl-10 max-w-[1440px] mx-auto">
        {props.children}
        </main>
      </section>
    </DashboardContainer>
  );
}
