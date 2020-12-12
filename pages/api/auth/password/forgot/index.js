import { httpGet } from "../../../../../utils/https";
import URLS from "../../../../../utils/urls";
import { generateToken, verifyPostMethod } from "../../../../../utils/helper";
import { sendConfirmationEmail } from "../../../../../utils/mailer";

export default async (req, res) => {
  if (!verifyPostMethod(req, res)) return;

  const customersUrl = URLS.BIG_COMMERCE.CUSTOMERS.CUSTOMERS;
  const customer = await httpGet(`${customersUrl}?email:in=${req.body.email}`, { isBigCommerce: true });
  if (customer.data.length === 0) {
    res.status(400);
    res.json({
      "errors": {
        "email": `There’s no account associated with this email address.`
      }
    });
    return;
  }

  const customerId = customer.data[0].id;
  const token = generateToken(customerId);
  const userData = {
    token,
    email: customer.data[0].email,
  }

  const resetPasswordLink = await sendConfirmationEmail(userData);
  return res.json({
    message: "Reset password link send successfully to your email account.",
    data: resetPasswordLink,
  });
};