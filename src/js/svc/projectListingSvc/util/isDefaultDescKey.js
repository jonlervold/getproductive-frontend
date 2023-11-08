const isDefaultDescKey = (sortKey) => {
  const defaultDescKeys = [
    "priority",
    "difficulty",
    "length",
    "created",
    "deadline",
    "isStarted",
  ];
  return defaultDescKeys.includes(sortKey);
};

export default isDefaultDescKey;
