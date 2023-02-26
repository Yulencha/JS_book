function camelize(str) {
  let arr = str.split("-");
  let newArr = arr.map((item, index) =>
    index == 0 ? item : item.charAt(0).toUpperCase() + item.slice(1)
  );
  return newArr.join("");
}
