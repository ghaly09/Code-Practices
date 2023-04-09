// Code by Rachmat Ghaly
function generateParenthesesPair(numberOfPairs) {
  let result_1 = "";
  let result_2 = "";
  for (let i = 1; i <= numberOfPairs; i++) {
    kurungBuka = "(";
    kurungTutup = ")";
    result_1 += kurungBuka;
    result_2 += kurungTutup;
  }
  let result = result_1 + result_2;

  return result;
}

console.log(generateParenthesesPair(0)); // ''
console.log(generateParenthesesPair(1)); // '()'
console.log(generateParenthesesPair(2)); // '(())'
console.log(generateParenthesesPair(3)); // '((()))'
console.log(generateParenthesesPair(12)); // '(((((((((((())))))))))))'

module.exports = generateParenthesesPair;
