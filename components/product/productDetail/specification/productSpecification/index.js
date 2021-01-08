import React from "react";
import { shape } from "prop-types";
import Link from "next/link";
import { FaHeart as HeartIcon } from "react-icons/fa";
import { BsFillBookmarkFill as BookmarkIcon } from "react-icons/bs";

const ProductSpecification = (props) => {
  const { productDetail } = props;
  return (
    <div className="container mx-auto  font-ubuntu ">
      <div className="flex items-center justify-between">
        <Link href="/product/more-details">
          <div className="text-dark text-3xl tracking-tight pb-6 font-medium">
            {productDetail?.name}
          </div>
        </Link>
        <div className="flex justify-between items-center">
          <BookmarkIcon className="text-xl text-primary mr-10" />
          <HeartIcon className="text-lg text-primary" />
        </div>
      </div>
      <hr className="text-dark opacity-10 " />
    </div>
  );
};

ProductSpecification.defaultProps = {
  productDetail: {},
};

ProductSpecification.propTypes = {
  productDetail: shape({}),
};

export default ProductSpecification;
