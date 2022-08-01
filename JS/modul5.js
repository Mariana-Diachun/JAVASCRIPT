
// class StringBuilder {
//     constructor (initialValue = {value}) {
//         this.value = initialValue
//     }
//     getValue() {
//         return this.value
//     }
//     padEnd(initialValue) {
//         this.value = `${initialValue}${this.value}`
//     }
//     padStart(initialValue) {
//         return `${initialValue} ${this.value}`
//     }
//     padBoth(str) {
    
//     }
// }

// // Change code above this line
// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="







class Car {
  // Change code below this line
    static MAX_PRICE = 50000;


  #price;

  constructor({ price }) {
    this.#price = price;
  }

  get price() {
    return this.#price;
  }

    set price(newPrice) {
        if (newPrice <= car.MAX_PRICE) {
      return this.#price = newPrice
        } 
        return 

  }
  // Change code above this line
}

const audi = new Car({ price: 35000 });
console.log(audi.price); // 35000

audi.price = 49000;
console.log(audi.price); // 49000

audi.price = 51000;
console.log(audi.price); // 49000
