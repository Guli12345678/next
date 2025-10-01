"use client";
import { useRouter } from "next/navigation";
import React from "react";

const Navigation = () => {
  const router = useRouter();

  return (
    <div className="flex gap-5 mt-5 justify-center mb-6">
      <button
        className="text-white bg-black  hover:bg-gray-600 w-[100px] h-[40px]"
        onClick={() => router.push("/")}
      >
        Go Home
      </button>
      <button
        className="text-white bg-gray-600 w-[100px] h-[40px]"
        onClick={() => router.back()}
      >
        Go Back
      </button>
    </div>
  );
};

export default Navigation;
