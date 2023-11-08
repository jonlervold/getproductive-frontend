const convertDatestampToRelativeDays = (deadlineTimestamp) => {
  if (!deadlineTimestamp) {
    return null;
  }

  const dateNow = Date.now();
  const deadline = new Date(deadlineTimestamp);

  const remainingMs = deadline - dateNow;
  const msToDays = 1000 * 60 * 60 * 24;
  const remainingDays = Math.round(remainingMs / msToDays);

  let text = "";
  if (remainingDays === 0) {
    text = "Today";
  } else if (remainingDays === 1) {
    text = "Tomorrow";
  } else if (remainingDays === -1) {
    text = "Yesterday";
  } else if (remainingDays < 0) {
    text = remainingDays.toLocaleString().slice(1) + " Days Ago";
  } else {
    text = remainingDays.toLocaleString() + " Days From Now";
  }

  return text;
};

export default convertDatestampToRelativeDays;
