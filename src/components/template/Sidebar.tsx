import MemberProfile from "./MemberProfile";
import SidebarNav from "./SidebarNav";
import SidebarHeader from "./SidebarHeader";

export default function Sidebar() {
  return (
    <aside className={`w-full grid grid-cols-1 grid-rows-[50px_1fr_auto] h-full`}>
      {/* <section className="space-y-4"> */}
        <SidebarHeader />
        <SidebarNav />
      {/* </section> */}
      <MemberProfile />
    </aside>
  );
}
