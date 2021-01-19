import { httpPut } from "../../../../utils/https";
import { verifyPutMethod } from "../../../../utils/helper";
import URLS from "../../../../utils/urls";

export default async (req, res) => {
  if (!verifyPutMethod(req, res)) return;
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

  if (!req.body?.product_id || !req.body?.quantity) {
    res.status(400);
    res.json({
      errors: {
        error: "Required both product id and quantity",
      },
    });
    return;
  }

  const params = {
    line_item: {
      product_id: req.body.product_id,
      quantity: req.body.quantity,
    },
  };
  const cartItemUrl = `${URLS.BIG_COMMERCE.CART.ITEM.replace(
    "{CART_ID}",
    data.cartId
  )}/${data.itemId}`;
  const cart = await httpPut(cartItemUrl, params, { isBigCommerce: true });

  return res.json(cart);
};
