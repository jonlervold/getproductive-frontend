const convertPriority = (int) => {
  switch (int) {
    case 1:
      return "Very Low";
    case 2:
      return "Low";
    case 3:
      return "Medium";
    case 4:
      return "High";
    case 5:
      return "Very High";
  }
};

export default convertPriority;
