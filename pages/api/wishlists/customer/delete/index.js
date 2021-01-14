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

  const productId = data?.id;
  Math.ceil(productId);

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

  if (wishlists.data.length > 0) {
    await Promise.all(
      wishlists.data.map(async (wishlist) => {
        if (wishlist.customer_id === customerId) {
          await Promise.all(
            wishlist.items.map(async (item) => {
              if (item.product_id == productId) {
                const deleteCustomerWishlistUrl = `${URLS.BIG_COMMERCE.WISHLIST.ITEM.replace(
                  "{WISHLIST_ID}",
                  wishlist?.id
                )}/${item.id}`;

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
                if (wishlistDeleted.status === 422) {
                  res.status(422);
                  res.json(wishlistDeleted);
                  return;
                }

                return res.json(wishlistDeleted);
              }
            })
          );
        }
      })
    );
  }
};
