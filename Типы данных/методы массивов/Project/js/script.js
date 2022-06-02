// let arr = ['I','go','home'];
// delete arr[1]; // удалить go
// console.log(arr[1]); // undefined

// console.log(arr.length); // 3

// let arr = ['Я','изучаю','JavaScript'];
// arr.splice(1,1); // начиная с позиции 1 удаляет 1 элемент
// console.log(arr);


// let arr = ['Я','изучаю','JavaScript', 'прямо', 'сейчас'];

// let removed = arr.splice(0,3,'Давай', 'танцевать')

// console.log(arr);
// console.log(removed);


// let arr = ['Я','изучаю','JavaScript'];

// arr.splice(2,0,'сложный','язык');
// console.log(arr);

// let arr = [1,2,5];

// arr.splice(-1,0,3,4);

// console.log(arr);

// let arr = ['t','e','s','t'];

// console.log(arr.slice(1,3)); // e, s
// console.log(arr.slice(-2)); // s, t

// let arr = [1,2];

// console.log(arr.concat([3,4])); // 1,2,3,4
// console.log(arr.concat([3,4], [5,6])); // 1,2,3,4,5,6
// console.log(arr.concat([3,4], 5,6)); // 1,2,3,4,5,6

// let arr = [1,2];

// let arrayLike = {
//     0: 'Что-то',
//     length: 1
// };

// console.log(arr.concat(arrayLike));

// let arr = [1,2];

// let arrayLike = {
//     0: 'Что-то',
//     1: 'еще',
//     [Symbol.isConcatSpreadable]: true,
//     length: 2
// };

// console.log(arr.concat(arrayLike));

// ['Bilbo','Gandalf','Nazgul'].forEach(console.log);

// ['Bilbo','Gandalf','Nazgul'].forEach((item, index, array) =>{
//     console.log(`${item} имеет позицию ${index} в ${array}`);
// });

// let arr = [1,0,false];

// console.log(arr.indexOf(0)); // 1
// console.log(arr.indexOf(false)); // 2
// console.log(arr.indexOf(null)); // -1

// console.log(arr.includes(1)) // true

// let arr1 = [NaN];
// console.log(arr1.indexOf(NaN)); // -1
// console.log(arr1.includes(NaN)); // true

// let users = [
//     {id:1, name: 'Alexander'},
//     {id:2, name: 'Pete'},
//     {id:3, name: 'Steven'}
// ];


// let user = users.find(item => item.id == 1);

// console.log(user.name);

// let users = [
//     {id:1, name: 'Alexander'},
//     {id:2, name: 'Pete'},
//     {id:3, name: 'Steven'}
// ];


// let someUsers = users.filter(item => item.id < 3);

// console.log(someUsers.length); // 2

// let lengths = ['Bilbo', 'Gandalf', 'Nazgul'].map(item => item.length);
// console.log(lengths);

// let arr = [1,2 , 15];

// arr.sort();
// console.log(arr);

// function compareNumeric(a, b) {
//     if(a > b) return 1; 
//     if(a == b) return 0; 
//     if(a < b) return -1; 

// }

// let arr = [1, 2, 15];

// arr.sort(function(a,b) {
//     return a - b; 
// });

// console.log(arr);

// let arr = [1,2,3,4,5];
// arr.reverse();
// console.log(arr); // 5 4 3 2 1

// let names = 'Вася, Петя, Маша';

// let arr = names.split(', ');

// for (let name of arr) {
//     console.log(`Сообщение получат: ${name}.`);
// }

// let arr = ['Вася', 'Петя', 'Маша'];

// let str = arr.join('; ');

// console.log(str); // Вася; Петя; Маша

// let arr = [1,2,3,4,5];

// let result = arr.reduce((sum, current) => sum + current);

// console.log(result); // 15

console.log(Array.isArray([]));
console.log(Array.isArray({}));