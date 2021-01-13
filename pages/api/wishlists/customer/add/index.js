import { httpPost, httpGet } from "../../../../../utils/https";
import URLS from "../../../../../utils/urls";
import { MESSAGES } from "../../../../../utils/constants";
import { verifyPostMethod, verifyToken } from "../../../../../utils/helper";

export default async (req, res) => {
  if (!verifyPostMethod(req, res)) return;
  const data = req.body || {};
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

  const customerId = token?.customer_id;

  if (customerId) {
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
            const params = {
              customer_id: customerId,
              items: [
                {
                  product_id: data?.product_id,
                  variant_id: data?.variant_id,
                },
              ],
            };
            const updateWishlistUrl = URLS.BIG_COMMERCE.WISHLIST.ITEM.replace(
              "{WISHLIST_ID}",
              wishlist?.id
            );
            const wishlistUpdate = await httpPost(updateWishlistUrl, params, {
              isBigCommerce: true,
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
            return res.json(wishlistUpdate);
          }
        })
      );
    } else {
      const params = {
        name: "wishlist",
        customer_id: customerId,
        items: [
          {
            product_id: data?.product_id,
            variant_id: data?.variant_id,
          },
        ],
        is_public: true,
      };
      const wishlistResponse = await httpPost(
        URLS.BIG_COMMERCE.WISHLIST.WISHLISTS,
        params,
        {
          isBigCommerce: true,
        }
      );
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
      return res.json(wishlistResponse);
    }
  }
};
