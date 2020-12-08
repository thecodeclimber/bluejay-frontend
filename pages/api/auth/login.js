import { httpPost, httpGet } from "../../../utils/https";
import URLS from "../../../utils/urls";
import { generateToken, verifyPostMethod } from "../../../utils/helper";
import { MESSAGES } from "../../../utils/constants";

export default async (req, res) => {
  if (!verifyPostMethod(req, res)) return;

  const data = req.body || {};
  const customersUrl = URLS.BIG_COMMERCE.CUSTOMERS.CUSTOMERS;
  const customerData = await httpGet(`${customersUrl}?email:in=${data.email}`, { isBigCommerce: true });
  if (customerData.status === 401) {
    res.status(401);
    res.json({
      "errors": {
        "error": MESSAGES.UNAUTHORIZED
      }
    });
    return;
  }
  if (customerData.data.length === 0) {
    res.status(400);
    res.json({
      "errors": {
        "error": "There’s no account associated with this email address."
      }
    });
    return;
  }

  const customerId = customerData.data[0].id;
  const validatePasswordUrl = URLS.BIG_COMMERCE.CUSTOMERS.VALIDATE_PASSWORD.replace('{CUSTOMER_ID}', customerId);
  const validatePassword = await httpPost(validatePasswordUrl, { password: data.password }, { isBigCommerce: true });
  if (validatePassword.status === 401) {
    res.status(401);
    res.json({
      "errors": {
        "error": "Unauthorized."
      }
    });
    return;
  }
  if (!validatePassword.success) {
    res.status(400);
    res.json({
      "errors": {
        "error": validatePassword.length > 0 && validatePassword[0].message || "Password doesn't match."
      }
    });
    return;
  }

  const token = generateToken(customerId);
  if (!token) {
    res.status(400);
    res.json({
      "errors": {
        "error": "Token generation failed!"
      }
    });
    return;
  }

  const userData = {
    id: customerData.data[0].id,
    email: customerData.data[0].email,
    first_name: customerData.data[0].first_name,
    last_name: customerData.data[0].last_name,
  }

  return res.json({ token, user: userData, message: "User login successfully." });
};