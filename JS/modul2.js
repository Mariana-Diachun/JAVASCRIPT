// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   // Change code below this line

//   if (password === ADMIN_PASSWORD) {
//     return "Welcome!";
//   }
//   return "Access denied, wrong password!";
//   // Change code above this line
// }


// function checkStorage(available, ordered) {
//   // Change code below this line

//   if (ordered === 0) {
//     return "Your order is empty!";
//   }
//    if (ordered > available) {
//     return  "Your order is too large, not enough goods in stock!";
//   }

  
//     return "The order is accepted, our manager will contact you";


// //   // Change code above this line
// // }
// // checkStorage(100, 500)

// function withdraw(amount, balance) {
//   // Якщо умова виконується, викликається console.log
//   // і вихід із функції. Код після тіла if не виконається.
//   if (amount === 0) {
//     console.log("Для проведення операції введіть суму більшу за нуль");
//     return;
//   }

//   // Якщо умова першого if не виконалась, його тіло пропускається
//   // та інтерпретатор доходе до другого if.
//   // Якщо умова виконується, викликається console.log і вихід із функції.
//   // Код, що знаходиться після тіла if, не виконається.
//   if (amount > balance) {
//     console.log("Недостатньо коштів на рахунку");
//     return;
//   }

//   // Якщо жоден із попередніх if не виконався,
//   // інтерпретатор доходить до цього коду і виконує його.
//   console.log("Операція зняття коштів проведена");
// }

// withdraw(0, 300); // "Для проведення операції введіть суму більшу за нуль"
// withdraw(500, 300); // "Недостатньо коштів на рахунку"
// withdraw(100, 300); // "Операція зняття коштів проведена"


//

// task


// Напиши функцію calculateTotal(number),
//    яка приймає ціле число(параметр number) і повертає суму всіх цілих чисел від одиниці і
//     до цього числа.Наприклад, якщо number дорівнює 3, то сума - це 1 + 2 + 3, тобто 6.



// function calculateTotal(number) {
//  // Change code below this line
// let total = 0;
// for (let i = 0; i <= number; i += 1) {
//   total+=i;
// }
// return total;
//   // Change code above this line
// }

// console.log(calculateTotal(10));


// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line
// for (let i = 0; i <= order; i += 1) {
//   total += i;
// }
//   // Change code above this line
//   return total;
// }

// console.log(calculateTotalPrice([164, 48, 291]))



// function calculateTotal(number) {
//  // Change code below this line
// let total = 0;
// for (let i = 0; i < number.lenght; i += 1) {
//   total += number[i];
// }
// return total;
//   // Change code above this line
// }
// console.log(calculateTotal(3))

// function findLongestWord(string) {
//   // Change code below this line

// let array = string.split(" ");
// for (let i = 0; i < array.length; i += 1) {
//    if (array[i].length > array[i + 1].length)
//       return array[i]
// }
//   // Change code above this line
// }
// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"))

// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line
//   for (let i = min; i >= max; i += 1) {
//      numbers = numbers.push(i)
//      console.log(i)
//   }
//   // Change code above this line
//   return numbers;
// }

// console.log(createArrayOfNumbers(10, 15))



// function filterArray(numbers, value) {
//    // Change code below this line
//   const newArray = [];
//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] > value)
//     return numbers.push(i)
//   }


//   // Change code above this line
// }
// console.log(filterArray([12, 24, 8, 41, 76], 3))

// const planets = ["Earth", "Mars", "Venus"];

// console.log(planets.includes("Earth")); // true
// console.log(planets.includes("Mars")); // true
// console.log(planets.includes("Venus")); // true
// console.log(planets.includes("Jupiter")); // false

function getCommonElements(array1, array2) {
  // Change code below this line

  function getCommonElements(array1, array2) {
  // Change code below this line
const newArray = []
for (let i = 0; i > array1.length && i > array2.length; i += 1) {
  if ( array1.includes(i) && array2.includes(i)) {
    newArray.push(i)
  }
}

return newArray
 // Change code above this line
   }
console.log(getCommonElements([1, 2, 3], [2, 4]))