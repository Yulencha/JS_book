function getDateAgo(date, days) {
  let date2 = new Date(date);

  date2.setDate(date.getDate() - days);
  return date2.getDate();
}
