import Image from "next/image";
import React, { FC } from "react";
import SeeMore from "./SeeMore";

interface Props {
  products: any[];
}

const ProductView: FC<Props> = (props) => {
  const { products } = props;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 container mt-40">
      {products?.map((item: any) => (
        <div key={item.id} className="shadow-lg p-7">
          <div>
            <Image
              className="w-[300px] h-[300px] "
              src={item.image}
              alt={item.title}
              width={900}
              height={900}
            />
          </div>
          <div className="mt-10">
            <h3 className="line-clamp-1">{item.title}</h3>
            <b>{item.price} $</b>
            <br />
            <SeeMore id={item.id} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductView;
