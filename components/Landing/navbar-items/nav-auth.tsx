import { Button } from "@/components/ui/button";
import Link from "next/link";

export const NavAuth = () => {
  return (
    <>
      <div className="flex flex-col ml-8 space-x-8 md:flex-row items-center justify-center">
        <Link
          href={"/sign-in"}
          className="font-sans font-medium text-lg hover:bg-white p-2 rounded-lg"
        >
          Login
        </Link>
        <Button className="font-sans font-medium text-md">Sign up free</Button>
      </div>
    </>
  );
};
