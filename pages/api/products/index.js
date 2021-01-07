import { httpGet } from "../../../utils/https";
import URLS from "../../../utils/urls";
import { MESSAGES } from "../../../utils/constants";
import { verifyGetMethod } from "../../../utils/helper";

export default async (req, res) => {
  if (!verifyGetMethod(req, res)) return;

  const productsUrl = URLS.BIG_COMMERCE.PRODUCT.PRODUCTS;
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

  const imagesUrl = URLS.BIG_COMMERCE.PRODUCT.IMAGES;
  const productsWithImages = [];
  if (products && products.data && products.data.length > 0) {
    await products.data.map(async (data, index) => {
      const productimagesUrl = imagesUrl.replace("{PRODUCT_ID}", data.id);
      const productImages = await httpGet(productimagesUrl, {
        isBigCommerce: true,
      });
      const updatedProduct = {
        ...products.data[index],
        product_images: productImages,
      };
      productsWithImages.push(updatedProduct);
    });
  }
  console.log("productsWithImages====>>>>", productsWithImages);

  return res.json(productsWithImages);
};
