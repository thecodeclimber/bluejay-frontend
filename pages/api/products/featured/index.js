import { httpGet } from "../../../../utils/https";
import URLS from "../../../../utils/urls";
import { verifyGetMethod } from "../../../../utils/helper";

export default async (req, res) => {
  if (!verifyGetMethod(req, res)) return;
  const { limit } = req.query || {};
  let productsUrl = `${URLS.BIG_COMMERCE.PRODUCT.PRODUCTS}?include=primary_image&is_featured=1`;
  if (limit) {
    productsUrl += `&limit=${limit}`;
  }
  const featuredProduct = await httpGet(productsUrl, { isBigCommerce: true });
  return res.json(featuredProduct);
};
