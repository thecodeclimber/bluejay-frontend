import { httpGet } from "../../../../utils/https";
import URLS from "../../../../utils/urls";
import { MESSAGES } from "../../../../utils/constants";
import { verifyGetMethod } from "../../../../utils/helper";

export default async (req, res) => {
  if (!verifyGetMethod(req, res)) return;
  let { search } = req.query || {};
  let searchParams;
  if (search) {
    searchParams = JSON.parse(search);
  }

  let productsUrl = URLS.BIG_COMMERCE.PRODUCT.PRODUCTS;
  if (searchParams?.name) {
    productsUrl += `?name=${searchParams.name}`;
  }
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