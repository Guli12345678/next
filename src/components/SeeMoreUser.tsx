"use client";
import { useRouter } from "next/navigation";
import React from "react";

const SeeMore = ({ id }: { id: number }) => {
  const router = useRouter();
  return (
    <button
      className="w-30 h-10 border mt-5 bg-black text-white hover:text-black hover:bg-white transition duration-500 ease-in-out   rounded-[10px]"
      onClick={() => router.push(`/users/${id}`)}
    >
      SeeMore
    </button>
  );
};

export default SeeMore;
