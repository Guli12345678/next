import { Metadata } from "next";
import { notFound } from "next/navigation";
import React from "react";

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
  const data = await fetch("https://fakestoreapi.com/users").then(
    (res) => res.json()
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
    <div className="grid grid-cols-2">
      <div>
        <h1>
          {data?.name?.firstname} {data?.name?.lastname}
        </h1>
        <strong>{data?.price} USD</strong>
        <p>{data?.description}</p>
      </div>
    </div>
  );
};

export default DetailUser;
