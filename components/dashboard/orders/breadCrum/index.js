import React from "react";
import { shape } from "prop-types";
import classnames from "classnames";
import { IoIosArrowForward as SlideRightArrow } from "react-icons/io";

const data = [
  {
    title: "My Profile",
  },
  {
    title: "My Orders",
  },
];

const BreadCrum = (props) => {
  const { order } = props;
  return (
    <div>
      <div className="flex items-center font-Ubuntu">
        {data.length > 0 &&
          data.map((menuName, index) => {
            const { title } = menuName || {};
            return (
              <div key={index} className="flex items-center">
                <div
                  className={classnames("text-base tracking-tight", {
                    "text-primary": index === data.length % 2,
                    "text-dark": index !== data.length % 2,
                  })}
                >
                  {title}
                </div>
                <SlideRightArrow className="mx-6 text-dark opacity-25" />
              </div>
            );
          })}
        <div className="flex items-center">
          <div className="text-base tracking-tight text-dark font-medium">
            {order?.detail}
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
