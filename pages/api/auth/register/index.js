import { httpPost, httpGet } from "../../../../utils/https";
import URLS from "../../../../utils/urls";
import { verifyPostMethod } from "../../../../utils/helper";
import { MESSAGES } from "../../../../utils/constants";

const moment = require("moment");

export default async (req, res) => {
  if (!verifyPostMethod(req, res)) return;

  const customersUrl = URLS.BIG_COMMERCE.CUSTOMERS.CUSTOMERS;
  const emailExist = await httpGet(`${customersUrl}?email:in=${req.body.email}`, { isBigCommerce: true });

  if (emailExist.status === 401) {
    res.status(401);
    res.json({
      "errors": {
        "error": MESSAGES.UNAUTHORIZED
      }
    });
    return;
  }
  if (emailExist.data.length > 0) {
    res.status(400);
    res.json({
      "errors": {
        "email": `${emailExist.data[0].email} already in use`
      }
    });
    return;
  }

  const attributeParams = [
    {
      "name": `attr-${Date.now() + 100}`,
      "type": "date"
    }
  ];
  const attrResponse = await httpPost(URLS.BIG_COMMERCE.CUSTOMERS.ATTRIBUTES, attributeParams, { isBigCommerce: true });
  if (attrResponse.status === 401) {
    res.status(401);
    res.json({
      "errors": {
        "error": MESSAGES.UNAUTHORIZED
      }
    });
    return;
  }
  if (attrResponse.status === 422) {
    res.status(422);
    res.json(attrResponse);
    return;
  }

  const data = req.body || {};
  const params = [{
    first_name: data.first_name,
    last_name: data.last_name,
    email: data.email,
    address: {
      first_name: data.address?.first_name,
      last_name: data.address?.last_name,
      city: data.address?.city,
      country_code: data.address?.country_code,
      state_or_province: data.address?.state_or_province,
      address1: data.address?.address1,
      postal_code: data.address?.postal_code,
    },
    attributes: [
      {
        attribute_id: attrResponse?.data[0]?.id,
        attribute_value: moment(new Date()).format("YYYY/MM/DD"),
      }
    ],
    authentication: {
      new_password: data.authentication.new_password
    },
  }];
  const customerResponse = await httpPost(customersUrl, params, { isBigCommerce: true });
  if (customerResponse.status === 401) {
    res.status(401);
    res.json({
      "errors": {
        "error": MESSAGES.UNAUTHORIZED
      }
    });
    return;
  }
  return res.json(customerResponse);
};