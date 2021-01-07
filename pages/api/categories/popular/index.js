import { httpGet } from "../../../../utils/https";
import URLS from "../../../../utils/urls";
import { MESSAGES } from "../../../../utils/constants";
import { verifyGetMethod } from "../../../../utils/helper";

export default async (req, res) => {
  if (!verifyGetMethod(req, res)) return;

  const categoriesUrl = URLS.BIG_COMMERCE.CATEGORY.CATEGORIES + "?limit=4";
  const popularCategories = await httpGet(categoriesUrl, {
    isBigCommerce: true,
  });
  if (popularCategories.status === 401) {
    res.status(401);
    res.json({
      errors: {
        error: MESSAGES.UNAUTHORIZED,
      },
    });
    return;
  }
  await Promise.all(
    popularCategories.data.map(async (category, index) => {
      const productsUrl = `${URLS.BIG_COMMERCE.PRODUCT.PRODUCTS}?categories:in=${category.id}&limit=4`;
      const products = await httpGet(productsUrl, { isBigCommerce: true });
      return (popularCategories.data[index] = {
        ...popularCategories.data[index],
        products: products.data,
      });
    })
  );
  return res.json(popularCategories);
};
