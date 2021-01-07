import { httpGet } from "../../../../utils/https";
import URLS from "../../../../utils/urls";
import { MESSAGES } from "../../../../utils/constants";
import { verifyGetMethod } from "../../../../utils/helper";

export default async (req, res) => {
  if (!verifyGetMethod(req, res)) return;
  const productsUrl = `${URLS.BIG_COMMERCE.PRODUCT.PRODUCTS}?limit=5`;
  const bestProduct = await httpGet(productsUrl, { isBigCommerce: true });
  if (bestProduct.status === 401) {
    res.status(401);
    res.json({
      errors: {
        error: MESSAGES.UNAUTHORIZED,
      },
    });
    return;
  }

  await Promise.all(
    bestProduct.data.map(async (product, index) => {
      const productImageUrl = `${URLS.BIG_COMMERCE.PRODUCT.PRODUCTS}/${product.id}/images`;
      const productImages = await httpGet(productImageUrl, {
        isBigCommerce: true,
      });
      return (bestProduct.data[index] = {
        ...bestProduct.data[index],
        images: productImages.data,
      });
    })
  );

  return res.json(bestProduct);
};
