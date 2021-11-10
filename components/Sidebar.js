import {
  LogoutIcon,
  HeartIcon,
  UserGroupIcon,
} from "@heroicons/react/outline";
import {
  GlobeIcon,
  MoonIcon,
  PhotographIcon,
  ViewGridIcon,
} from "@heroicons/react/solid";
import { useSession } from "next-auth/client";
import React from "react";
import SidebarRow from "./SidebarRow";
import { signOut} from "next-auth/client";



function Sidebar() {
  const [session, loading] = useSession();

  return (
    <div className="p-2 mt-10 max-w-[600px] xl:min-w-[300px]">
      <SidebarRow src={session.user.image} title={session.user.name} />
      <SidebarRow Icon={ ViewGridIcon} title="Home" />
      <SidebarRow Icon={GlobeIcon} title="Destinations" />
      <SidebarRow Icon={HeartIcon} title="Liked posts" />
      <SidebarRow Icon={PhotographIcon} title="Your Posts" />
      <SidebarRow Icon={UserGroupIcon} title="followers" />
      <SidebarRow Icon={MoonIcon} title="Dark Mode" />
      <div   onClick={() => signOut()} >
          <SidebarRow Icon={LogoutIcon} title="Log out" />

          </div>
    </div>
  );
}

export default Sidebar;
