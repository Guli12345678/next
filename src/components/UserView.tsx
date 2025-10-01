import Image from "next/image";
import React, { FC } from "react";
import SeeMore from "./SeeMoreUser";

interface Props {
  data: any;
}

const UserView: FC<Props> = (props) => {
  const { data } = props;
  console.log(data);

  return (
    <div className="grid grid-cols-4 gap-4 container">
      {data?.map((item: any) => (
        <div
          className="shadow-lg p-7 transform transition duration-300 hover:scale-105"
          key={item.id}
        >
          <div>
            <h3>
              {item.name.firstname.toUpperCase()}{" "}
              {item.name.lastname.toUpperCase()}
            </h3>
            <br />
            <div className="flex gap-2">
              <b>Address:</b> {item?.address.city.toUpperCase()}
            </div>

            <div className="flex gap-2">
              <b>Email: </b>
              {item?.email}
            </div>
            <div className="flex gap-2">
              <b>Phone: </b>
              {item?.phone}
            </div>
            <SeeMore id={item.id} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserView;
