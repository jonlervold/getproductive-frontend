import isDefaultDescKey from "../util/isDefaultDescKey";

const getCaretDirection = (key) => {
  if (key === "deadline") {
    return false;
  }
  return isDefaultDescKey(key);
};

export default getCaretDirection;
