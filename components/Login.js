import { signIn } from "next-auth/client";
import Image from "next/image";

function Login() {
  return (
  <div className="flex items-center justify-center ">

    <div className=" flex flex-col items-center justify-center h-2/3 w-3/4">
      <Image
        src="https://links.papareact.com/t4i"
        height={400}
        width={400}
        objectFit="contain"
      />
      <h1
        className="p-2 bg-blue-500 rounded-lg text-white text-center w-1/6 cursor-pointer"
        onClick={signIn}
      >
        Login with Facebook
      </h1>
    </div>

  </div>
  );
}

export default Login;
