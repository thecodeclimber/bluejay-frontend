import {
  httpGet,
  httpPost,
  httpPut,
  httpDelete,
} from "../../../../utils/https";
import {
  verifyPostMethod,
  formattingProductOptions,
  formattingCartData,
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

  let tempCart = {};
  if (data?.temp_cart_id && data?.temp_item_id) {
    const cartItemDeletedUrl = `${URLS.BIG_COMMERCE.CART.ITEM.replace(
      "{CART_ID}",
      data.temp_cart_id
    )}/${data.temp_item_id}`;
    tempCart = await httpDelete(cartItemDeletedUrl, {
      isBigCommerce: true,
    });
  }

  if (data?.cart_id) {
    const cartListUrl = `${URLS.BIG_COMMERCE.CART.CART}/${data.cart_id}`;
    const cartData = await httpGet(cartListUrl, { isBigCommerce: true });
    if (cartData?.data) {
      const formattedCart = formattingCartData(cartData.data);
      if (formattedCart?.cart_items && formattedCart.cart_items.length > 0) {
        const getItem = formattedCart.cart_items.find(
          ({ product_id }) => product_id === data.product_id
        );
        if (getItem && getItem?.id) {
          const cartItemDeleteUrl = `${URLS.BIG_COMMERCE.CART.ITEM.replace(
            "{CART_ID}",
            data.cart_id
          )}/${getItem.id}`;
          const cartDeleted = await httpDelete(cartItemDeleteUrl, {
            isBigCommerce: true,
          });
          itemParams = {
            ...itemParams,
            quantity: getItem.quantity + itemParams.quantity,
          };
          params = {
            line_items: [itemParams],
          };
          if (data?.customer_id) {
            params = { ...params, customer_id: data.customer_id };
          }
          if (!cartDeleted) {
            const cartUrl = URLS.BIG_COMMERCE.CART.CART;
            const cart = await httpPost(cartUrl, params, {
              isBigCommerce: true,
            });
            return res.json({ cart, tempCart });
          }
        }
      }
    }

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
      return res.json({ cart: cartCustomer, tempCart });
    }
    return res.json({ cart: cartItem, tempCart });
  } else {
    if (data?.customer_id) {
      params = { ...params, customer_id: data.customer_id };
    }
    const cartUrl = URLS.BIG_COMMERCE.CART.CART;
    const cart = await httpPost(cartUrl, params, { isBigCommerce: true });
    return res.json({ cart, tempCart });
  }
};