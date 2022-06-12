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
// const max = 50;
// const min = 23;
// let total = 0;
// for (let i = max; i >= min; i -= 1) {
//   if (i % 2 !== 0) {
//     continue;
//   }
//   total += i;
// }
// console.log(total);

//task4

//Напишите код, который будет спрашивать
//логин с помощью prompt и логировать результат
//в консоль браузера

//Если посетитель вводит "Админ",
//то prompt запрашивает пароль.
//Если ничего не ввели или нажата клавиша Esc
//вывести стороку "Отменено"
//В противном случае вывксти строку "Я вас не знаю"

//Пароль проверять так:
//Если введён пароль "Я главный",
//то вывести строку "Здравствуйте!"
//иначе выводить строку "Неверный пароль!"

// const loginInput = prompt("Введите свой логин:");

// if (loginInput === "admin" ){
// const passwordInput = prompt("Введіть пароль:")
// if (passwordInput === "Я головний"){
//     console.log("Вітаю!")
// } else if (passwordInput === null ){
// console.log("Відміна")
// } else {
//     console.log("Невірний пароль!")
// }
// } else if (loginInput === null){

//  console.log('Відміна');
// } else {
//     console.log('Я Вас не знаю!')
// }

// switch (loginInput) {
//     case 'admin':
//         const passwordInput = prompt("Введіть пароль:");
//         switch (passwordInput) {
//             case 'Я головний':
//                 console.log("Вітаю!");
//                 break;

//             case null:
//                 console.log("Відміна");
//                 break;

//             default:
//                 console.log("Невірний пароль!");
//                 break;
//         }
//         console.log("Введіть пароль:");
//        break;

//     case null:
//         console.log('Відміна');
//         break;

//     default:
//         console.log('Я Вас не знаю!');
//         break;
// }
//При загрузке страницы пользователю предлагается
//в prompt ввести число. Ввод добавляется к значению
//переменной total.
//Операция ввода числа продолжается до тех пор,
//пока пользователь не нажмет кнопку Cancel в prompt.
//После того как пользователь прекратил ввод нажав на
//кнопку Cancel, показать alert со строкой "Общая сумма введенных чисел равна [число]."
//Делать проверку,что пользователь ввел именно число,
//а не произвольный набор символов, не нужно.
// let userInput = prompt("введіть число");
// let total = 0;
// while (userInput) {
//   total += Number(userInput);
//   userInput = prompt("введіть число");
// }
// console.log(total);

//Создайте массив styles с элементами «Джаз» и «Блюз».
//Добавьте «Рок-н-ролл» в конец.
//Замените значение «Блюз» на «Классика».
//Удалите первый элемент массива и выведите его в консоль.
//Вставьте «Рэп» и «Регги» в начало массива.

// const styles = ['Джаз', 'Блюз']

// console.log(styles.push('Рок-н-ролл'))
// // console.log(styles)

// // styles[1] = 'Классика';
// // console.log(styles)
// const index = styles.indexOf('Блюз')

// styles[index] = 'Классика';

// // console.log(styles)

// // styles.shift()

// console.log(styles.shift())

// // styles.unshift('Рэп', 'Регги')

// styles.splice(0, 0, 'Рэп', 'Регги')

// console.log(styles)
//Напишите функцию min(a, b), которая возвращает
//меньшее из чисел a, b
//нужно добавить проверку, что функция получает числа
// function min(a, b) {
//   if (typeof a !== "number" || typeof b !== "number") {
//     return " NaN";
//   }
//   //   return Math.min(a, b);
//   //   if (a < b) {
//   //     return a;
//   //   } else {
//   //     return b;
//   //   }
//   return a < b ? a : b;
// }
// console.log(min("a", 20));

//Напишите функцию logItems(array) которая принимает
//массив и использует цикл for, который для каждого
//элемента массива будет выводить сообщение в формате
//<номер элемента> - <значение элемента>
//Нумерация элементов должна начинаться с 1.
//['Джаз', 'Блюз', 'Рок-н-ролл', 'Регги', 'Рэп']

// function logItems(array) {
//   for ( let i = 0; i < array.length; i += 1){
//     // console.log(array[i]);
//     // console.log(i)
//     console.log(`${i + 1} - ${array[i]}`)
//   }

// }
// logItems(['Джаз', 'Блюз', 'Рок-н-ролл', 'Регги', 'Рэп'])

//Напиши функцию findSmallerNumber(numbers)
//которая ищет самое маленькое число в массиве
//Добавь проверку что функция получает массив


// const numbers = [5, 35, 56, 12, 24, 7, 80, 3];

// function findSmallerNumber(numbers) {
//   if (!Array.isArray(numbers)) {
//     return "not array";
//  };

//     // return Math.min(...numbers);
//   let smallIsNumber = numbers[0];
//   // for (let i = 0; i < numbers.length; i += 1) {
       
//   //   if (numbers[i] < smallIsNumber) {
//   //     smallIsNumber = numbers[i];
//   //   }
//   // }
//   for (let number of numbers) {
//     if (number < smallIsNumber) {
//       smallIsNumber = number;
//   }
//   }
  
//   return smallIsNumber;
// }


// console.log(findSmallerNumber(numbers));

const people = [
  {
    name: 'Alex',
    know: ['Alex', 'Jhon'],
  },
  {
    name: 'Jhon',
    know: [],
  },
  {
    name: 'Eva',
    know: ['Alex', 'Jhon'],
  },
  {
    name: 'Ivan',
    know: ['Jhon', 'Eva'],
  },
];
//нарцис  'Jhon'

const people1 = [
  {
    name: 'Alex',
    know: ['Alex', 'Jhon'],
  },
  {
    name: 'Jhon',
    know: [],
  },
  {
    name: 'Eva',
    know: [],
  },
  {
    name: 'Ivan',
    know: ['Jhon', 'Eva'],
  },
];
//немає нарциса'

const people3 = [
  {
    name: 'Alex',
    know: ['Alex', 'Eva'],
  },
  {
    name: 'Jhon',
    know: [],
  },
  {
    name: 'Eva',
    know: ['Alex', 'Jhon'],
  },
  {
    name: 'Ivan',
    know: ['Jhon', 'Eva'],
  },
];
const people4 = [
  {
    name: 'Alex',
    know: ['Alex', 'Jhon'],
  },
  {
    name: 'Jhon',
    know: ['Eva'],
  },
  {
    name: 'Eva',
    know: ['Alex', 'Jhon'],
  },
  {
    name: 'Ivan',
    know: ['Jhon', 'Eva'],
  },
];
//немає нарциса'
// Нарциса знають всі, нарцис незнає нікого

// немає нарциса

const nar = function (array) {
  let nameNar = ''
  for (let people of array) {
    if (people.know.length === 0) {
      nameNar = people.name
    }
  }
  if (nameNar === '') { return 'Немає нарциса' }
  

  for (let people of array) {
    if(people.name === nameNar) {continue}
    if (!people.know.includes(nameNar)) { return 'Немає нарциса' }
  }

  return `Нарцис ${nameNar}`;
}

// console.log(nar(people4))


//Напишите функцию findTheColor()
//которая принимает название цвета
//определяет его наличие в массиве
//если цвет есть, устанавливает его как фон документа
//если цвета нет выводит console.error('Такой цвет не найден');
//и устанавливает цвет документа красный
// document.body.style.background = 'red';

const colors = ['blue', 'yellow', 'olive', 'fuchsia', 'lime', 'aqua', 'maroon']

function findTheColor(colors, color) {
  // if (colors.includes(color)) {
  //   document.body.style.background = color
  // } else {
  //   document.body.style.background = 'red'
  // console.error('Такой цвет не найден')}
  
  const inArray = colors.includes(color)
  document.body.style.background = inArray ? color : 'red'
  if (!inArray) {
    console.error('Такой цвет не найден')
  }
}

findTheColor(colors, 'lime')
