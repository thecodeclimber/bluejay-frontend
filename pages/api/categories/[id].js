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
        error: "Required category id",
      },
    });
    return;
  }

  const categoriesUrl = URLS.BIG_COMMERCE.CATEGORY.CATEGORIES + "/" + id;
  const categories = await httpGet(categoriesUrl, { isBigCommerce: true });
  return res.json(categories);
};
