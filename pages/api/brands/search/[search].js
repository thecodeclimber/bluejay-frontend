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

  let brandUrl = URLS.BIG_COMMERCE.BRAND.BRANDS;
  if (searchParams?.name) {
    brandUrl += `?name=${searchParams.name}`;
  }
  const brands = await httpGet(brandUrl, { isBigCommerce: true });
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
