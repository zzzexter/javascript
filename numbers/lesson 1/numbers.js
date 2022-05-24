let num = 12.34;
console.log(num.toFixed(1)); // 12.3

console.log( 1e500 ); // Infinity
console.log( 0.1 + 0.2 == 0.3 ); // false
console.log( 0.1.toFixed(20)  ); // 0.10000000000000000555

let sum = 0.1 + 0.2;
console.log( +sum.toFixed(1) );

console.log(9999999999999999);

console.log( isNaN(NaN) ); // true
console.log( isNaN('str') ); // true
console.log( isNaN(4)); // false

console.log( NaN === NaN ); // false

console.log( isFinite('15')); // true
console.log( isFinite('str')); // false
console.log( isFinite(Infinity)); // false

// let numb = +prompt('Enter a number', '');
// alert(isFinite(numb));
console.log(Object.is(NaN, NaN));

console.log( +'100px');

console.log(parseInt('100px')); // 100
console.log(parseFloat('12.5em')); // 12.5

console.log(parseInt('12.3')); // 12, вернется только целая часть
console.log(parseFloat('12.3.4')) // 12.3 остановка чтения произойдет на второй точке

console.log(parseFloat('12fe')); // 12

console.log(parseInt('a42')) // NaN

console.log(parseInt('a2nv5', 36));

console.log(Math.random()); // любое число от 0 до 1

console.log(Math.max(4,73,-53,36,32,865,3263,4,53,242)); // 3263
console.log(Math.min(-53,25,6,0,-0,5532,-77,53,2)); // -77

console.log(Math.pow(2,10)); // 2 в степени 10 = 1024