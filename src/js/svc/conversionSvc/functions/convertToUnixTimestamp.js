const convertToUnixTimestamp = (date) => {
  return !date ? null : Math.floor(new Date(date));
};

export default convertToUnixTimestamp;
