import { httpGet } from "../../../../utils/https";
import URLS from "../../../../utils/urls";
import { MESSAGES } from "../../../../utils/constants";
import { verifyGetMethod } from "../../../../utils/helper";

export default async (req, res) => {
  if (!verifyGetMethod(req, res)) return;
  const { id } = req.query || {};
  if (!id) {
    res.status(400);
    res.json({
      errors: {
        error: "Required category id",
      },
    });
    return;
  }

  const productUrl = `${URLS.BIG_COMMERCE.PRODUCT.PRODUCTS}?categories:in=${id}&limit=6`;
  const productsResponse = await httpGet(productUrl, { isBigCommerce: true });
  if (productsResponse.status === 401) {
    res.status(401);
    res.json({
      errors: {
        error: MESSAGES.UNAUTHORIZED,
      },
    });
    return;
  }

  await Promise.all(
    productsResponse.data.map(async (product, index) => {
      const productImageUrl = `${URLS.BIG_COMMERCE.PRODUCT.PRODUCTS}/${product.id}/images`;
      const productImages = await httpGet(productImageUrl, {
        isBigCommerce: true,
      });
      return (productsResponse.data[index] = {
        ...productsResponse.data[index],
        images: productImages.data,
      });
    })
  );

  return res.json(productsResponse);
};
