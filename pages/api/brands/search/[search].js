import { httpGet } from "../../../../utils/https";
import URLS from "../../../../utils/urls";
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
  return res.json(brands);
};
