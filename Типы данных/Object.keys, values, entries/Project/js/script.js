// let user = {
//     name:'John',
//     age: 30
// };

// console.log(Object.keys(user)) // ['name', 'age']
// console.log(Object.values(user)) // ['John', 30]
// console.log(Object.entries(user)) // ['name', 'John'], ['age', 30]

// for(let value of Object.values(user)) {
//     console.log(value); // John, Затем 30 
// }

// for(let entries of Object.entries(user)) {
//     console.log(entries); // ['name', 'John'], ['age', 30]
// }

// for(let keys of Object.keys(user)) {
//     console.log(keys); // name, age
// }
 
// let prices = {
//     banana: 1,
//     orange: 2,
//     meat: 4,
// }

// let doublePrice = Object.fromEntries(
//     Object.entries(prices).map(([key, value]) => [key, value * 2])
// );

// console.log(doublePrice.meat); // 8