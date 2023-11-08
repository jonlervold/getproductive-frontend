const convertDateTime = (createdTimestamp) => {
  if (!createdTimestamp) {
    return null;
  }

  const created = new Date(createdTimestamp);

  const dateConfig = { year: "numeric", month: "numeric", day: "numeric" };
  const timeConfig = { hour: "numeric", minute: "2-digit", hour12: true };

  const formattedDate = created.toLocaleDateString(undefined, dateConfig);
  const formattedTime = created.toLocaleTimeString(undefined, timeConfig);

  const formattedDateTime = `${formattedDate} ${formattedTime}`;

  return formattedDateTime;
};

export default convertDateTime;
