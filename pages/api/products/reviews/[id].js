import { httpGet } from "../../../../utils/https";
import URLS from "../../../../utils/urls";
import { verifyGetMethod } from "../../../../utils/helper";

export default async (req, res) => {
  if (!verifyGetMethod(req, res)) return;
  const { id } = req.query || {};
  if (!id) {
    res.status(400);
    res.json({
      errors: {
        error: "Required product id",
      },
    });
    return;
  }

  const productUrl = URLS.BIG_COMMERCE.PRODUCT.PRODUCTS + "/" + id;
  const product = await httpGet(productUrl, { isBigCommerce: true });
  return res.json(product);
};
