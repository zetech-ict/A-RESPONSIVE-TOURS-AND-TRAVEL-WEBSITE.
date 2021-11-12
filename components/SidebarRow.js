import Image from "next/image";
import React from "react";

function SidebarRow({ src, Icon, title }) {
  return (
    <div className="flex items-center space-x-2 p-4 hover:bg-gray-500 rounded-xl cursor-pointer">
      {src && (
        <Image
          className="rounded-full"
          src={src}
          width={30}
          height={30}
          layout="fixed"
        />
      )}
      {Icon && <Icon className="h-6 w-6 text-blue-100" />}
      <p className="hidden sm:inline-flex font-medium text-white">{title}</p>
    </div>
  );
}

export default SidebarRow;
