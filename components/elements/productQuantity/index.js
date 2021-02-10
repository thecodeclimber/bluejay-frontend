import React from "react";
import classnames from "classnames";
import { array, func, shape, bool, string } from "prop-types";
import { RiSubtractFill as SubtractIcon } from "react-icons/ri";
import { FiPlus as PlusIcon } from "react-icons/fi";
import { MAX_QUANTITY } from "../../../utils/constants";

const ProductQuantity = (props) => {
  const {
    products,
    handleProducts,
    product,
    fromDrawer,
    inputClassNames,
    isfromCartPage,
  } = props;
  const minProductQuantity = product?.order_quantity_minimum || 1;
  const maxProductQuantity = product?.order_quantity_maximum || MAX_QUANTITY;

  const decreaseQuantity = () => {
    let productsData;
    if (products.length > 0) {
      productsData = [...products];
      const index = productsData.findIndex((data) => data.id === product.id);
      if (index === -1) return;
      productsData[index].quantity =
        productsData[index].quantity > minProductQuantity
          ? productsData[index].quantity - 1
          : minProductQuantity;
    } else {
      productsData = {
        ...product,
        quantity:
          product?.quantity && product.quantity > minProductQuantity
            ? product.quantity - 1
            : minProductQuantity,
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
      productsData[index].quantity =
        productsData[index].quantity + 1 < maxProductQuantity
          ? productsData[index].quantity + 1
          : maxProductQuantity;
    } else {
      productsData = {
        ...product,
        quantity:
          product?.quantity && product.quantity + 1 <= maxProductQuantity
            ? product.quantity + 1
            : maxProductQuantity,
      };
    }
    handleProducts(productsData);
  };

  const handleChange = (e) => {
    if (e.keyCode === 40) return decreaseQuantity();
    if (e.keyCode === 38) return increaseQuantity();
    let inputValue = Number(e.target.value) || 0;
    if (
      (e.type === "blur" && inputValue < minProductQuantity) ||
      (isfromCartPage && inputValue < minProductQuantity)
    ) {
      inputValue = minProductQuantity;
    }
    if (e.type === "blur" && inputValue > maxProductQuantity) {
      inputValue = maxProductQuantity;
    }
    if (isNaN(inputValue)) return;
    let productsData;
    if (products.length > 0) {
      productsData = [...products];
      const index = productsData.findIndex((data) => data.id === product.id);
      if (index === -1) return;
      productsData[index].quantity = inputValue;
    } else {
      productsData = {
        ...product,
        quantity: inputValue,
      };
    }
    handleProducts(productsData);
  };

  return (
    <>
      {fromDrawer ? (
        <div className="flex items-center">
          <div
            onClick={() =>
              product.quantity > minProductQuantity && decreaseQuantity()
            }
            className={classnames(
              "border border-light p-1 rounded-md cursor-pointer",
              {
                "cursor-not-allowed": product.quantity <= minProductQuantity,
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
            onClick={() =>
              product.quantity > minProductQuantity && decreaseQuantity()
            }
            className={classnames(
              "flex justify-center cursor-pointer border-r border-dark border-opacity-10 text-center items-center p-4",
              {
                "cursor-not-allowed": product.quantity <= minProductQuantity,
              }
            )}
          >
            <SubtractIcon className="text-dark" />
          </div>
          <div>
            <input
              autoComplete="off"
              type="text"
              name="quantity"
              className={`w-full text-dark text-center text-base py-3 ${inputClassNames}`}
              value={Number(product.quantity).toLocaleString("en-US", {
                minimumIntegerDigits: 2,
                useGrouping: false,
              })}
              onChange={handleChange}
              onBlur={handleChange}
              onKeyDown={handleChange}
            />
          </div>
          <div
            onClick={increaseQuantity}
            className={classnames(
              "flex justify-center border-l cursor-pointer border-dark border-opacity-10 text-center items-center p-4",
              {
                "cursor-not-allowed": product.quantity >= maxProductQuantity,
              }
            )}
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
  isfromCartPage: false,
  inputClassNames: "",
};

ProductQuantity.propTypes = {
  handleProducts: func,
  products: array,
  product: shape({}),
  fromDrawer: bool,
  isfromCartPage: bool,
  inputClassNames: string,
};

export default ProductQuantity;
