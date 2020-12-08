import { httpGet } from "../../utils/https";
import URLS from "../../utils/urls";
import { MESSAGES } from "../../utils/constants";
import { verifyGetMethod } from "../../utils/helper";

export default async (req, res) => {
  if (!verifyGetMethod(req, res)) return;

  const productsUrl = URLS.BIG_COMMERCE.PRODUCT.PRODUCTS;
  const products = await httpGet(productsUrl, { isBigCommerce: true });
  if (products.status === 401) {
    res.status(401);
    res.json({
      "errors": {
        "error": MESSAGES.UNAUTHORIZED
      }
    });
    return;
  }
  return res.json(products);
};