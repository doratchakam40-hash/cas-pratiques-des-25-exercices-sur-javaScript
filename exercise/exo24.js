const daysUntilChristmas = () => {
     const today = new Date();
  let year = today.getFullYear();
  let christmas = new Date(year, 11, 25);
  if (today > christmas) {
    christmas = new Date(year + 1, 11, 25);
}
const diffTime = christmas - today;
const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  return diffDays;
}
console.log("Days left until Christmas:", daysUntilChristmas());
