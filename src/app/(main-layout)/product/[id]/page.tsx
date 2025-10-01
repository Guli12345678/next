import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";

type Props = {
  params: Promise<{ id: string }>;
};

// SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;

  const product = await fetch(`https://fakestoreapi.com/products/${id}`).then(
    (res) => res.json()
  );

  return {
    title: product.title,
    description: product.description,
    openGraph: {
      images: [product.image],
    },
  };
}

// SEO
export async function generateStaticParams() {
  const data = await fetch("https://fakestoreapi.com/products").then((res) =>
    res.json()
  );
  return data?.map((pro: any) => ({
    id: pro.id.toString(),
  }));
}

// SEO
const DetailProduct = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;

  const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
    next: { revalidate: 60 },
  }); // ISR
  if (!response.ok) {
    notFound();
    // throw new Error("xato")
  }
  const data = await response.json();

  return (
    <div className="grid grid-cols-2">
      <div>
        <Image src={data?.image} alt={data?.title} width={500} height={500} />
      </div>
      <div>
        <h1>{data?.title}</h1>
        <strong>{data?.price} USD</strong>
        <p>{data?.description}</p>
      </div>
    </div>
  );
};

export default DetailProduct;
