import consts from "@js/consts.js";

const getApiUrl = () => {
  const currentUrl = new URL(window.location.href);
  return currentUrl.origin.includes(consts.PROD_BASE_URL)
    ? consts.PROD_PHP_URL
    : consts.DEV_PHP_URL;
};

export default getApiUrl;
