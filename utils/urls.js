const BIG_COMMERCE_URL = process.env.NEXT_PUBLIC_BIG_COMMERCE_URL;
const BIG_COMMERCE_APP_PREFIX = "stores";
const BIG_COMMERCE_STORE_HASH = process.env.NEXT_PUBLIC_BIG_COMMERCE_STORE_HASH;
const BIG_COMMERCE_VERSION_2 = "v2";
const BIG_COMMERCE_VERSION_3 = "v3";
const BIG_COMMERCE_BASE_URL = `${BIG_COMMERCE_URL}/${BIG_COMMERCE_APP_PREFIX}/${BIG_COMMERCE_STORE_HASH}/${BIG_COMMERCE_VERSION_3}`;
const NEXT_ORIGIN = process.env.NEXT_PUBLIC_NEXT_URL || "";
const NEXT_PREFIX = "api";
const NEXT_BASE_URL = `${NEXT_ORIGIN}/${NEXT_PREFIX}`;

const URLS = {
  //Big_ commerce
  BIG_COMMERCE: {
    // Customers
    CUSTOMERS: {
      CUSTOMERS: `${BIG_COMMERCE_BASE_URL}/customers`,
      VALIDATE_PASSWORD: `${BIG_COMMERCE_BASE_URL.replace(
        BIG_COMMERCE_VERSION_3,
        BIG_COMMERCE_VERSION_2
      )}/customers/{CUSTOMER_ID}/validate`,
      ATTRIBUTES: `${BIG_COMMERCE_BASE_URL}/customers/attributes`,
    },
    CATEGORY: {
      CATEGORIES: `${BIG_COMMERCE_BASE_URL}/catalog/categories`,
    },
    PRODUCT: {
      PRODUCTS: `${BIG_COMMERCE_BASE_URL}/catalog/products`,
      IMAGES: `${BIG_COMMERCE_BASE_URL}/catalog/products/{PRODUCT_ID}/images`,
      VIDEOS: `${BIG_COMMERCE_BASE_URL}/catalog/products/{PRODUCT_ID}/videos`,
      OPTIONS: `${BIG_COMMERCE_BASE_URL}/catalog/products/{PRODUCT_ID}/options`,
      REVIEWS: `${BIG_COMMERCE_BASE_URL}/catalog/products/{PRODUCT_ID}/reviews`,
    },
    BRAND: {
      BRANDS: `${BIG_COMMERCE_BASE_URL}/catalog/brands`,
    },
    WISHLIST: {
      WISHLISTS: `${BIG_COMMERCE_BASE_URL}/wishlists`,
    },
    CART: {
      CART: `${BIG_COMMERCE_BASE_URL}/carts`,
      ITEM: `${BIG_COMMERCE_BASE_URL}/carts/{CART_ID}/items`,
    },
  },

  //Next
  NEXT: {
    AUTH: {
      REGISTER: `${NEXT_BASE_URL}/auth/register`,
      LOGIN: `${NEXT_BASE_URL}/auth/login`,
      CHANGE_PASSWORD: `${NEXT_BASE_URL}/auth/password/change`,
      FORGOT_PASSWORD: `${NEXT_BASE_URL}/auth/password/forgot`,
    },
    CATEGORY: {
      CATEGORIES: `${NEXT_BASE_URL}/categories`,
      POPULAR: `${NEXT_BASE_URL}/categories/popular`,
      PRODUCTS: `${NEXT_BASE_URL}/categories/products`,
    },
    PRODUCT: {
      PRODUCTS: `${NEXT_BASE_URL}/products`,
      SEARCH: `${NEXT_BASE_URL}/products/search`,
      BEST: `${NEXT_BASE_URL}/products/best`,
      FEATURED: `${NEXT_BASE_URL}/products/featured`,
      TOP_DEALS: `${NEXT_BASE_URL}/products/top-deals`,
      PURCHASED: `${NEXT_BASE_URL}/products/purchased`,
      ADDITIONAL: `${NEXT_BASE_URL}/products/additional`,
    },
    BRAND: {
      BRANDS: `${NEXT_BASE_URL}/brands`,
      SEARCH: `${NEXT_BASE_URL}/brands/search`,
    },
    REVIEW: {
      REVIEWS: `${NEXT_BASE_URL}/products/reviews`,
    },
    CART: {
      CART: `${NEXT_BASE_URL}/cart`,
      ADD: `${NEXT_BASE_URL}/cart/add`,
      DELETE: `${NEXT_BASE_URL}/cart/delete`,
      UPDATE: `${NEXT_BASE_URL}/cart/update`,
    },
  },
};

export default URLS;
