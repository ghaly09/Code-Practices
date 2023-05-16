// Code by Rachmat Ghaly
function discountChecker(costumers, date) {
  let result = [];
  let price = [];
  let dayDate = date.split("-");
  let numberDate = dayDate.map((value) => {
    return Number(value);
  });
  // Jika Tanggal Genap
  if (numberDate[0] % 2 == 0) {
    for (let i = 0; i < costumers.length; i++) {
      let harga = costumers[i][0];
      costumers[i][0] = harga.split(" ");
      costumers[i] = costumers[i].flat();
      if (costumers[i][1] % 2 == 0) {
        result.push([costumers[i][0] + " " + costumers[i][1], costumers[i][2]]);
      } else if (costumers[i][2] == "member") {
        result.push([costumers[i][0] + " " + costumers[i][1], costumers[i][2]]);
      }
    }
    // Jika Tanggal Ganjil
  } else if (numberDate[0] % 2 != 0) {
    for (let i = 0; i < costumers.length; i++) {
      let harga = costumers[i][0];
      costumers[i][0] = harga.split(" ");
      costumers[i] = costumers[i].flat();
      if (costumers[i][1] % 2 != 0) {
        result.push([costumers[i][0] + " " + costumers[i][1], costumers[i][2]]);
      } else if (costumers[i][2] == "member") {
        result.push([costumers[i][0] + " " + costumers[i][1], costumers[i][2]]);
      }
    }
  }

  return result;
}

let costumers = [
  ["$ 228", "member"],
  ["$ 19", "non-member"],
  ["$ 238", "non-member"],
  ["$ 49", "member"],
];

console.log(discountChecker(costumers, "28-10-2022"));

var costumers2 = [
  ["$ 754", "member"],
  ["$ 233", "member"],
  ["$ 31", "non-member"],
  ["$ 332", "non-member"],
];

console.log(discountChecker(costumers2, "11-06-2022"));

module.exports = discountChecker;
