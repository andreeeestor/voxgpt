import * as Lucide from "lucide-react";
import Link from "next/link";
import MemberProfile from "./MemberProfile";
import ThemeToggle from "./ThemeToggle";

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

export default function Sidebar() {
  return (
    <aside className={`w-full grid grid-cols-1 grid-rows-[50px_1fr_auto] h-full`}>
      {/* <section className="space-y-4"> */}
        <header className="flex items-center justify-between">
          <div className="flex items-center gap-x-2">
            <Lucide.Bot className="text-blue-600" size={40} />
            <h1 className="text-xl text-white font-semibold">VoxGPT</h1>
          </div>
          <ThemeToggle />
        </header>
        <nav className="flex flex-col gap-y-2 menu pl-0 pt-6">
          <ul>
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.icon}{link.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      {/* </section> */}
      <MemberProfile />
    </aside>
  );
}
