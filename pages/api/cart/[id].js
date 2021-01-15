import { httpGet } from "../../../utils/https";
import { verifyGetMethod } from "../../../utils/helper";
import URLS from "../../../utils/urls";

export default async (req, res) => {
  if (!verifyGetMethod(req, res)) return;
  const { id } = req.query || {};
  if (!id) {
    res.status(400);
    res.json({
      errors: {
        error: "Required cart id",
      },
    });
    return;
  }

  const cartUrl = `${URLS.BIG_COMMERCE.CART.CART}/${id}`;
  const cart = await httpGet(cartUrl, { isBigCommerce: true });
  return res.json(cart);
};
