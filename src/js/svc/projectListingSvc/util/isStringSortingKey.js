const isStringSortKey = (sortKey) => {
  const stringSortKeys = ["name"];
  return stringSortKeys.includes(sortKey);
};

export default isStringSortKey;
