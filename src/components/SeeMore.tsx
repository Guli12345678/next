"use client";
import { useRouter } from "next/navigation";
import React from "react";

const SeeMore = ({ id }: { id: number }) => {
  const router = useRouter();
  return (
    <button
      className="w-30 h-10 border mt-5 bg-slate-800 text-white hover:text-black hover:bg-white transition duration-500 ease-in-out   rounded-[10px]"
      onClick={() => router.push(`/product/${id}`)}
    >
      See More
    </button>
  );
};

export default SeeMore;
