// Code by Rachmat Ghaly
function deretanAngkaHinggaN(n) {
  let result = "";
  if (n <= 1) {
    result += "Incorrect param";
  } else {
    for (let i = 1; i <= n; i++) {
      for (let j = n - i; j >= 1; j--) {
        result += j;
      }
    }
  }

  return result;
}

console.log(deretanAngkaHinggaN(5));

module.exports = deretanAngkaHinggaN;
