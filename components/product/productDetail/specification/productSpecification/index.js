import React, { useContext } from "react";
import { shape } from "prop-types";
import {
  BsFillBookmarkFill as BookmarkFillIcon,
  BsBookmark as BookmarkUnFillIcon,
} from "react-icons/bs";
import { Context } from "../../../../../hooks/store";
import WishlistIcon from "../../../../elements/wishlistIcon";

const ProductSpecification = (props) => {
  const { productDetail } = props;
  const { cartState, dispatchCart } = useContext(Context);
  const saveForLaterCartLength =
    (cartState.saveForLaterCart?.cart_items &&
      cartState.saveForLaterCart.cart_items.length) ||
    0;

  const getIsSaveForLater = () => {
    return (
      (saveForLaterCartLength > 0 &&
        cartState.saveForLaterCart.cart_items.some(
          (item) => item.product_id === productDetail.id
        )) ||
      false
    );
  };

  const isSaveForLater = getIsSaveForLater();

  return (
    <div className="container mx-auto  font-ubuntu ">
      <div className="flex items-center justify-between">
        <div className="text-dark text-3xl tracking-tight pb-6 font-medium">
          {productDetail?.name}
        </div>
        <div className="flex justify-between items-center">
          {isSaveForLater ? (
            <BookmarkFillIcon className="text-xl text-primary mr-10" />
          ) : (
            <BookmarkUnFillIcon className="text-xl text-grey opacity-70 mr-10" />
          )}
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
