import { httpGet } from "../../../../utils/https";
import URLS from "../../../../utils/urls";
import { verifyGetMethod } from "../../../../utils/helper";

export default async (req, res) => {
  if (!verifyGetMethod(req, res)) return;
  let { name, category_id, limit } = req.query || {};
  let productsUrl = `${URLS.BIG_COMMERCE.PRODUCT.PRODUCTS}?include=primary_image`;

  if (category_id) {
    productsUrl += `&categories:in=${category_id}`;
  }
  if (name) {
    productsUrl += `&keyword=${name}`;
  }
  productsUrl += `&limit=${limit || 10}`;

  const products = await httpGet(productsUrl, {
    isBigCommerce: true,
  });
  if (products?.data && products.data.length > 0) {
    const productList = products.data.map((product) => {
      return {
        id: product.id,
        name: product.name,
        image: product?.primary_image?.url_tiny,
        custom_url: product?.custom_url?.url,
        related_products: product?.related_products || [],
      };
    });
    return res.json({ data: productList });
  }
  return res.json(products);
};
