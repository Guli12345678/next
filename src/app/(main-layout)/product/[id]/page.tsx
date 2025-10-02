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
    <div className="flex container">
      <div
        key={data.id}
        className="shadow-lg p-20 mt-10 mb-15 flex gap-20 mx-auto"
      >
        <div>
          <Image
            className="w-[300px] h-[300px] "
            src={data.image}
            alt={data.title}
            width={300}
            height={300}
          />
        </div>
        <div className="mt-10">
          <b className="line-clamp-1">{data.title}</b>
          <b className="text-2xl text-yellow-400">{data.price} $</b>
          <br />
          <div className="flex gap-10 mt-20">
            <button className="px-5 py-3 hover:bg-white border hover:text-black bg-black text-white rounded-xl">
              Add to Cart
            </button>
            <button className="px-6 py-3 hover:bg-white border hover:text-black bg-black text-white rounded-xl transition-transform ease-in-out">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailProduct;
