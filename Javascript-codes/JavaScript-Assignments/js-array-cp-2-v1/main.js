// Code by Rachmat Ghaly
function vocalCounter(array) {
  const Vocal = ["A", "a", "E", "e", "I", "i", "U", "u", "O", "o"];
  let total = 0;
  let check = "";
  for (let i = 0; i < array.length; i++) {
    if (Vocal.includes(array[i])) {
      total++;
      check = check.concat(array[i]);
    }
  }
  if (total > 0) {
    check = `Jumlah vokal yang ditemukan sebanyak ${total} berupa ${check}`;
  } else {
    check = "Tidak ada huruf vokal yang ditemukan";
  }
  return check;
}

console.log(vocalCounter(["x", "A", 5, "o", 1, "T", "b"]));
console.log(vocalCounter([-10, "E", "e", "z", "p", "i", 4]));
console.log(vocalCounter(["q", "W", "r", "t", "Y"]));

module.exports = vocalCounter;
