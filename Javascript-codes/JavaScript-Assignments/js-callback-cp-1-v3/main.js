// Code by Rachmat Ghaly
function calculate(number1, number2, callback) {
  // Both of number is even
  let even = number1 % 2 == 0 && number2 % 2 == 0;
  // Both of number is odd
  let Odd = number1 % 2 != 0 && number2 % 2 != 0;
  // Conditions
  if (even) {
    let result = number1 - number2;
    callback(result);
  } else if (Odd) {
    let result = number1 * number2;
    callback(result);
  } else if (number1 % 2 == 0 && number2 % 2 != 0) {
    let result = number1 + number2;
    callback(result);
  } else if (number1 % 2 != 0 && number2 % 2 == 0) {
    let result = number1 * number2;
    callback(result);
  }
}

let sumCallback = (result) => console.log(result);
function subtractCallback(result) {
  console.log(result);
}
let multiplyCallback = (result) => console.log(result);

calculate(2, 3, sumCallback);
calculate(3, 5, multiplyCallback);
calculate(8, 4, subtractCallback);
calculate(7, 2, multiplyCallback);

module.exports = calculate;
