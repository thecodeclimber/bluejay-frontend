import { httpDelete } from "../../../../utils/https";
import { verifyDeleteMethod } from "../../../../utils/helper";
import URLS from "../../../../utils/urls";

export default async (req, res) => {
  if (!verifyDeleteMethod(req, res)) return;
  const data = req.query || {};

  if (!data.cartId || !data.itemId) {
    res.status(400);
    res.json({
      errors: {
        error: "Required both cartId and itemId",
      },
    });
    return;
  }

  const cartItemUrl = `${URLS.BIG_COMMERCE.CART.ITEM.replace(
    "{CART_ID}",
    data.cartId
  )}/${data.itemId}`;

  const cart = await httpDelete(cartItemUrl, { isBigCommerce: true });
  if (cart.status === 204) {
    res.status(204);
    res.json({
      errors: {
        error: "No content found",
      },
    });
    return;
  }
  return res.json(cart);
};
