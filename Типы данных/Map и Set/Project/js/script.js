// let map = new Map();

// map.set('1', 'str1');
// map.set(1, 'num1');
// map.set(true, 'bool1');

// console.log(map.get(1));
// console.log(map.get('1'));

// console.log(map.size);

// let john = {name:'John'};

// let visitsCountMap = new Map();

// visitsCountMap.set(john, 123);

// console.log(visitsCountMap.get(john));


// let john = {name:'John'};

// let visitsCountObj = {};

// visitsCountObj[john] = 123;

// console.log(visitsCountObj['[object Object]']);

// let recipeMap = new Map([
//     ['огурец', 500],
//     ['помидор', 350],
//     ['лук', 50]
// ]);

// for(let vegetable of recipeMap.keys()) {
//     console.log(vegetable); // огурец, помидор, лук
// };

// for(let amount of recipeMap.values()) {
//     console.log(amount); // 500, 350, 50
// };

// for(let entry of recipeMap.entries()) {
//     console.log(entry); // ['огурец', 500], ['помидор', 350], ['лук', 50]
// };

// recipeMap.forEach((value, key) => {
//     console.log(`${key}: ${value}`) // огурец: 500 и так далее
// }); 

// let map = new Map([
//     ['1', 'str1'],
//     [1, 'num1'],
//     [true, 'bool1'],
// ]);

// console.log(map.get('1')); // str1

// let obj = {
//     name: 'John',
//     age: 30,
// };

// let map = new Map(Object.entries(obj));
// console.log(map);

// let prices = Object.fromEntries([
//     ['banana', 1],
//     ['orange', 2],
//     ['meat', 4],
// ])

// console.log(prices);
// console.log(prices.banana);

// let map = new Map()

// map = Object.fromEntries([
// ['John', 30],
// ['Pete', 27],
// ['Steve', 18],
// ]);

// console.log(map);

// let map = new Map();
// map.set('John', 30);
// map.set('Pete', 27);
// map.set('Steve', 18);

// let obj = Object.fromEntries(map.entries()); // создаем обычный объект

// console.log(obj);

// //      второй вариант

// let obj1 = Object.fromEntries(map); // создаем обычный объект

// console.log(obj1);

// let set = new Set();

// let john = {name: 'John'};
// let pete = {name: 'Pete'};
// let mary = {name: 'Mary'};

// set.add(john);
// set.add(pete);
// set.add(mary);
// set.add(john);
// set.add(mary);

// console.log(set.size); // 3

// for(let names of set) {
//     console.log(names.name);
// }

// console.log(set);

let set = new Set(['апельсин', 'яблоко', 'банан']);

for(let item of set) {
    console.log(item);
}

set.forEach((value, valueAgain, set) => {
    console.log(value)
})