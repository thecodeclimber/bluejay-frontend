import { httpPost, httpGet, httpPut } from "../../../../../utils/https";
import URLS from "../../../../../utils/urls";
import { MESSAGES } from "../../../../../utils/constants";
import { verifyPostMethod } from "../../../../../utils/helper";

export default async (req, res) => {
  if (!verifyPostMethod(req, res)) return;
  const data = req.body || {};

  if (data?.customer_id) {
    const customerWishlistUrl = `${URLS.BIG_COMMERCE.WISHLIST.WISHLISTS}?customer_id=10`;
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
      const updateWishlistUrl = `${URLS.BIG_COMMERCE.WISHLIST.WISHLISTS}/${data?.customer_id}`;
      const wishlistUpdate = await httpPut(updateWishlistUrl, {
        isBigCommerce: true,
        headers,
      });
      if (wishlistUpdate.status === 401) {
        res.status(401);
        res.json({
          errors: {
            error: MESSAGES.UNAUTHORIZED,
          },
        });
        return;
      }
      if (wishlistUpdate.status === 422) {
        res.status(422);
        res.json(wishlistUpdate);
        return;
      }
    } else {
      const params = [
        {
          name: "wishlist",
          customer_id: data?.customer_id,
          items: {
            product_id: data.items?.product_id,
            variant_id: data.items?.base_variant_id,
          },
        },
      ];

      const wishlistResponse = await httpPost(URLS.WISHLIST.WISHLISTS, params, {
        isBigCommerce: true,
      });
      if (wishlistResponse.status === 401) {
        res.status(401);
        res.json({
          errors: {
            error: MESSAGES.UNAUTHORIZED,
          },
        });
        return;
      }
      if (wishlistResponse.status === 422) {
        res.status(422);
        res.json(wishlistResponse);
        return;
      }
    }
  }
};
