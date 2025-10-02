"use client";
import Link from "next/link";
import { memo, useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-slate-800 text-white p-5">
      <div className="container mx-auto flex justify-between items-center">
        <h2 className="font-bold text-2xl">Logo</h2>

        <nav className="hidden md:flex gap-10">
          <Link className="font-semibold hover:text-black" href="/">
            Home
          </Link>
          <Link className="font-semibold hover:text-black" href="/product">
            Product
          </Link>
          <Link className="font-semibold hover:text-black" href="/users">
            Users
          </Link>
          <Link className="font-semibold hover:text-black" href="/login">
            Login
          </Link>
        </nav>

        <button className="md:hidden text-2xl " onClick={() => setOpen(!open)}>
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open && (
        <nav className="md:hidden mt-4 flex flex-col gap-4 text-center">
          <Link className="font-semibold hover:text-black" href="/">
            Home
          </Link>
          <Link className="font-semibold hover:text-black" href="/product">
            Product
          </Link>
          <Link className="font-semibold hover:text-black" href="/users">
            Users
          </Link>
          <Link className="font-semibold hover:text-black" href="/login">
            Login
          </Link>
        </nav>
      )}
    </header>
  );
};

export default memo(Header);
