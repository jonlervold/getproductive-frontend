import consts from "@js/consts.js";

const convertDeadlineDateToStyle = (deadline) => {
  const currentTime = Math.floor(Date.now());

  const oneWeek = 7 * 24 * 60 * 60 * 1000;
  const oneMonthIsh = oneWeek * 4.333;
  const threeMonthsIsh = oneMonthIsh * 3;
  const oneYearIsh = oneMonthIsh * 12;

  const styling = {};

  styling.backgroundColor = consts.SCALE_COLOR_FIVE;

  if (deadline >= currentTime + oneWeek) {
    styling.backgroundColor = consts.SCALE_COLOR_FOUR;
  }
  if (deadline >= currentTime + oneMonthIsh) {
    styling.backgroundColor = consts.SCALE_COLOR_THREE;
  }
  if (deadline >= currentTime + threeMonthsIsh) {
    styling.backgroundColor = consts.SCALE_COLOR_TWO;
  }
  if (deadline >= currentTime + oneYearIsh) {
    styling.backgroundColor = consts.SCALE_COLOR_ONE;
  }

  if (!deadline) {
    styling.backgroundColor = "lightgray";
  }

  return styling;
};

export default convertDeadlineDateToStyle;
