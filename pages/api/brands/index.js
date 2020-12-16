import { httpGet } from "../../../utils/https";
import URLS from "../../../utils/urls";
import { MESSAGES } from "../../../utils/constants";
import { verifyGetMethod } from "../../../utils/helper";

export default async (req, res) => {
  if (!verifyGetMethod(req, res)) return;

  const brandsUrl = URLS.BIG_COMMERCE.BRAND.BRANDS;
  const brands = await httpGet(brandsUrl, { isBigCommerce: true });
  if (brands.status === 401) {
    res.status(401);
    res.json({
      errors: {
        error: MESSAGES.UNAUTHORIZED,
      },
    });
    return;
  }
  return res.json(brands);
};
