//Используя функцию if...else,
//напишите код, который будет спрашивать:
//"Какое официальное название JavaScript?"
//Если пользователь вводит "ECMAScript",
//то показать через alert: "Верно!"
//в противном случае отобразить:"Не знаете? ECMAScript!"

// const answer = prompt('Яка офіційна назва JavaScript?');
// // if (answer === "ECMAScript") {
// //     alert("Вірно")
// // } else {
// //     alert("Не знаете? ECMAScript!")
// // }
// // let message = 'Не знаете? ECMAScript!';

// // answer === 'ECMAScript' ? message = 'Вірно' : message;

// // alert(message);

// alert(answer === 'ECMAScript' ? 'Вірно' : 'Не знаете? ECMAScript!');

// 2 && 1 && null && 0 && undefined
// console.log(2 && 1 && null && 0 && undefined);

//Напишите программу, которая получит от пользователя
//число (количество минут) и выведет в консоль
//строку в формате часов и минут
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
// 70 === 01:10
// const globalMinutes = 90;
// let hours = Math.floor(globalMinutes / 60);
// let minutes = globalMinutes % 60;
// minutes = String(minutes).padStart(2, "0");

// // hours.padStart(2, "0");
// hours = String(hours).padStart(2, "0");
// console.log(`${hours} : ${minutes}`);

// Напишите цикл, который выводит в консоль
//числа от max до min по убыванию
// Додайте все четные числа от min до max
const max = 50;
const min = 23;
let total = 0;
for (let i = max; i >= min; i -= 1) {
  if (i % 2 !== 0) {
    continue;
  }
  total += i;
}
console.log(total);
