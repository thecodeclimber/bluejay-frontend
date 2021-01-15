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
  if (!data?.product_id) {
    res.status(400);
    res.json({
      errors: {
        error: "Required product id",
      },
    });
    return;
  }
  const customerId = token?.customer_id;
  const customerWishlistUrl = `${URLS.BIG_COMMERCE.WISHLIST.WISHLISTS}?customer_id=${customerId}`;
  const customerWishlists = await httpGet(customerWishlistUrl, {
    isBigCommerce: true,
  });
  if (customerWishlists.status === 401) {
    res.status(401);
    res.json({
      errors: {
        error: MESSAGES.UNAUTHORIZED,
      },
    });
    return;
  }
  let params = {
    customer_id: customerId,
    items: [
      {
        product_id: data?.product_id,
      },
    ],
  };
  if (customerWishlists?.data && customerWishlists.data.length > 0) {
    const wishlist = customerWishlists.data[0];
    const wishlistItemUrl = URLS.BIG_COMMERCE.WISHLIST.ITEM.replace(
      "{WISHLIST_ID}",
      wishlist.id
    );
    const wishlistItem = await httpPost(wishlistItemUrl, params, {
      isBigCommerce: true,
    });

    if (wishlistItem.status === 401) {
      res.status(401);
      res.json({
        errors: {
          error: MESSAGES.UNAUTHORIZED,
        },
      });
      return;
    }
    return res.json(wishlistItem);
  }
  params = {
    ...params,
    name: "wishlist",
    is_public: false,
  };
  const wishlistResponse = httpPost(
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
  return res.json(wishlistResponse);
};
