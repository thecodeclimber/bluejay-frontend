import { httpGet } from "../../../utils/https";
import URLS from "../../../utils/urls";
import { verifyGetMethod } from "../../../utils/helper";

export default async (req, res) => {
  if (!verifyGetMethod(req, res)) return;
  const brandsUrl = URLS.BIG_COMMERCE.BRAND.BRANDS;
  const brands = await httpGet(brandsUrl, { isBigCommerce: true });
  return res.json(brands);
};
