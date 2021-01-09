import { httpGet } from "../../../../utils/https";
import { MESSAGES } from "../../../../utils/constants";
import { verifyGetMethod } from "../../../../utils/helper";
import URLS from "../../../../utils/urls";

export default async (req, res) => {
  if (!verifyGetMethod(req, res)) return;
  const { id } = req.query || {};
  const productIds = [];
  if (!id) {
    res.status(400);
    res.json({
      errors: {
        error: "Required customer id",
      },
    });
    return;
  }

  const customerWishlistUrl = `${URLS.BIG_COMMERCE.WISHLIST.WISHLISTS}?customer_id=10`;
  const wishlists = await httpGet(customerWishlistUrl, { isBigCommerce: true });
  if (wishlists.status === 401) {
    res.status(401);
    res.json({
      errors: {
        error: MESSAGES.UNAUTHORIZED,
      },
    });
    return;
  }
  if (wishlists?.data.length > 0) {
    wishlists.data.forEach((wishlist) => {
      wishlist.items.forEach((item) => {
        if (!productIds.includes(item.product_id)) {
          productIds.push(item.product_id);
        }
      });
    });
  }

  const productsUrl = `${URLS.BIG_COMMERCE.PRODUCT.PRODUCTS}?id:in=${productIds}&include=primary_image`;
  const products = await httpGet(productsUrl, { isBigCommerce: true });
  if (products.status === 401) {
    res.status(401);
    res.json({
      errors: {
        error: MESSAGES.UNAUTHORIZED,
      },
    });
    return;
  }

  return res.json(products);
};
