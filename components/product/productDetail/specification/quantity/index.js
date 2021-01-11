import React from "react";
import { shape, func } from "prop-types";
import { RiSubtractFill as SubtractIcon } from "react-icons/ri";
import { BsPlus as PlusIcon } from "react-icons/bs";

const Quantity = (props) => {
  const { productDetail, setProductDetail } = props;

  const decreaseQuantity = () => {
    const data = {
      ...productDetail,
      quantity:
        productDetail?.quantity && productDetail.quantity > 1
          ? productDetail.quantity - 1
          : 1,
    };
    setProductDetail(data);
  };

  const increaseQuantity = () => {
    const data = {
      ...productDetail,
      quantity: productDetail?.quantity ? productDetail.quantity + 1 : 1,
    };
    setProductDetail(data);
  };

  return (
    <>
      <div className="font-medium text-dark not-italic text-lg opacity-75 tracking-tight pt-8 pb-5 ">
        Quantity
      </div>
      <div className="flex justify-between items-center mb-4 border rounded border-dark border-opacity-10">
        <div
          onClick={decreaseQuantity}
          className="flex justify-center cursor-pointer border-r border-dark border-opacity-10 text-center items-center py-4 px-4"
        >
          <SubtractIcon className="text-black" />
        </div>
        <div className="px-10 text-dark tracking-tight">
          {productDetail?.quantity < 10 && 0}
          {productDetail?.quantity}
        </div>
        <div
          onClick={increaseQuantity}
          className="flex justify-center border-l cursor-pointer border-dark border-opacity-10 text-center items-center py-4  px-4"
        >
          <PlusIcon className="text-black" />
        </div>
      </div>
    </>
  );
};

Quantity.defaultProps = {
  productDetail: {},
  setProductDetail: () => {},
};

Quantity.propTypes = {
  productDetail: shape({}),
  setProductDetail: func,
};

export default Quantity;
