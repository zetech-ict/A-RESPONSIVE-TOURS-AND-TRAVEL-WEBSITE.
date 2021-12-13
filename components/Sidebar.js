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
<div className="flex flex-col items-center justify-center mb-4">
       <SidebarRow src={session.user.image} />
      <SidebarRow title={session.user.name}/>
      <h4 className="text-xs mt-0 text-white"> @{session.user.name}</h4>
</div >
<div className="flex flex-col items-center"> 
<div>

      <SidebarRow Icon={ ViewGridIcon} title="Home" />
      <SidebarRow Icon={GlobeIcon} title="Destinations" />
      <SidebarRow Icon={HeartIcon} title="Liked posts" />
      <SidebarRow Icon={PhotographIcon} title="Your Posts" />
      <SidebarRow Icon={UserGroupIcon} title="followers" />
      <SidebarRow Icon={MoonIcon} title="Dark Mode" />
      <div  className=" border-gray-500" onClick={() => signOut()} >
          <SidebarRow Icon={LogoutIcon} title="Log out" />

          </div>
</div>
</div>
    </div>
  );
}

export default Sidebar;
