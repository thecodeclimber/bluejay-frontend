import React from "react";
import classnames from "classnames";
import { array, func, shape, bool } from "prop-types";
import { RiSubtractFill as SubtractIcon } from "react-icons/ri";
import { FiPlus as PlusIcon } from "react-icons/fi";

const ProductQuantity = (props) => {
  const { products, handleProducts, product, fromDrawer } = props;

  const decreaseQuantity = () => {
    let productsData;
    if (products.length > 0) {
      productsData = [...products];
      const index = productsData.findIndex((data) => data.id === product.id);
      if (index === -1) return;
      productsData[index].quantity =
        productsData[index].quantity > 1 ? productsData[index].quantity - 1 : 1;
    } else {
      productsData = {
        ...product,
        quantity:
          product?.quantity && product.quantity > 1 ? product.quantity - 1 : 1,
      };
    }
    handleProducts(productsData);
  };

  const increaseQuantity = () => {
    let productsData;
    if (products.length > 0) {
      productsData = [...products];
      const index = productsData.findIndex((data) => data.id === product.id);
      if (index === -1) return;
      productsData[index].quantity = productsData[index].quantity + 1;
    } else {
      productsData = {
        ...product,
        quantity: product?.quantity ? product.quantity + 1 : 1,
      };
    }
    handleProducts(productsData);
  };

  return (
    <>
      {fromDrawer ? (
        <div className="flex items-center">
          <div
            onClick={() => product.quantity > 1 && decreaseQuantity()}
            className={classnames(
              "border border-light p-1 rounded-md cursor-pointer",
              {
                "cursor-not-allowed": product.quantity <= 1,
              }
            )}
          >
            <SubtractIcon className="text-base" />
          </div>
          <div className="text-base px-4">
            {product.quantity < 10 && 0}
            {product.quantity}
          </div>
          <div
            onClick={increaseQuantity}
            className="border border-light p-1 rounded-md cursor-pointer"
          >
            <PlusIcon className="text-base" />
          </div>
        </div>
      ) : (
        <div className="flex justify-between items-center border rounded border-dark border-opacity-10">
          <div
            onClick={() => product.quantity > 1 && decreaseQuantity()}
            className={classnames(
              "flex justify-center cursor-pointer border-r border-dark border-opacity-10 text-center items-center p-4 px-4",
              {
                "cursor-not-allowed": product.quantity <= 1,
              }
            )}
          >
            <SubtractIcon className="text-dark" />
          </div>
          <div className="min-w-60 text-dark text-center text-base">
            {product.quantity < 10 && 0}
            {product.quantity}
          </div>
          <div
            onClick={increaseQuantity}
            className="flex justify-center border-l cursor-pointer border-dark border-opacity-10 text-center items-center p-4 px-4"
          >
            <PlusIcon className="text-dark" />
          </div>
        </div>
      )}
    </>
  );
};

ProductQuantity.defaultProps = {
  handleProducts: () => {},
  products: [],
  product: {},
  fromDrawer: false,
};

ProductQuantity.propTypes = {
  handleProducts: func,
  products: array,
  product: shape({}),
  fromDrawer: bool,
};

export default ProductQuantity;
