import Link from "next/link";
import { memo } from "react";

const Header = () => {
  return (
    <div className="bg-slate-800 flex items-center gap-4 p-5">
      <div className="container flex justify-between text-white">
        <h2 className="font-bold text-2xl">Logo</h2>
        <div className="flex gap-20  ">
          <Link className="font-semibold hover:text-black" href={"/"}>
            Home
          </Link>
          <Link className="hover:text-black font-semibold" href={"/product"}>
            Product
          </Link>
          <Link className="hover:text-black font-semibold" href={"/users"}>
            Users
          </Link>
          <Link className="hover:text-black font-semibold" href={"/login"}>
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default memo(Header);
