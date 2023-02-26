function getWeekDay(date) {
  let weekDay = ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"];
  return weekDay[date.getDay()];
}
