import { httpGet, httpPost } from "../../../../utils/https";
import URLS from "../../../../utils/urls";
import { MESSAGES } from "../../../../utils/constants";
import {
  verifyPostMethod,
  formattingProductOptions,
} from "../../../../utils/helper";

export default async (req, res) => {
  if (!verifyPostMethod(req, res)) return;
  const cartUrl = URLS.BIG_COMMERCE.CART.CART;
  const data = req.body;
  let itemParams = {
    quantity: data.quantity,
    product_id: data.product_id,
  };
  if (data?.customer_id) {
    itemParams = { ...itemParams, customer_id: data.customer_id };
  }
  if (data?.option_selections && data.option_selections.length > 0) {
    itemParams = { ...itemParams, option_selections: data.option_selections };
  } else {
    const productUrl = `${URLS.BIG_COMMERCE.PRODUCT.PRODUCTS}/${data.product_id}?include=options`;
    const product = await httpGet(productUrl, { isBigCommerce: true });
    if (product?.data?.options && product?.data?.options.length > 0) {
      const optionSelections = formattingProductOptions(product.data.options);
      if (optionSelections && optionSelections.length > 0) {
        itemParams = { ...itemParams, option_selections: optionSelections };
      }
    }
  }

  const params = {
    line_items: [itemParams],
  };
  if (!data.cart_id) {
    const cart = await httpPost(cartUrl, params, { isBigCommerce: true });
    if (cart.status === 401) {
      res.status(401);
      res.json({
        errors: {
          error: MESSAGES.UNAUTHORIZED,
        },
      });
      return;
    }
    return res.json(cart);
  }

  return res.json("success");
};
