// let fruits = ['Яблоки', 'Груша', 'Апельсин'];

// let shoppingCart = fruits;
// shoppingCart.push('Банан');

// console.log(fruits.length); // 4

// let styles = ['Джаз', 'Блюз'];
// styles.push('Рок-н-ролл');
// styles[1] = 'Классика'
// console.log(styles.shift(1));
// styles.unshift('Рэп', 'Регги');
// console.log(styles);

// let arr = ['a','b'];

// arr.push(function() {
//     console.log(this);
// });

// arr[2](); // выводит массив

function sumInput() {

    let numbers = [];
  
    while (true) {
  
      let value = prompt("Введите число", 0);
  
      // Прекращаем ввод?
      if (value === "" || value === null || !isFinite(value)) break;
  
      numbers.push(+value);
    }
  
    let sum = 0;
    for (let number of numbers) {
      sum += number;
    }
    return sum;
  }
  
  alert( sumInput() );