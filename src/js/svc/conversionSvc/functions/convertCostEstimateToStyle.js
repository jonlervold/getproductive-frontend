import consts from "@js/consts.js";

const convertCostEstimateToStyle = (costEstimate) => {
  const styling = {};

  styling.backgroundColor = consts.SCALE_COLOR_ONE;

  if (costEstimate >= 10) {
    styling.backgroundColor = consts.SCALE_COLOR_TWO;
  }
  if (costEstimate >= 100) {
    styling.backgroundColor = consts.SCALE_COLOR_THREE;
  }
  if (costEstimate >= 300) {
    styling.backgroundColor = consts.SCALE_COLOR_FOUR;
  }
  if (costEstimate >= 1000) {
    styling.backgroundColor = consts.SCALE_COLOR_FIVE;
  }
  if (costEstimate < 0) {
    styling.backgroundColor = consts.SCALE_COLOR_NEGATIVE_COST;
  }

  return styling;
};

export default convertCostEstimateToStyle;
