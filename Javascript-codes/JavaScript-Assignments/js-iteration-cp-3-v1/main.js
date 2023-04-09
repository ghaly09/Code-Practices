//  Code  by rachmat Ghaly
function printNumber(totalNumber) {
  result = "";
  jumlah = 0;
  for (let i = 1; i <= totalNumber; i++) {
    if (jumlah == 3) {
      jumlah = 0;
      jumlah += 1;
      var angka = jumlah.toString();
      result += angka;
    } else {
      jumlah += 1;
      var angka = jumlah.toString();
      result += angka;
    }
  }

  return result;
}
// 4, 7, 10
console.log(printNumber(2));
console.log(printNumber(3));
console.log(printNumber(6));
console.log(printNumber(10));
console.log(printNumber(30));

module.exports = printNumber;
