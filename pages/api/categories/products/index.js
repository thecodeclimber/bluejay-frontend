import { httpGet } from "../../../../utils/https";
import URLS from "../../../../utils/urls";
import { MESSAGES } from "../../../../utils/constants";
import { verifyGetMethod } from "../../../../utils/helper";

export default async (req, res) => {
  if (!verifyGetMethod(req, res)) return;
  const { id, limit } = req.query || {};
  if (!id) {
    res.status(400);
    res.json({
      errors: {
        error: "Required category id",
      },
    });
    return;
  }

  let productUrl = `${URLS.BIG_COMMERCE.PRODUCT.PRODUCTS}?categories:in=${id}&include=primary_image`;
  if (limit) {
    productUrl += `&limit=${limit}`;
  }
  const productsResponse = await httpGet(productUrl, { isBigCommerce: true });
  return res.json(productsResponse);
};
