import React, { useState } from "react";
import { shape } from "prop-types";
import Drawer from "../../../../elements/drawer";
import AddToCart from "../../../../elements/addToCart";
import CartAdded from "../../../../cart/cartAdded";

const Price = (props) => {
  const { productDetail } = props;
  const [isCartDrawer, setIsCartDrawer] = useState(false);

  const closeCartDrawer = () => {
    setIsCartDrawer(false);
  };

  const handleCart = ({ isOpenDrawer = false }) => {
    setIsCartDrawer(isOpenDrawer);
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
      <AddToCart product={productDetail} handleData={handleCart} />
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
