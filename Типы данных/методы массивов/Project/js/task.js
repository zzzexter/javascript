// function camelize(str) {
//     return str
//       .split('-') // разбивает 'my-long-word' на массив ['my', 'long', 'word']
//       .map(
//         // Переводит в верхний регистр первые буквы всех элементом массива за исключением первого
//         // превращает ['my', 'long', 'word'] в ['my', 'Long', 'Word']
//         (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
//       )
//       .join(''); // соединяет ['my', 'Long', 'Word'] в 'myLongWord'
//     console.log(str);
//   }

//   camelize('background-color');

// function filterRangeInPlace(arr, a, b) {

//     for (let i = 0; i < arr.length; i++) {
//       let val = arr[i];
  
//       // удалить, если за пределами интервала
//       if (val < a || val > b) {
//         arr.splice(i, 1);
//         i--;
//       }
//     }
  
//   }
  
//   let arr = [5, 3, 8, 1];
  
//   filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4
  
//   alert( arr ); // [3, 1]

// let arr = [5, 2, 1, -10, 8];

// arr.sort((a,b) => b - a)

// console.log( arr ); // 8, 5, 2, 1, -10


// function copySorted(arr) {
//     return arr.slice().sort()
// }

// let arr = ['HTML', 'JavaScript', 'CSS'];

// let sorted = copySorted(arr);

// console.log(sorted);
// console.log(arr);

    // let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
    // let petya = { name: "Петя", surname: "Иванов", id: 2 };
    // let masha = { name: "Маша", surname: "Петрова", id: 3 };
    

    // users = [ vasya, petya, masha ];

    // let usersMapped = users.map(user => ({fullname: `${user.name} ${user.surname}`, id: user.id}))
    // console.log(usersMapped)

// function sortByAge(arr) {
//     arr = arr.sort((a,b) => a.age > b.age ? 1 : -1)
// }
    
// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };
    
// let arr = [ vasya, petya, masha ];

// sortByAge(arr);

// console.log(arr[1].name);

// function shuffle(array) {
// array.sort(() => Math.random() - 0.5)
// }

// let arr = [1,2,3];
// shuffle(arr)

// console.log(arr);

    // Способ по легче
// function getAverageAge() {
//     let vasya = { name: "Вася", age: 25 };
//     let petya = { name: "Петя", age: 30 };
//     let masha = { name: "Маша", age: 29 };

//     return (vasya.age + petya.age + masha.age) / 3
    
// }

// console.log(getAverageAge());


// function getAverageAge(users) {
//     return users.reduce((prev, user) => prev + user.age, 0) / users.length;
//   }
  
//   let vasya = { name: "Вася", age: 25 };
//   let petya = { name: "Петя", age: 30 };
//   let masha = { name: "Маша", age: 29 };
  
//   let arr = [ vasya, petya, masha ];
  
//   alert( getAverageAge(arr) ); // 28

// function unique(arr) {

// let result = [];
  
// for (let str of arr) {
//     if (!result.includes(str)) {
//     result.push(str);
//     }
// }
  
//     return result;
// }
  
// let strings = ["кришна", "кришна", "харе", "харе",
//     "харе", "харе", "кришна", "кришна", ":-O"
// ];

// console.log ( unique(strings) ); // кришна, харе, :-O