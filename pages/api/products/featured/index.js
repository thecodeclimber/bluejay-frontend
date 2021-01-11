import { httpGet } from "../../../../utils/https";
import URLS from "../../../../utils/urls";
import { MESSAGES } from "../../../../utils/constants";
import { verifyGetMethod } from "../../../../utils/helper";

export default async (req, res) => {
  if (!verifyGetMethod(req, res)) return;
  const { limit } = req.query || {};
  let productsUrl = `${URLS.BIG_COMMERCE.PRODUCT.PRODUCTS}?include=primary_image&is_featured=1`;
  if (limit) {
    productsUrl += `&limit=${limit}`;
  }
  const featuredProduct = await httpGet(productsUrl, { isBigCommerce: true });
  if (featuredProduct.status === 401) {
    res.status(401);
    res.json({
      errors: {
        error: MESSAGES.UNAUTHORIZED,
      },
    });
    return;
  }
  return res.json(featuredProduct);
};
