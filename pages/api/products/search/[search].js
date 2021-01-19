import { httpGet } from "../../../../utils/https";
import URLS from "../../../../utils/urls";
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
  return res.json(products);
};
