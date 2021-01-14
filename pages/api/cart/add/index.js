import { httpGet, httpPost, httpPut } from "../../../../utils/https";
import {
  verifyPostMethod,
  formattingProductOptions,
} from "../../../../utils/helper";
import URLS from "../../../../utils/urls";

export default async (req, res) => {
  if (!verifyPostMethod(req, res)) return;
  const data = req.body;
  let itemParams = {
    quantity: data.quantity,
    product_id: data.product_id,
  };
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

  let params = {
    line_items: [itemParams],
  };
  if (data?.cart_id) {
    const cartItemUrl = URLS.BIG_COMMERCE.CART.ITEM.replace(
      "{CART_ID}",
      data.cart_id
    );
    const cartItem = await httpPost(cartItemUrl, params, {
      isBigCommerce: true,
    });
    if (!cartItem?.customer_id && data?.customer_id) {
      const cartCustomerUrl = `${URLS.BIG_COMMERCE.CART.CART}/${data.cart_id}`;
      const cartCustomer = await httpPut(
        cartCustomerUrl,
        { customer_id: data.customer_id },
        { isBigCommerce: true }
      );
      return res.json(cartCustomer);
    }
    return res.json(cartItem);
  } else {
    if (data?.customer_id) {
      params = { ...params, customer_id: data.customer_id };
    }
    const cartUrl = URLS.BIG_COMMERCE.CART.CART;
    const cart = await httpPost(cartUrl, params, { isBigCommerce: true });
    return res.json(cart);
  }
};
