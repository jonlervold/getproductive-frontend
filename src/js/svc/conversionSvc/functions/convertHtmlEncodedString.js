const convertHtmlEncodedString = (encodedString) => {
  const parser = new DOMParser();
  const parsed = parser.parseFromString(encodedString, "text/html");
  return parsed.documentElement.textContent;
};

export default convertHtmlEncodedString;
