const leapYear = (year) => {
  if (year % 400 === 0) {
    return "leap year";
  } else if (year % 100 === 0) {
    return "not leap";
  } else if (year % 4 === 0) {
    return "leap year";
  } else {
    return "not leap year";
  }
};

console.log(leapYear(1956));
