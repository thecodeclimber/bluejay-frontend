import React from "react";
import { shape } from "prop-types";
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
];

const BreadCrum = (props) => {
  const { productDetail } = props;
  return (
    <div className="container mx-auto py-6">
      <div className="flex items-center font-Ubuntu">
        {data.length > 0 &&
          data.map((menuName, index) => {
            const { title } = menuName || {};
            return (
              <div key={index} className="flex items-center">
                <div className="text-base tracking-tight text-primary">
                  {title}
                </div>
                <SlideRightArrow className="mx-6 text-dark opacity-25" />
              </div>
            );
          })}
        <div className="flex items-center">
          <div className="text-base tracking-tight text-dark font-medium">
            {productDetail?.name}
          </div>
        </div>
      </div>
    </div>
  );
};

BreadCrum.defaultProps = {
  productDetail: {},
};

BreadCrum.propTypes = {
  productDetail: shape({}),
};

export default BreadCrum;
