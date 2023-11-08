import consts from "@js/consts.js";

const convertBooleanToStyle = (boolean, falseColorSpec = "neutral") => {
  let falseColor = consts.SCALE_COLOR_NEUTRAL;
  if (falseColorSpec === "red") {
    falseColor = consts.SCALE_COLOR_FIVE;
  }

  const styling = {};

  styling.backgroundColor = falseColor;
  if (boolean) {
    styling.backgroundColor = consts.SCALE_COLOR_ONE;
  }

  return styling;
};

export default convertBooleanToStyle;
