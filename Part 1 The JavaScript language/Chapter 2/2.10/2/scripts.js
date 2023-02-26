// Используя конструкцию if..else, напишите код, который будет
// спрашивать: „Какое «официальное» название JavaScript?“

// Если пользователь вводит «ECMAScript», то показать:
// «Верно!», в противном случае – отобразить: «Не знаете? ECMAScript!»

let answer = prompt("Какое «официальное» название JavaScript?");
const nameJS = "ECMAScript";
let result = answer == nameJS ? "Верно!" : `Не знаете? ${nameJS}`;
alert(result);
