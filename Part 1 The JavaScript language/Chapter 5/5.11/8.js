function formatDate(date) {
  let sub = new Date() - date;
  let sec = Math.floor(sub / 1000);
  let min = Math.floor(sub / 60000);
  if (sub < 1000) {
    return "прямо сейчас";
  } else if (sec < 60) {
    return `${sec} сек. назад`;
  } else if (min < 60) {
    return `${min} мин. назад`;
  } else {
    let yy = String(date.getFullYear()).slice(-2);
    let mm =
      date.getMonth() + 1 > 9 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`;
    let dd = date.getDate() > 9 ? date.getDate() : `0${date.getDate()}`;
    let hh = date.getHours() > 9 ? date.getHours() : `0${date.getHours()}`;
    let mn =
      date.getMinutes() > 9 ? date.getMinutes() : `0${date.getMinutes()}`;
    return `${dd}.${mm}.${yy} ${hh}:${mn}`;
  }
}
