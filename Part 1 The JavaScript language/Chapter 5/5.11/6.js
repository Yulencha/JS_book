function getSecondsToday() {
  let date = new Date();
  let sec = date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds();
  return sec;
}
