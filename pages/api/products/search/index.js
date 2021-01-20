import { httpGet } from "../../../../utils/https";
import URLS from "../../../../utils/urls";
import { verifyGetMethod } from "../../../../utils/helper";

export default async (req, res) => {
  if (!verifyGetMethod(req, res)) return;
  let { name, category_id } = req.query || {};
  let productsUrl = URLS.BIG_COMMERCE.PRODUCT.PRODUCTS;

  if (name && category_id) {
    productsUrl += `?categories:in=${category_id}`;
    productsUrl += `&keyword=${name}&limit=5`;
  } else {
    productsUrl += `?keyword=${name}&limit=5`;
  }
  const products = await httpGet(productsUrl, { isBigCommerce: true });
  const productsDetail = [];
  if (products?.data && products.data.length > 0) {
    const product = products.data.map((product) => {
      return {
        name: product.name,
        related_products: [product?.related_products],
      };
    });
    productsDetail.push(...product);
  }
  return res.json(productsDetail);
};
