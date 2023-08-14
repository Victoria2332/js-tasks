//*1 Напишите однострочное решение, которое вычисляет сумму квадратных корней для всех чётных чисел целочисленного массива.
console.log([1, 8, 3, 9, 4, 5, 4]
  .filter(elem => (elem % 2))
  .reduce((sum,elem) => sum + Math.sqrt(elem),0)
  );

  // !Можно было вывести четность через for?
// console.log([1, 8, 3, 9, 4, 5, 4])
//   for (let i= 1; i <= 9; i++){
//     if (i % 2 == 0) {
//       alert (i);
//     }
//   }

//*2 Напишите функцию, которая заполняет новый массив предоставленным значением. Ожидаемый результат: (3, 'a') => ['a', 'a', 'a']
const fillTask2 = (key, value)=> {
  return new Array(key).fill(value)
}
console.log(fillTask2(3, 'a')); // ['a', 'a', 'a']

//*3 Напишите функцию, которая разворачивает массив в обратном порядке. Пожалуйста, не используйте array.reverse(). Ожидаемый результат: [1, 2, 3] => [3, 2, 1]
const sortTask3 = [1, 2, 3, 4, 5, 6];
const sortToSmallest = sortTask3.sort((a,b) => b - a);
console.log(sortToSmallest);//[6, 5, 4, 3, 2, 1]

//*4 Task 4: Напишите функцию, которая очищает массив от нежелательных значений, таких как false, undefined, пустые строки, ноль, null. Ожидаемый результат: [0, 1, false, 2, undefined, '', 3, null] => [1, 2, 3]

const task4 =[0, 1, false, 2, undefined, '', 3, null];
const filterTask4 = task4.filter(Number);
console.log(filterTask4);

//*5 Напишите функцию, которая возвращает объект, составленный из значений вложенных массивов. Первое элемент массива - ключ, второй - зачение. Ожидаемый результат: [['a', 1], ['b', 2]] => { a: 1, b: 2 }
function arrayTask5(arr) {
  return arr.reduce((obj, [key, value]) => {
    obj[key] = value;
    return obj;
  },{});
}
const arr = [['a', 1], ['b', 2]];
const obj = arrayTask5(arr);
console.log(obj); //{a: 1, b: 2}

//*6 Напишите функцию, которая убирает повторяющиеся значения. Ожидаемый результат: [1, 2, 3, 1, 2] => [1, 2, 3]
const unique = (task6) => task6.filter((element, value) => task6.indexOf(element) === value);
console.log(unique([1, 2, 3, 1, 2])); //[1, 2, 3]

//*7 Напишите функцию, которая сравнивает два массива и возвращает true, если они идентичны. Ожидаемый результат: ([1, 2, 3], [1, 2, 3]) => true
const arg1 = [ 1, 2, 3];
const arg2 = [ 1, 2, 3];
 
const isEqual = arg1.toString() === arg2.toString();
console.log(isEqual);

// !Начиная с 8 задачи появились прям проблемы в решении, пришлось прибегнуть к помощи
//*8 Напишите функцию, которая преобразует глубокий массив в одномерный. Ожидаемый результат: [1, 2, [3, 4, [5]]] => [1, 2, 3, 4, 5]. не используйте array.flat()

function flattenArray(arr) {
  const result = [];
  arr.forEach((item) => {
    if (Array.isArray(item)) {
      result.push(...flattenArray(item));
    } else {
      result.push(item);
    }
  });
  return result;
}

const deepArr = [1, 2, [3, 4, [5]]];
const flatArr = flattenArray(deepArr);
console.log(flatArr); // [1, 2, 3, 4, 5]

//*9 Напишите функцию, которая разделяет массив на части заданного размера. Ожидаемый результат: ([1, 2, 3, 4, 5], 2) => [[1, 2], [3, 4], [5]]

function splitTask9(arb, size) {
  const result = [];
  for (let i = 0; i < arb.length; i += size) {
    result.push(arb.slice(i, i + size));
  }
  return result;
}

const arb = [1, 2, 3, 4, 5];
const splittedTask9 = splitTask9(arb, 2);
console.log(splittedTask9); 

//*10 Преобразовать первый символ строки в нижний регистр 


//*Задача. Выведите столбец чисел от 1 до 50.

for (let i = 1; i <= 50; i++) {
  console.log(i);
}

// *Задача. Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for выведите все эти элементы на экран

const mass = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
  console.log(mass[i]);
}

// *Задача. Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for найдите сумму элементов этого массива. Запишите ее в переменную result.

const mass1 = [1, 2, 3, 4, 5];
let result = 1;
for (let i = 0; i < mass1.length; i++) {
  result *= mass1[i];
}
console.log(result);

// *Дан объект obj. С помощью цикла for-in выведите на экран ключи и элементы этого объекта.
var obj1 = {green: 'зеленый', red: 'красный', blue: 'голубой'}
for (var key in obj1) {
  if(obj1.hasOwnProperty(key)) {
    console.log("Key", key);
    console.log("Value", obj1[key]);
  }
};

//*Если переменная a равна 10, то выведите 'Верно', иначе выведите 'Неверно'.
const a = 10;
if (a == 10) {
  console.log("true");
} else {
  console.log("false");
}

//*Задача. В переменной min лежит число от 0 до 59. Определите в какую четверть часа попадает это число (в первую, вторую, третью или четвертую).

let min = 25;
if (min >= 0 && min <= 14) {
  console.log("Первая четверть часа");
} else if (min >= 15 && min <= 29) {
  console.log("Вторая четверть часа");
} else if (min >= 30 && min <= 44) {
  console.log("Третья четверть часа");
} else {
  console.log("Четвертая четверть часа");
}




