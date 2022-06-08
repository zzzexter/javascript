// let salaries = {
//     'John': 100,
//     'Pete': 300,
//     'Mary': 250
// }

// function sumSalaries(salaries) {
//     let sum  = 0;
//     for(let values of Object.values(salaries)) {
//         sum += values
//     }
//     console.log(sum)
// }

// sumSalaries(salaries); // 650

// let user = {
//     name: 'John',
//     age: 30
// };

let user = {
    name: 'John',
    age: 30
};

let count = 0;

for(let key in user) {
    count++
}


console.log(count); // 2

function countFunc(user) {
    return Object.keys(user).length
}

console.log(countFunc(user));