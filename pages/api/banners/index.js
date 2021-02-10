import { httpGet } from "../../../utils/https";
import URLS from "../../../utils/urls";
import { verifyGetMethod } from "../../../utils/helper";

export default async (req, res) => {
  if (!verifyGetMethod(req, res)) return;
  const bannersUrl = `${URLS.BIG_COMMERCE.BANNER.BANNERS}`;
  const banners = await httpGet(bannersUrl, { isBigCommerce: true });
  return res.json(banners);
};
