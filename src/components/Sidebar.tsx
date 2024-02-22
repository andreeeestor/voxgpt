import * as Lucide from "lucide-react";
import Link from "next/link";
import MemberProfile from "./MemberProfile";

interface SidebarProps {}

const links = [
  {
    name: "Chat",
    href: "/chat",
  },
  {
    name: "Tours",
    href: "/tours",
  },
  {
    name: "Perfil",
    href: "/profile",
  },
];

export default function Sidebar(props: SidebarProps) {
  return (
    <aside className="w-full flex flex-col justify-between h-full">
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-x-2">
          <Lucide.Bot className="text-blue-600" size={40} />
          <h1 className="text-xl text-white font-semibold">VoxGPT</h1>
        </div>
        <Lucide.Sidebar />
      </header>
      <nav className="flex flex-col gap-y-2 menu">
        <ul>
        {links.map((link) => (
            <li key={link.href}>
            <Link href={link.href}>{link.name}</Link>
            </li>
        ))}
        </ul>
      </nav>
      <MemberProfile />
    </aside>
  );
}
