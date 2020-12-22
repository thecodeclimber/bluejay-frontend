import { httpPut, httpGet } from "../../../../../utils/https";
import URLS from "../../../../../utils/urls";
import { verifyPutMethod, verifyToken } from "../../../../../utils/helper";
import { MESSAGES } from "../../../../../utils/constants";

export default async (req, res) => {
  try {
    if (!verifyPutMethod(req, res)) return;

    const token = verifyToken(req);
    if (!token) {
      res.status(404);
      res.json({
        errors: {
          error: MESSAGES.UNAUTHORIZED,
        },
      });
      return;
    }

    const data = req.body || {};
    const customersUrl = URLS.BIG_COMMERCE.CUSTOMERS.CUSTOMERS;
    const userExist = await httpGet(
      `${customersUrl}?id:in=${token.customer_id}`,
      { isBigCommerce: true }
    );

    if (userExist.status === 401) {
      res.status(401);
      res.json({
        errors: {
          error: MESSAGES.UNAUTHORIZED,
        },
      });
      return;
    }

    if (userExist?.data && userExist.data.length === 0) {
      res.status(404);
      res.json({
        errors: {
          error: `User does not exist`,
        },
      });
      return;
    }

    const params = [
      {
        id: token.customer_id,
        authentication: {
          force_password_reset: true,
          new_password: data.authentication.new_password,
        },
      },
    ];
    const customerResponse = await httpPut(customersUrl, params, {
      isBigCommerce: true,
    });

    return res.json(customerResponse);
  } catch (err) {
    res.status(500);
    res.json({
      errors: {
        error: MESSAGES.INTERNAL_ERROR,
      },
    });
  }
};
