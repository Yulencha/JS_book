function filterRange(arr, a, b) {
  let filterArr = [];
  arr.forEach((element) => {
    if (element >= a && element <= b) {
      filterArr.push(element);
    }
  });
  return filterArr;
}
