import { httpGet } from "../../../utils/https";
import URLS from "../../../utils/urls";
import { MESSAGES } from "../../../utils/constants";
import { verifyGetMethod } from "../../../utils/helper";

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
  if (product.status === 401) {
    res.status(401);
    res.json({
      errors: {
        error: MESSAGES.UNAUTHORIZED,
      },
    });
    return;
  }

  const productImageUrl = `${URLS.BIG_COMMERCE.PRODUCT.PRODUCTS}/${id}/images`;
  const productImages = await httpGet(productImageUrl, {
    isBigCommerce: true,
  });

  product.data = { ...product.data, images: productImages.data };

  return res.json(product);
};
