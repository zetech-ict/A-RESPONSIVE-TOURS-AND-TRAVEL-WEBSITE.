import { signOut, useSession } from "next-auth/client";
import Image from "next/image";

function Header() {
    const [session] = useSession();
    return (
<div className = "flex justify-between h-10  items-center shadow-md bg-indigo-500"> 
    <div className="flex ml-4">
        <div className="h-8 w-8 bg-purple-300 rounded-lg flex items-center justify-center text-white font-bold"> AS</div>
        <h1 className="text-white lg:text-xl px-2 text-lg font-bold ">AfriSafari</h1>
    </div>
    <div className="flex items-center sm:space-x-2 justify- mr-4">
       <Image
          onClick={() => signOut()}
          className="rounded-full cursor-pointer"
          src={session.user.image}
          width="30"
          height="30"
          layout="fixed"
        /> 
        <p className="hidden lg:inline-flex text-sm whitespace-nowrap font-semibold pr-3 text-white">
          {session.user.name}
        </p>
    </div>
</div>
)
}

export default Header
