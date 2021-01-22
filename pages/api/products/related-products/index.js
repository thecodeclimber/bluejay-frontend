import { httpGet } from "../../../../utils/https";
import URLS from "../../../../utils/urls";
import { verifyGetMethod } from "../../../../utils/helper";

export default async (req, res) => {
  if (!verifyGetMethod(req, res)) return;
  let { product_ids, limit } = req.query || {};
  let productsUrl = `${URLS.BIG_COMMERCE.PRODUCT.PRODUCTS}?include=primary_image`;
  if (product_ids) {
    productsUrl += `&id:in=${product_ids}`;
  }
  productsUrl += `&limit=${limit || 10}`;
  const products = await httpGet(productsUrl, { isBigCommerce: true });
  if (products?.data && products.data.length > 0) {
    const productsList = products.data.map((data) => {
      return {
        id: data.id,
        name: data.name,
        price: data.price,
        image: data.primary_image.url_standard,
      };
    });
    return res.json(productsList);
  }
  return res.json(products);
};
