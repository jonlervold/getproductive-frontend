import convertPriority from "@conversionSvc/functions/convertPriority.js";
import convertDifficulty from "@conversionSvc/functions/convertDifficulty.js";
import convertLength from "@conversionSvc/functions/convertLength.js";
import convertCategories from "@conversionSvc/functions/convertCategories";
import convertDateTime from "@conversionSvc/functions/convertDateTime";
import convertDatestampToRelativeDays from "@conversionSvc/functions/convertDatestampToRelativeDays";
import convertPointScaleToStyle from "@conversionSvc/functions/convertPointScaleToStyle";
import convertCreatedDateToStyle from "@conversionSvc/functions/convertCreatedDateToStyle";
import convertDeadlineDateToStyle from "@conversionSvc/functions/convertDeadlineDateToStyle";
import convertHtmlEncodedString from "@conversionSvc/functions/convertHtmlEncodedString";
import convertToUnixTimestamp from "@conversionSvc/functions/convertToUnixTimestamp";
import convertBooleanToStyle from "@conversionSvc/functions/convertBooleanToStyle";
import convertCostEstimateToStyle from "@conversionSvc/functions/convertCostEstimateToStyle";
import convertBooleanToYesNo from "@conversionSvc/functions/convertBooleanToYesNo";

const conversionSvc = {
  convertPriority,
  convertDifficulty,
  convertLength,
  convertCategories,
  convertDateTime,
  convertDatestampToRelativeDays,
  convertPointScaleToStyle,
  convertCreatedDateToStyle,
  convertDeadlineDateToStyle,
  convertHtmlEncodedString,
  convertToUnixTimestamp,
  convertBooleanToStyle,
  convertCostEstimateToStyle,
  convertBooleanToYesNo,
};

export default conversionSvc;
