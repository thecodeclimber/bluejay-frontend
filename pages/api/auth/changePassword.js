import { httpPut, httpGet } from '../../../utils/https';
import URLS from '../../../utils/urls';

export default async (req, res) => {
  if (req.method !== 'PUT') {
    res.status = 500;
    res.json('Something went wrong');
    return;
  }

  const data = req.body || {};
  const customersUrl = URLS.BIG_COMMERCE.CUSTOMERS.CUSTOMERS;
  const userExist = await httpGet(`${customersUrl}?id:in=${data.id}`, { isBigCommerce: true });
  if (userExist.status === 401) {
    res.status(401);
    res.json({
      "errors": {
        "error": "Unauthorized."
      }
    });
    return;
  }
  if (userExist?.data && userExist.data.length === 0) {
    res.json({
      "errors": {
        "error": `User does not exist`
      }
    });
    return;
  }

  const params = [{
    id: data.id,
    authentication: {
      force_password_reset: true,
      new_password: data.authentication.new_password
    },
  }];
  const customerResponse = await httpPut(customersUrl, params, { isBigCommerce: true });
  res.json(customerResponse);
};