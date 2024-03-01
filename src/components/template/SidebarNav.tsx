"use client";
import useSidebarState from "@/data/hooks/useSidebarState";
import * as Lucide from "lucide-react";
import Link from "next/link";

interface SidebarNavProps {}

const links = [
  {
    name: "Chat",
    href: "/chat",
    icon: <Lucide.MessageSquareText className="text-blue-600" size={20} />,
  },
  {
    name: "Tours",
    href: "/tours",
    icon: <Lucide.Globe2 className="text-blue-600" size={20} />,
  },
  {
    name: "Perfil",
    href: "/profile",
    icon: <Lucide.UserCog className="text-blue-600" size={20} />,
  },
];

export default function SidebarNav(props: SidebarNavProps) {
  const { isSidebarOpen } = useSidebarState();
  return (
    <nav className="flex flex-col gap-y-2 menu pl-0 pt-6">
      <ul>
        {links.map((link) => (
          <li key={link.href} className={`${!isSidebarOpen && "tooltip tooltip-right tooltip-primary"}`} data-tip={link.name}>
            <Link href={link.href}>
              {link.icon}
              <span className={`${isSidebarOpen ? "block" : "hidden"}`} data-tip={link.name}>{link.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
