import { httpDelete, httpGet } from "../../../../../utils/https";
import { MESSAGES } from "../../../../../utils/constants";
import { verifyDeleteMethod, verifyToken } from "../../../../../utils/helper";
import URLS from "../../../../../utils/urls";

export default async (req, res) => {
  if (!verifyDeleteMethod(req, res)) return;
  const data = req.query || {};
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
  let productIds = [];
  const productId = parseInt(data.product_id);
  const customerId = token?.customer_id;
  const customerWishlistUrl = `${URLS.BIG_COMMERCE.WISHLIST.WISHLISTS}?customer_id=${customerId}&limit=1`;
  const cutomerWishlists = await httpGet(customerWishlistUrl, {
    isBigCommerce: true,
  });
  if (cutomerWishlists.status === 401) {
    res.status(401);
    res.json({
      errors: {
        error: MESSAGES.UNAUTHORIZED,
      },
    });
    return;
  }
  if (
    cutomerWishlists?.data &&
    cutomerWishlists?.data.length &&
    cutomerWishlists.data[0]?.items &&
    cutomerWishlists.data[0].items.length > 0
  ) {
    const selectedItem = cutomerWishlists.data[0].items.find(
      (itemData) => itemData.product_id === productId
    );
    const wishlistId = cutomerWishlists.data[0]?.id;
    const deleteCustomerWishlistUrl = `${URLS.BIG_COMMERCE.WISHLIST.ITEM.replace(
      "{WISHLIST_ID}",
      wishlistId
    )}/${selectedItem.id}`;
    const wishlistDeleted = await httpDelete(deleteCustomerWishlistUrl, {
      isBigCommerce: true,
    });
    if (wishlistDeleted.status === 401) {
      res.status(401);
      res.json({
        errors: {
          error: MESSAGES.UNAUTHORIZED,
        },
      });
      return;
    }
    const wishlistUrl = `${URLS.BIG_COMMERCE.WISHLIST.WISHLISTS}/${wishlistId}`;
    const wishlists = await httpGet(wishlistUrl, {
      isBigCommerce: true,
    });
    if (
      wishlists &&
      wishlists?.data &&
      wishlists.data?.items &&
      wishlists.data.items.length > 0
    ) {
      productIds = wishlists.data.items.map((d) => d.product_id);
    }
  }
  if (productIds && productIds.length > 0) {
    productIds = [...new Set(productIds)];
  }
  const productsUrl = `${URLS.BIG_COMMERCE.PRODUCT.PRODUCTS}?id:in=${productIds}&include=primary_image`;
  const products = await httpGet(productsUrl, { isBigCommerce: true });
  const productsData = [];
  if (products?.data && products.data.length > 0) {
    const productsList = products.data.map((data) => {
      return {
        id: data.id,
        name: data.name,
        price: data.price,
        image: data.primary_image?.url_thumbnail,
      };
    });
    productsData.push(...productsList);
  }
  return res.json(productsData);
};
