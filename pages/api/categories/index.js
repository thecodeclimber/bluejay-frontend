import { httpGet } from "../../../utils/https";
import URLS from "../../../utils/urls";
import { verifyGetMethod } from "../../../utils/helper";

export default async (req, res) => {
  if (!verifyGetMethod(req, res)) return;
  const categoriesUrl = URLS.BIG_COMMERCE.CATEGORY.CATEGORIES;
  const categories = await httpGet(categoriesUrl, { isBigCommerce: true });
  if (categories && categories?.data && categories.data.length > 0) {
    await Promise.all(
      categories.data.map(async (category, index) => {
        const productUrl = `${URLS.BIG_COMMERCE.PRODUCT.PRODUCTS}?categories:in=${category?.id}&limit=1`;
        const products = await httpGet(productUrl, {
          isBigCommerce: true,
        });
        return (categories.data[index] = {
          ...categories.data[index],
          total_products: products?.meta?.pagination?.total || 0,
        });
      })
    );
  }
  return res.json(categories);
};
