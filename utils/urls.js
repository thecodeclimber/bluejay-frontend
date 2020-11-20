const DOMAIN = "https://api.bigcommerce.com";

const APP_PREFIX = "stores";
const STORE_HASH = "mv5jhw3fj8"
const VERSION = "v3";

const BASE_URL = `${DOMAIN}/${APP_PREFIX}/${STORE_HASH}/${VERSION}`;

const URLS = {
  // Customers
  CUSTOMERS: {
    CUSTOMERS: `${BASE_URL}/customers`,
    ATTRIBUTES: `${BASE_URL}/customers/attributes`
  }
}

export default URLS;