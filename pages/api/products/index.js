import { httpGet } from "../../../utils/https";
import URLS from "../../../utils/urls";
import { verifyGetMethod } from "../../../utils/helper";

export default async (req, res) => {
  if (!verifyGetMethod(req, res)) return;
  const productsUrl = `${URLS.BIG_COMMERCE.PRODUCT.PRODUCTS}?include=images`;
  const products = await httpGet(productsUrl, { isBigCommerce: true });
  return res.json(products);
};
