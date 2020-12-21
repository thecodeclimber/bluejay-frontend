import React from "react";
import classnames from "classnames";
import { IoIosArrowForward as SlideRightArrow } from "react-icons/io";

const data = [
  {
    title: "Fasteners",
  },
  {
    title: "Bolts",
  },
  {
    title: "Carriage Bolts",
  },
  {
    title: "Hex Nut Cap Screw",
  },
];

const BreadCrum = () => (
  <div className="container mx-auto py-6">
    <div className="flex items-center font-Ubuntu">
      {data.length > 0 &&
        data.map((menuName, index) => {
          const { title } = menuName || {};
          return (
            <div key={index} className="flex items-center">
              <div
                className={classnames("text-base tracking-tight", {
                  "text-primary": index !== data.length - 1,
                  "text-dark font-medium": index === data.length - 1,
                })}
              >
                {title}
              </div>
              <SlideRightArrow
                className={classnames("mx-6 text-dark opacity-25", {
                  "hidden opacity-25": index === data.length - 1,
                })}
              />
            </div>
          );
        })}
    </div>
  </div>
);

export default BreadCrum;
