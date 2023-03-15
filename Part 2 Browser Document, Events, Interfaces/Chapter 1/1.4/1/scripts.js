// Как найти?…

// Таблицу с id="age-table".
// Все элементы label внутри этой таблицы (их три).
// Первый td в этой таблице (со словом «Age»).
// Форму form с именем name="search".
// Первый input в этой форме.
// Последний input в этой форме.

let id = document.getElementById("age-table");

let label = id.querySelectorAll("label");

let td = id.querySelector("td");

let form = document.querySelector('form[name="search"]');

let inputFirst = document.querySelector('form[name="search"]').firstElementChild
  .firstElementChild;

let inputLast = document.querySelector('form[name="search"]').lastElementChild;
