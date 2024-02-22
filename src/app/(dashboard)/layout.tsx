import Sidebar from "@/components/Sidebar";
import { ReactNode } from "react";

interface DashboardLayoutProps {
  children: ReactNode;
}
export default function DashboardLayout(props: DashboardLayoutProps) {
  return (
    <main className="grid grid-cols-[280px_1fr] grid-rows-1 gap-5 p-5 min-h-screen">
      <Sidebar />
      <section className="bg-white rounded-2xl shadow-lg">
        {props.children}
      </section>
    </main>
  );
}
