import { httpGet } from "../../../../utils/https";
import URLS from "../../../../utils/urls";
import { verifyGetMethod } from "../../../../utils/helper";

export default async (req, res) => {
  if (!verifyGetMethod(req, res)) return;
  let { name, category_id, limit, direction, sort, include, page } =
    req.query || {};
  let productsUrl = `${URLS.BIG_COMMERCE.PRODUCT.PRODUCTS}?include=${
    include || "primary_image"
  }`;
  if (category_id) {
    productsUrl += `&categories:in=${category_id}`;
  }
  if (name) {
    productsUrl += `&keyword=${name}`;
  }
  if (sort) {
    productsUrl += `&sort=${sort}`;
  }
  if (direction) {
    productsUrl += `&direction=${direction}`;
  }
  productsUrl += `&limit=${limit || 20}`;
  if (page) productsUrl += `&page=${page}`;
  const products = await httpGet(productsUrl, { isBigCommerce: true });
  return res.json(products);
};
