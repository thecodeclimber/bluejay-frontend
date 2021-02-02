import React, { useContext } from "react";
import { shape } from "prop-types";
import { Context } from "../../../../../hooks/store";
import WishlistIcon from "../../../../elements/wishlistIcon";
import { httpDelete } from "../../../../../utils/https";
import URLS from "../../../../../utils/urls";
import AddToCart from "../../../../elements/AddToCart";

const ProductSpecification = (props) => {
  const { productDetail } = props;
  const { cartState } = useContext(Context);
  const saveForLaterCartLength =
    (cartState.saveForLaterCart?.cart_items &&
      cartState.saveForLaterCart.cart_items.length) ||
    0;

  const getSaveForLater = () => {
    if (saveForLaterCartLength === 0) return {};
    const cartData = cartState.saveForLaterCart.cart_items.find(
      (item) => item.product_id === productDetail.id
    );
    return cartData || {};
  };

  const deleteSaveForLater = () => {
    httpDelete(URLS.NEXT.CART.ADD, {
      traceName: "delete_save_for_later_cart",
    }).then(
      (res) => {},
      (err) => {}
    );
  };

  const cartData = getSaveForLater();

  return (
    <div className="container mx-auto  font-ubuntu ">
      <div className="flex items-center justify-between">
        <div className="text-dark text-3xl tracking-tight pb-6 font-medium">
          {productDetail?.name}
        </div>
        <div className="flex justify-between items-center">
          <AddToCart
            isFromProductDetailPage={true}
            isDeleteSaveForLater={Boolean(cartData?.id)}
            product={productDetail}
          />
          <WishlistIcon product={productDetail} />
        </div>
      </div>
      <hr className="text-dark opacity-10" />
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
