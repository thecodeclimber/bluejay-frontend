import { httpGet } from "../../../utils/https";
import URLS from "../../../utils/urls";
import { verifyGetMethod } from "../../../utils/helper";

export default async (req, res) => {
  if (!verifyGetMethod(req, res)) return;
  const { id } = req.query || {};
  if (!id) {
    res.status(400);
    res.json({
      errors: {
        error: "Required brand id",
      },
    });
    return;
  }

  const brandUrl = URLS.BIG_COMMERCE.BRAND.BRANDS + "/" + id;
  const brand = await httpGet(brandUrl, { isBigCommerce: true });
  return res.json(brand);
};
