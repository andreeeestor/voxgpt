"use client";
import useSidebarState from "@/data/hooks/useSidebarState";

export default function SidebarAction() {
  const { isSidebarOpen, setIsSidebarOpen } = useSidebarState();

  const toggleSidebarState = () => {
    if (isSidebarOpen) {
      setIsSidebarOpen(false);
    } else {
      setIsSidebarOpen(true);
    }
  };

  return (
    <div className="fixed top-1/2 translate-x-4 z-40">
      <div
        className="flex flex-col group transition-all cursor-pointer tooltip tooltip-right"
        data-tip={`${isSidebarOpen ? "Fechar" : "Abrir"} Menu`}
        onClick={toggleSidebarState}
      >
        <span
          className={`w-[5px] h-[14px] rounded-t-full bg-slate-500 ${
            isSidebarOpen
              ? "group-hover:rotate-[15deg]"
              : "group-hover:rotate-[-15deg]"
          } group-hover:translate-y-px transition-all`}
        ></span>
        <span
          className={`w-[5px] h-[14px] rounded-b-full bg-slate-500 ${
            isSidebarOpen
              ? "group-hover:rotate-[-15deg]"
              : "group-hover:rotate-[15deg]"
          }  group-hover:-translate-y-px transition-all`}
        ></span>
      </div>
    </div>
  );
}
