let table = document.body.firstElementChild.firstElementChild;
for (let i = 0; i < table.children.length; i++) {
  table.children[i].children[i].style.backgroundColor = "red";
}
