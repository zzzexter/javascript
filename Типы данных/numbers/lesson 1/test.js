// let a = +prompt('Введите первое число', '0');
// let b = +prompt('Введите второе число', '0');
//
// let sum = a + b;
// alert(sum);

// function readNumber() {
//     let num;
//
//     do {
//         num = prompt('Введите число', 0);
//     } while(!isFinite(num));
//
//     if (num === null || num === '') return null;
//
//     return +num;
// }
//
// alert(`Число: ${readNumber()}`)

function randomInteger(min, max) {
    let numb = min + Math.random() * (max + 1 - min)
    return Math.floor(numb);
};
alert (randomInteger(1, 3));