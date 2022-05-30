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

let fruits = ['Яблоко'];

fruits.push('Апельсин','Груша');
fruits.unshift('Ананас','Лимон');

console.log(fruits);