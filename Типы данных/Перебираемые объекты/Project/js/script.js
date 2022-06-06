// let range = {
//     from: 1,
//     to: 5,


//     [Symbol.iterator]() {
//         this.current = this.from;
//         return this;
//       },

//     next() {
//     if(this.current <= this.to) {
//         return{done: false, value: this.current++};
//     } else {
//         return {done: true};
//     }
//     }
// };
//     for (let num of range) {
//     console.log(num);
//     }

// console.log(range)

// for(let char of 'test') {
//     console.log(char)
// }

// let str = '𝒳😂';
// for(let char of str) {
//     console.log(char)
// }

// let str = 'Hello';

// let iterator = str[Symbol.iterator]();

// while(true) {
//     let result = iterator.next();
//     if(result.done) break;
//     console.log(result.value);
// }

// let arr = [1,2,3,4,5,6,7,8,9,10]

// for(let num of arr) {
//     if(num > 5) {
//         break
//     } else {
//         false
//     }
//     console.log(num)
// }

// let arrayLike = { // есть индексы и свойство length => псевдомассив
//     0: 'Hello',
//     1: 'World',
//     length: 2,
// };

// for(let item of arrayLike); {
    
// } 
// Ошибка arrayLike is not iterable 
// Отсутствует Symbol.iterator

// let arrayLike = {
//     0: 'Hello',
//     1: 'World',
//     length: 2
// };

// let arr = Array.from(arrayLike); // (*)
//  console.log(arr.pop()); // World
// console.log(arr)

// let range = {
//     from: 1,
//     to: 5,
  
//     [Symbol.iterator]() {
//       this.current = this.from;
//       return this;
//     },
  
//     next() {
//       if (this.current <= this.to) {
//         return { done: false, value: this.current++ };
//       } else {
//         return { done: true };
//       }
//     }
//   };

// возводим в квадрат 
// let arr = Array.from(range, num => Math.pow(num, 2));

// console.log(arr);

// Синтаксис 
// Array.from(obj[, mapFn, thisArg])

// let str = '𝒳😂';

// // разбивает строку на массив её элементов
// let chars = Array.from(str);

// console.log(chars[0]); // 𝒳
// console.log(chars[1]); // 😂
// console.log(chars.length); // 2

// let str = '𝒳😂';

// let chars = []; // Array.from внутри себя выполняет тот же цикл
// for (let char of str) {
//     chars.push(char);
// }

// console.log(chars);

// function slice(str,start,end) {
//     return Array.from(str).slice(start,end).join('');
// }

// let str = '𝒳😂𩷶';

// console.log(slice(str,1,3)); // 😂𩷶

let arr = ['𝒳', '😂', '𩷶']

console.log(arr.join(''));