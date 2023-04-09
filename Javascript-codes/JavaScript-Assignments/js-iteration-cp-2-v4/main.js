// code by  Rachmat Ghaly
function trasureHunter(dailyLog) {
  let result = 0;
  for (i of dailyLog) {
    if (i == "$") {
      result += 100;
    } else if (i == "x") {
      if (result < 10) {
        result = 0;
      } else {
        result -= 10;
      }
    } else if (i == "#") {
      if (result == 0) {
        result = 0;
      } else {
        result *= 0.5;
      }
    }
  }
  return result;
}

console.log(trasureHunter("$x$#x$")); // 185
console.log(trasureHunter("$$#x$$")); // 290
console.log(trasureHunter("x$#x$#x$")); // 160
console.log(trasureHunter("xx$#$#$#$###xx")); // 3.4375

module.exports = trasureHunter;
