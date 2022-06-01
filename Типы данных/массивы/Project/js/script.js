// let arr = new Array();
// let att = [];

// let fruits = ['Яблоко', 'Апельсин', 'Слива'];

// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);

// fruits[2] = 'Груша'; // теперь ["Яблоко", "Апельсин", "Груша"]

// fruits[3] = 'Лимон'; // добавляем новый элемент

// console.log(fruits.length); // 4

// console.log(fruits); // ['Яблоко', 'Апельсин', 'Груша', 'Лимон']

// // массив может хранить элементы любого типа

// let arr1 = ['Яблоко', {name: 'John', surname: 'Sueve'}, true, function() {console.log('Hello')}]

// console.log(arr1[1]); // {name: 'John', surname: 'Sueve'}

// arr1[3](); // Hello, выполняется функция

// let auto = [
//     'Mazda',
//     'Merc',
//     'Opel',
// ]; // висячая запятая

// console.log(auto.at(-1)); // Opel
// console.log(auto[auto.length - 1]); // Opel


// let fruits = ['Яблоко', 'Апельсин', 'Груша'];

// console.log(fruits.pop()); // удаляем 'Груша' и выводим его
// console.log(fruits); // ['Яблоко', 'Апельсин']

// fruits.push('Груша');
// console.log(fruits) // ['Яблоко', 'Апельсин', 'Груша']

// console.log(fruits.shift()); // Яблоко
// console.log(fruits); // Апельсин Груша

// fruits.unshift('Яблоко');

// let fruits = ['Яблоко'];

// fruits.push('Апельсин','Груша');
// fruits.unshift('Ананас','Лимон');

// console.log(fruits);

// let fruits = ['Банан'];

// let arr = fruits;

// console.log(arr === fruits); // true

// arr.push('Груша');

// console.log(fruits) // Банан, Груша

// let auto = [];

// auto[999999] = 5;

// auto.age = 25;

// let auto = ['БМВ', 'Ауди', 'Опель'];

// for(let i = 0; i < auto.length; i++) {
//     console.log(auto[i]);
// }

// let fruits = ['Яблоко', 'Апельсин', 'Груша'];

// for(let fruit of fruits) {
//     console.log(fruit);
// }

// for(let key in fruits) {
//     console.log(key);
// }

// let fruits = [];
// fruits[123] = 'Яблоко';

// console.log(fruits.length);

// let arr = [1,2,3,4,5];
// console.log(arr);
// arr.length = 2;
// console.log(arr); // 1, 2

// arr.length = 5; // возвращаем как было
// console.log(arr[3]); // значения не восстановились

// let arr = new Array('Яблоко', 'Груша','Слива')

// let matrix = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ];

// console.log(matrix[1][1]);

// let arr = [1,2,3];

// console.log(arr); // 1,2,3
// console.log(String(arr) === '1,2,3'); // true

// console.log([] + 1); // '1'
// console.log([1] + 1); // '11'
// console.log([1,2] + 1); // '1,21'

console.log([] == []); // false
console.log([0] == [0]); // false

console.log( 0 == []); // true
console.log( '0' == []); // false