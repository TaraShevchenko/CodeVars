function mostFrequentDays(year) {
  const date = new Date(year, 0, 1);
  const dayIndex = date.getDay() - 1 < 0 ? 6 : date.getDay() - 1;
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  if (year % 4 || year === 1900 || year === 1800 || year === 1700) {
    return [days[dayIndex]];
  }
  return [dayIndex, date.getDay()]
    .sort(function (a, b) {return a - b;})
    .map(el => days[el]);
}

console.log(mostFrequentDays(1900));
