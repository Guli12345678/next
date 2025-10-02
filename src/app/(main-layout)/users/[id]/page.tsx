import { Metadata } from "next";
import { notFound } from "next/navigation";
import React from "react";
import SeeMore from "../../../../components/SeeMore";

type Props = {
  params: Promise<{ id: string }>;
};

// SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;

  const user = await fetch(`https://fakestoreapi.com/users/${id}`).then((res) =>
    res.json()
  );

  return {
    title: user.name.firstname,
  };
}

// SEO
export async function generateStaticParams() {
  const data = await fetch("https://fakestoreapi.com/users").then((res) =>
    res.json()
  );
  return data?.map((pro: any) => ({
    id: pro.id.toString(),
  }));
}

// SEO
const DetailUser = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  const response = await fetch(`https://fakestoreapi.com/users/${id}`, {
    next: { revalidate: 60 },
  });
  if (!response.ok) {
    notFound();
  }
  const data = await response.json();

  return (
    <div className="flex container h-screen items-center">
      <div
        className="shadow-2xl border-t rounded-[30px] p-7 transform transition duration-300 hover:scale-105 mx-auto w-full flex flex-row h-[300px]"
        key={data.id}
      >
        <div className="w-full mt-10 ">
          <div className="gap-2 text-center">
            <b className="">{data.name.firstname.toUpperCase()}</b>

            <b>{data.name.lastname.toUpperCase()}</b>
          </div>
          <br />
          <div className="grid md:grid-cols-2 grid-cols-1 place-items-center ">
            <h3 className="flex gap-2">
              <b>Address:</b> {data?.address.city.toUpperCase()}
            </h3>

            <h3 className="flex gap-2">
              <b>Email: </b>
              {data?.email}
            </h3>

            <h3 className="flex gap-2">
              <b>Username: </b>
              {data?.username}
            </h3>
            <h3 className="flex gap-2">
              <b>Phone: </b>
              {data?.phone}
            </h3>
          </div>
          <div className="flex gap-10 mt-10 justify-center">
            <button className="px-4 py-3 hover:bg-white border hover:text-black bg-black text-white rounded-xl">
              Send Message
            </button>
            <button className="px-13 py-3 hover:bg-white border hover:text-black bg-black text-white rounded-xl transition-transform ease-in-out">
              Follow
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailUser;
