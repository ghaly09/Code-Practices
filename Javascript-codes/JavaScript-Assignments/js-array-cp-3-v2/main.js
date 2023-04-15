// Code by Rachmat Ghaly
function dataSelection(data, amount, start) {
  if (data == false) {
    return "Data not found";
  } else if (String(start) === start) {
    return "Invalid command";
  } else if (String(amount) === amount) {
    return "Invalid command";
  } else if (start >= 0 && amount >= 1) {
    let result = data.slice(start - 1, amount + start - 1);
    return result;
  } else if (start < 0) {
    return "Starting number cannot be below 0";
  } else if (amount < 1) {
    return "Minimum amount is 1";
  }
}

console.log(
  dataSelection(
    ["Semangka", "Nanas", "Jeruk", "Mengkudu", "Jambu klutuk"],
    2,
    3
  )
);
console.log(
  dataSelection(["Deny", "Ganjar", "Raam", "Imam", "Eddy", "Afis"], 4, 1)
);
console.log(dataSelection([97, 44, 21, 76, 10, 1, 33], 2, -1));
console.log(dataSelection(["Tegar", "Miranda", "Wulan"], 0, 3));
console.log(dataSelection(["Fauzan", "Uli", "Vika"], "1", 3));
console.log(dataSelection([], 1, 3));

module.exports = dataSelection;
