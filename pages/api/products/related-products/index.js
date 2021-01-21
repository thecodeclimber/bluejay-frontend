import { httpGet } from "../../../../utils/https";
import URLS from "../../../../utils/urls";
import { verifyGetMethod } from "../../../../utils/helper";

export default async (req, res) => {
  if (!verifyGetMethod(req, res)) return;
  let { product_id } = req.query || {};
  const productsUrl = `${URLS.BIG_COMMERCE.PRODUCT.PRODUCTS}?id:in=${product_id}&include=primary_image`;
  const products = await httpGet(productsUrl, { isBigCommerce: true });
  if (products.status === 401) {
    res.status(401);
    res.json({
      errors: {
        error: MESSAGES.UNAUTHORIZED,
      },
    });
    return;
  }
  const productsData = [];
  if (products?.data && products.data.length > 0) {
    const productsList = products.data.map((data) => {
      return {
        id: data.id,
        name: data.name,
        price: data.price,
        image: data.primary_image.url_standard,
      };
    });
    productsData.push(...productsList);
  }
  return res.json(productsData);
};
