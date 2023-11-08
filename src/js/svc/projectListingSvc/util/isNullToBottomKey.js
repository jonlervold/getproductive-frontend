const isNullToBottomKey = (sortKey) => {
  const stringSortKeys = ["created", "deadline", "completed"];
  return stringSortKeys.includes(sortKey);
};

export default isNullToBottomKey;
