const BIG_COMMERCE_DOMAIN = "https://api.bigcommerce.com";
const BIG_COMMERCE_APP_PREFIX = "stores";
const BIG_COMMERCE_STORE_HASH = "idgodz44u6";
const BIG_COMMERCE_VERSION = "v3";
const BIG_COMMERCE_BASE_URL = `${BIG_COMMERCE_DOMAIN}/${BIG_COMMERCE_APP_PREFIX}/${BIG_COMMERCE_STORE_HASH}/${BIG_COMMERCE_VERSION}`;
const NEXT_DOMAIN = "http://localhost:3000";
const NEXT_PREFIX = 'api';
const NEXT_BASE_URL = `${NEXT_DOMAIN}/${NEXT_PREFIX}`;

const URLS = {
  //Big_ commerce
  BIG_COMMERCE: {
    // Customers
    CUSTOMERS: {
      CUSTOMERS: `${BIG_COMMERCE_BASE_URL}/customers`,
      ATTRIBUTES: `${BIG_COMMERCE_BASE_URL}/customers/attributes`
    }
  },
  //Next
  NEXT: {
    AUTH: {
      REGISTER: `${NEXT_BASE_URL}/auth/register`,
      LOGIN: `${NEXT_BASE_URL}/auth/login`,
    }
  }
};

export default URLS;
