import React, { useContext, useState } from "react";
import { shape } from "prop-types";
import classnames from "classnames";
import { setCart } from "../../../../../hooks/cart/actions";
import { Context } from "../../../../../hooks/store";
import {
  formattingCartData,
  getFormattedCartParams,
  setCartLocalStorage,
} from "../../../../../utils/helper";
import { httpPost } from "../../../../../utils/https";
import URLS from "../../../../../utils/urls";
import Drawer from "../../../../elements/drawer";
import CartAdded from "../../../../cart/cartAdded";

const Price = (props) => {
  const { productDetail } = props;
  const { dispatchCart } = useContext(Context);
  const [isLoading, setIsLoading] = useState(false);
  const [isCartDrawer, setIsCartDrawer] = useState(false);

  const addToCart = () => {
    const params = getFormattedCartParams(productDetail);
    setIsLoading(true);
    httpPost(URLS.NEXT.CART.ADD, params, {
      traceName: "add_to_cart",
    }).then(
      (res) => {
        const { errors, data } = res || {};
        if (errors && Object.keys(errors).length > 0) {
          alert(errors[Object.keys(errors)[0]]);
        } else {
          setCartLocalStorage(data?.id, data?.updated_time);
          const cartData = formattingCartData(data);
          dispatchCart(setCart(cartData));
          openCartDrawer();
        }
        setIsLoading(false);
      },
      (err) => {
        setIsLoading(false);
      }
    );
  };

  const openCartDrawer = () => {
    setIsCartDrawer(true);
  };

  const closeCartDrawer = () => {
    setIsCartDrawer(false);
  };

  return (
    <div>
      <Drawer isOpen={isCartDrawer} closeDrawer={closeCartDrawer}>
        <CartAdded closeCartDrawer={closeCartDrawer} isNewItem={true} />
      </Drawer>
      <div className="flex items-center justify-between font-medium text-dark not-italic text-lg opacity-75 tracking-tight pt-5 pb-2">
        Price
      </div>
      <div className="font-medium text-dark text-2xl tracking-tight pb-2">
        ${productDetail?.price}
      </div>
      <div
        onClick={() => !isLoading && addToCart()}
        className={classnames(
          "flex items-center justify-center cursor-pointer text-white bg-primary rounded py-3 mb-10",
          {
            "opacity-70 cursor-not-allowed": isLoading,
          }
        )}
      >
        <div className="mr-4">
          <img
            src="/img/cart-icon.svg"
            width="23"
            height="23"
            alt="cart-image"
          />
        </div>
        <span className="font-normal font-base">
          {isLoading ? "Loading..." : "Add to Cart"}
        </span>
      </div>
    </div>
  );
};

Price.defaultProps = {
  productDetail: {},
};

Price.propTypes = {
  productDetail: shape({}),
};

export default Price;
