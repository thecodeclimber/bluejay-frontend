import { httpGet } from "../../../utils/https";
import { verifyGetMethod } from "../../../utils/helper";
import URLS from "../../../utils/urls";

export default async (req, res) => {
  if (!verifyGetMethod(req, res)) return;
  const { cartId, saveForLaterCartId } = req.query || {};
  let cartData = {
    cart: {},
    saveForLaterCart: {},
  };
  if (cartId) {
    const cartUrl = `${URLS.BIG_COMMERCE.CART.CART}/${cartId}`;
    const cartResponse = await httpGet(cartUrl, { isBigCommerce: true });
    cartData = { ...cartData, cart: cartResponse };
  }
  if (saveForLaterCartId) {
    const saveForLaterCartUrl = `${URLS.BIG_COMMERCE.CART.CART}/${saveForLaterCartId}`;
    const saveForLaterCartResponse = await httpGet(saveForLaterCartUrl, {
      isBigCommerce: true,
    });
    cartData = { ...cartData, saveForLaterCart: saveForLaterCartResponse };
  }
  return res.json(cartData);
};
