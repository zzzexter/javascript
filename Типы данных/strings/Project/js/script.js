// let single = 'single-quoted';
// let double = "double-quoted";

// let backticks = `backticks`;

// function sum(a, b) {
//     return a + b;
// };

// console.log(`1 + 2 = ${sum(1, 2)}.`); // 1 + 2 = 3

// let guestList = `Guests:
//  * John
//  * Pete
//  * Mary
// `;

// console.log(guestList);

// let guestList = 'Guests:\n * John\n * Pete\n * Mary';

// console.log(guestList);

// let str1 = 'Hello\nWorld';

// let str2 = `Hello
// World`;

// console.log(str1 == str2); // true

// console.log('\u00A9'); // ©
// console.log('\u{20331}'); // 𠌱
// console.log('\u{1F60D}'); // 😍


// console.log('I\'m the Walrus!'); // I'm the Walrus!

// console.log(`I'm the Walrus`); // I'm the Walrus!

// console.log(`The backslash: \\`); // The backslash: \

// console.log(`My\n`.length); // 3

// let str = 'Hello';

// console.log(str[0]); // H
// console.log(str.charAt(0)); // H

// console.log(str[str.length - 1]); // o

// let str = 'Hello';

// console.log(str[1000]); // undefined
// console.log(str.charAt(1000)); // '' (пустая строка)

// for (let char of 'Hello') {
//     console.log(char); // H, e, (2)l, o
// };

// let str = 'Hi';

// str[0] = 'h'; // ошибка
// console.log( str[0]); // H

// str = 'h' + str[1]; // заменяем строку

// console.log(str); // hi

// console.log('Interface'.toUpperCase()); // INTERFACE
// console.log('Interface'.toLowerCase()); // interface

// console.log('Inteface'[0].toLowerCase()); // i

// let str = 'Widget with id';

// console.log(str.indexOf('Widget')); // 0
// console.log(str.indexOf('widget')); // -1

// console.log(str.indexOf('id')); // 1
// console.log(str.indexOf('id', 2)); // 12

// let str = 'Ослик Иа-Иа посмотрел на виадук';

// let target = 'Иа'; // цель поиска

// let pos = 0;
// while(true) {
//     let foundPos = str.indexOf(target,pos);
//     if(foundPos == -1) break;

//     console.log(`Найдено тут: ${foundPos}`);
//     pos = foundPos + 1; // продолжаем со следующей позиции
// }

// let str = 'Ослик Иа-Иа посмотрел на виадук';

// let target = 'Иа'; // цель поиска

// let pos = -1;
// while((pos = str.indexOf(target,pos + 1)) != -1) {
//     console.log(pos);
// }

// let str = 'Widget with id';

// if (str.indexOf('Widget') != -1) {
//     console.log('Совпадение есть');
// }

    // ~n = -(n+1)
// console.log( ~2); // -3
// console.log( ~1); // -2
// console.log( ~0); // -1
// console.log( ~-1); // 0

// let str = 'Widget with id';

// if (~str.indexOf('Widget')) {
//     console.log('Совпадение есть');
// }

// console.log('Widget with id'.includes('Widget')); // true
// console.log('Hello'.includes('Bye')); // false

// console.log('Widget'.includes('id')); // true
// console.log('Widget'.includes('id', 3)); // false, поиск начат с 3 позиции

// console.log('Widget'.startsWith('Wid')); // true
// console.log('Widget'.endsWith('get')); // true

// let str = 'stringify';

// console.log(str.slice(0,5)); // strin, от 0 до 5 не включая 5
// console.log(str.slice(0,1)); // s, от 0 до 1

// let str1 = 'stringify';
// console.log(str1.slice(2)); // ringify, с позиции 2 и до конца

// let str2 = 'stringify';
// console.log(str2.slice(-4, -1)); // gif

// let str = 'stringify';

// console.log (str.substring(2,6)); // ring
// console.log (str.substring(6,2)); // ring

// let str = 'stringify';

// console.log(str.substr(2, 4)); // ring, получаем 4 символа, начиная с позиции 2
// console.log(str.substr(-4, 2)); // gi

// console.log('a' > 'Z'); // true

// console.log( 'Österreich' > 'Zealand' ); // true

// console.log('z'.codePointAt(0)); // 122
// console.log('Z'.codePointAt(0)); // 90

// console.log(String.fromCodePoint(90)); // Z

// console.log('\u005a'); // Z

// let str = '';

// for(let i = 65; i <= 220; i++) {
//     str += String.fromCodePoint(i);
// };
// console.log(str);

// console.log('Österreich'.localeCompare('Zealand')); // -1
