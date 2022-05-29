//Используя функцию if...else,
//напишите код, который будет спрашивать:
//"Какое официальное название JavaScript?"
//Если пользователь вводит "ECMAScript",
//то показать через alert: "Верно!"
//в противном случае отобразить:"Не знаете? ECMAScript!"

const answer = prompt('Яка офіційна назва JavaScript?');
// if (answer === "ECMAScript") {
//     alert("Вірно")
// } else {
//     alert("Не знаете? ECMAScript!")
// }
// let message = 'Не знаете? ECMAScript!';

// answer === 'ECMAScript' ? message = 'Вірно' : message;

// alert(message);

alert(answer === 'ECMAScript' ? 'Вірно' : 'Не знаете? ECMAScript!');