// function unique(arr) {
//     return Array.from(new Set(arr))
// }


// let values = ["Hare", "Krishna", "Hare", "Krishna",
// "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];

// console.log(unique(values)); // Hare, Krishna, :-O


// function aclean(arr) {
//     let map = new Map();
//     for(let word of arr) {
//         let sorted = word.toLowerCase().split("").sort().join("");
//         map.set(sorted, word)
//     }
//     return Array.from(map.values());
// }

// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];


// console.log(aclean(arr));


// let map = new Map();

// map.set('name', 'John');

// let keys = map.keys()

// keys = Array.from(map.keys())

// keys.push('more', 'fuck');

// console.log(keys);