// let john = {name: 'John'};
// // объект доступен, переменная john -- это ссылка на него

// // перепишем ссылку
// // john = null
// // объект удален из памяти

// let array = [john];

// john = null
// console.log(array[0]);

// let john = {name: 'John'};
// let map = new Map();
// map.set(john, '...');

// john = null // перезапишем ссылку на объект 

// // объект john сохранен внутри объекта 'Map'
// // он допступен через map.keys()

// for(let keys of map.keys()) {
//     console.log(keys);
// }

// let weakMap = new WeakMap();

// let obj = {};

// weakMap.set(obj,'ok'); // Работает (обхект в качестве ключа)

// weakMap.set('test', 'Whoops') // Ошибка, потому что 'test' не объект


// let john = {name: 'John'};

// let weakMap = new WeakMap();
// weakMap.set(john, '...');

// john = null; // перезаписываем ссылку на объект

// объект john удален из памяти

// let visitsCountMap = new WeakMap();

// function countUser(user) {
//     let count = visitsCountMap.get(user) || 0;
//     visitsCountMap.set(user, count + 1);
// }

// let john = {name: 'John'};

// countUser(john);

// john = null

// let cache = new WeakMap();

// function process(obj) {
//     if(!cache.has(obj)) {
//         let result = obj;
//         cache.set(obj,result);
//     }
//     return cache.get(obj);
// }

// let obj = {};

// let result1 = process(obj);
// let result2 = process(obj);

// obj = null

// console.log(cache.size);

// let visitedSet = new WeakSet();

// let john = {name: 'John'};
// let pete = {name: 'Pete'};
// let mary = {name: 'Mary'};

// visitedSet.add(john);
// visitedSet.add(pete);
// visitedSet.add(john);

// console.log(visitedSet.has(john));
// console.log(visitedSet.has(mary));

// john = null;