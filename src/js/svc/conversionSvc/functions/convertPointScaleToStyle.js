import consts from "@js/consts.js";

const convertPointScaleToStyle = (int) => {
  const styling = {};
  switch (int) {
    case 1:
      styling.backgroundColor = consts.SCALE_COLOR_ONE;
      break;
    case 2:
      styling.backgroundColor = consts.SCALE_COLOR_TWO;
      break;
    case 3:
      styling.backgroundColor = consts.SCALE_COLOR_THREE;
      break;
    case 4:
      styling.backgroundColor = consts.SCALE_COLOR_FOUR;
      break;
    case 5:
      styling.backgroundColor = consts.SCALE_COLOR_FIVE;
      break;
  }
  return styling;
};

export default convertPointScaleToStyle;
