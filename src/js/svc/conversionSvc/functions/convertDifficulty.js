const convertDifficulty = (int) => {
  switch (int) {
    case 1:
      return "Very Easy";
    case 2:
      return "Easy";
    case 3:
      return "Medium";
    case 4:
      return "Hard";
    case 5:
      return "Very Hard";
  }
};

export default convertDifficulty;
