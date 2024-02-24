"use client";
import useSidebarState from "@/data/hooks/useSidebarState";

interface UserInfoProps {
  name: any;
  email: any;
}
export default function UserInfo(props: UserInfoProps) {
  const { isSidebarOpen } = useSidebarState();

  return (
    <span
      className={`${
        isSidebarOpen ? "flex" : "hidden"
      } flex-col gap-y-px text-white`}
    >
      <h5 className="font-bold text-sm">{props.name}</h5>
      <h6 className="font-light text-xs">{props.email}</h6>
    </span>
  );
}
