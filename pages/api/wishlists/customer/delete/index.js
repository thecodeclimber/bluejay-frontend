import { httpDelete, httpGet } from "../../../../../utils/https";
import { MESSAGES } from "../../../../../utils/constants";
import { verifyDeleteMethod, verifyToken } from "../../../../../utils/helper";
import URLS from "../../../../../utils/urls";

export default async (req, res) => {
  if (!verifyDeleteMethod(req, res)) return;
  const data = req.query || {};
  const token = verifyToken(req);
  if (!token) {
    res.status(404);
    res.json({
      errors: {
        error: MESSAGES.UNAUTHORIZED,
      },
    });
    return;
  }
  if (!data?.product_id) {
    res.status(400);
    res.json({
      errors: {
        error: "Required product id",
      },
    });
    return;
  }
  const productId = parseInt(data.product_id);
  const customerId = token?.customer_id;
  const customerWishlistUrl = `${URLS.BIG_COMMERCE.WISHLIST.WISHLISTS}?customer_id=${customerId}`;
  const wishlists = await httpGet(customerWishlistUrl, {
    isBigCommerce: true,
  });
  if (wishlists.status === 401) {
    res.status(401);
    res.json({
      errors: {
        error: MESSAGES.UNAUTHORIZED,
      },
    });
    return;
  }

  if (!wishlists?.data && !wishlists?.data.length) return;
  if (wishlists?.data && wishlists.data.length > 0) {
    if (wishlists.data[0].items && wishlists.data[0].items.length > 0) {
      const selectedItem = wishlists.data[0].items.find(
        (itemData) => itemData.product_id === productId
      );
      const wishlistId = wishlists.data[0]?.id;
      const deleteCustomerWishlistUrl = `${URLS.BIG_COMMERCE.WISHLIST.ITEM.replace(
        "{WISHLIST_ID}",
        wishlistId
      )}/${selectedItem.id}`;
      const wishlistDeleted = httpDelete(deleteCustomerWishlistUrl, {
        isBigCommerce: true,
      });
      if (wishlistDeleted.status === 401) {
        res.status(401);
        res.json({
          errors: {
            error: MESSAGES.UNAUTHORIZED,
          },
        });
        return;
      }
      return res.json(wishlistDeleted);
    }
  }
  return;
};
