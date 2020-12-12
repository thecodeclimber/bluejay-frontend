import { httpGet } from "../../../utils/https";
import URLS from "../../../utils/urls";
import { MESSAGES } from "../../../utils/constants";
import { verifyGetMethod } from "../../../utils/helper";

export default async (req, res) => {
  if (!verifyGetMethod(req, res)) return;

  const wishlistUrl = URLS.BIG_COMMERCE.WISHLIST.WISHLISTS;
  const wishlists = await httpGet(wishlistUrl, { isBigCommerce: true });
  if (wishlists.status === 401) {
    res.status(401);
    res.json({
      "errors": {
        "error": MESSAGES.UNAUTHORIZED
      }
    });
    return;
  }
  return res.json(wishlists);
};