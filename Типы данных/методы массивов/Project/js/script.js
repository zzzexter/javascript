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

let arr = [1,2];

let arrayLike = {
    0: 'Что-то',
    1: 'еще',
    [Symbol.isConcatSpreadable]: true,
    length: 2
};

console.log(arr.concat(arrayLike));