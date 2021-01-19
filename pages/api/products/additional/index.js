import { httpGet } from "../../../../utils/https";
import URLS from "../../../../utils/urls";
import { verifyGetMethod } from "../../../../utils/helper";

export default async (req, res) => {
  if (!verifyGetMethod(req, res)) return;
  const { limit, product_ids } = req.query || {};
  let productsUrl = `${URLS.BIG_COMMERCE.PRODUCT.PRODUCTS}?include=primary_image`;
  if (limit) {
    productsUrl += `&limit=${limit}`;
  }
  if (product_ids) {
    productsUrl += `&id:not_in=${product_ids}`;
  }
  const additionalProducts = await httpGet(productsUrl, {
    isBigCommerce: true,
  });
  return res.json(additionalProducts);
};
