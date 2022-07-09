// function countProps(object) {
//   let propCount = 0;
//   // Change code below this line
//     for (let key in object) {
//         let num = object.hasOwnProperty(key);
//         propCount += num;
//     }
//   // Change code above this line
//   return propCount;
// }
// console.log(countProps({ name: "Mango", age: 2 }))




// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Change code below this line
// const keys = Object.keys(apartment);
// for (const key of keys) {
//     let ownNum = apartment.hasOwnProperty(key)
//     keys.push(ownNum)
// }
// console.log(keys)

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// // Change code below this line
// const keys = Object.keys(apartment);
// const values = Object.values(apartment);

// console.log(keys)




// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line
// for (let color of colors) {
//     hexColors.push(color.hex)
//     rgbColors.push(color.rgb)
// }
// console.log(hexColors)

// console.log(rgbColors)


// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   // Change code below this line
//     for (let product of products) {
//         if (productName === product.name) {
//             return product.price
//         }
            
// }

// return null
//   // Change code above this line
// }
// console.log(getProductPrice("dkfjsh"))









// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//     // Change code below this line
//     const array = []
//     for (let value of products) {
//         if (Object.keys(value).includes(propName)) {
//             array.push(value[propName])
//     }
// }
// return array
//   // Change code above this line
// }

// console.log(getAllPropValues("vjvjh"))



const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function calculateTotalPrice(productName) {
  // Change code below this line
for (let product of products) {
  if (productName === product.name) {
    return product.price * product.quantity
  }
}

return 0
  // Change code above this line
}
console.log(calculateTotalPrice("Blaster"))