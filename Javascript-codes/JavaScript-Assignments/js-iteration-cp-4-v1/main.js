//  Code  by Rachmat Ghaly
function countAndSum(number) {
  let result = 0;
  let jumlah = 0;
  for (let i = 1; i <= number; i++) {
    if (jumlah == 3) {
      jumlah = 0;
      jumlah += 1;
      result += jumlah;
    } else {
      jumlah += 1;
      result += jumlah;
    }
  }

  return result;
}

console.log(countAndSum(5)); // 9
console.log(countAndSum(10)); // 19
console.log(countAndSum(100)); // 199
console.log(countAndSum(17)); // 33
console.log(countAndSum(19)); // 37

module.exports = countAndSum;
