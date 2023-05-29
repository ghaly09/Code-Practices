function counterApp(arr) {
  let result = {};

  if (arr == undefined) {
    return (result = "Invalid input");
  } else if (arr == false) {
    return (result = "Data not found");
  } else {
    arr.filter((value) => {
      result[value] = 0;
      for (let i = 0; i < arr.length; i++) {
        if (value == arr[i]) {
          result[value] = result[value] + 1;
        }
      }
    });
  }

  return result;
}

console.log(
  counterApp([
    "Hikman",
    "Naufal",
    "Kanda",
    "Arya",
    "Kanda",
    "Hikman",
    "Naufal",
    "Hikman",
    "Kanda",
    "Kanda",
  ])
);
console.log(counterApp([5, 6, 7, 5, 5, 7, 6, 7, 7, 7, 5, 6]));
console.log(counterApp([]));
console.log(counterApp());

module.exports = counterApp;
