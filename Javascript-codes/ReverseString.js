// Rachmat Ghaly

let reverseString = function (string) {
  let result = [];
  for (let i = 0; i < string.length; i++) {
    result.push(string[string.length - 1 - i]);
  }
  return result;
};

console.log(reverseString("mely"));
