function printList1(list) {
  let arr = [];
  while (list) {
    arr.push(list.value);
    list = list.next;
  }
  let i = arr.length - 1;
  while (i >= 0) {
    console.log(arr[i]);
    i--;
  }
}

function printList2(list) {
  if (list.next) {
    printList2(list.next);
  }
  console.log(list.value);
}

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};
printList1(list);
printList2(list);
