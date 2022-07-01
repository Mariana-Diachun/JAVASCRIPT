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


function calculateEngravingPrice(message, pricePerWord) {
   // Change code below this line
    let array = message.split(" ");
let price = array.lenghts * pricePerWord;

return price;

   // Change code above this line
}

console.log(calculateEngravingPrice("JavaScript is in my blood", 20));