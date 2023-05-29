function calculatePromise(number1, number2) {
  // action
  return new Promise((resolve, reject) => {
    if (number1 == 0 && number2 == 0) {
      reject("number1 and number2 cannot be 0");
    } else if (number1 == 0 || number2 == 0) {
      reject("number1 and number2 cannot be 0");
    } else if (number1 % 2 == 0 && number2 % 2 == 0) {
      resolve(number1 - number2);
    } else if (number1 % 2 != 0 && number2 % 2 != 0) {
      resolve(number1 * number2);
    } else if (number1 % 2 == 0 && number2 % 2 != 0) {
      resolve(number1 + number2);
    } else if (number1 % 2 != 0 && number2 % 2 == 0) {
      resolve(number1 * number2);
    }
  });
}

calculatePromise(2, 3)
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

// calculatePromise(2, 2);
// calculatePromise(10, 2);
// calculatePromise(2, 8);
// calculatePromise(1, 2);
// calculatePromise(3, 6);
// calculatePromise(7, 2);
// calculatePromise(6, 1);
// calculatePromise(10, 5);
// calculatePromise(2, 1);
// calculatePromise(2, 0);

module.exports = calculatePromise;
// exports.calculatePromise = calculatePromise;
