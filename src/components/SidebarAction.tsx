'use client'
import { useState } from "react";

export default function SidebarAction() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="absolute left-0 top-1/2 translate-x-4">
      <div className="flex flex-col group transition-all cursor-pointer">
        <span className="w-[5px] h-[14px] rounded-t-full bg-slate-500 group-hover:rotate-[15deg] group-hover:translate-y-px transition-all duration-200"></span>
        <span className="w-[5px] h-[14px] rounded-b-full bg-slate-500 group-hover:rotate-[-15deg] group-hover:-translate-y-px transition-all duration-200"></span>
      </div>
    </div>
  );
}
