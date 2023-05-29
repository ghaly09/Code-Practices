async function calculate(number1, number2) {
  let result = await new Promise((resolve, reject) => {
    if (number1 == 0 || number2 == 0) {
      reject("number1 and number2 cannot be 0");
    }
    if (number1 % 2 == 0 && number2 % 2 == 0) {
      resolve(number1 - number2);
    }
    if (number1 % 2 != 0 && number2 % 2 != 0) {
      resolve(number1 * number2);
    }
    if (number1 % 2 == 0 && number2 % 2 != 0) {
      resolve(number1 + number2);
    }
    if (number1 % 2 != 0 && number2 % 2 == 0) {
      resolve(number1 * number2);
    }
  });

  return result;
}

calculate(0, 0)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
// calculate(3, 5).then((data) => console.log(data));
// calculate(2, 12).then((data) => console.log(data));
// calculate(8, 4).then((data) => console.log(data));
// // calculate(0, 0).then((data) => console.log(data));

module.exports = calculate;
