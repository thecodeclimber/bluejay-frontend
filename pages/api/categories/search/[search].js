import { httpGet } from "../../../../utils/https";
import URLS from "../../../../utils/urls";
import { MESSAGES } from "../../../../utils/constants";
import { verifyGetMethod } from "../../../../utils/helper";

export default async (req, res) => {
  if (!verifyGetMethod(req, res)) return;
  let { search } = req.query || {};
  let searchParams;
  if (search) {
    searchParams = JSON.parse(search);
  }

  let categoriesUrl = URLS.BIG_COMMERCE.CATEGORY.CATEGORIES;
  if (searchParams?.name) {
    categoriesUrl += `?name=${searchParams.name}`;
  }
  const categories = await httpGet(categoriesUrl, { isBigCommerce: true });
  if (categories.status === 401) {
    res.status(401);
    res.json({
      errors: {
        error: MESSAGES.UNAUTHORIZED,
      },
    });
    return;
  }
  return res.json(categories);
};
