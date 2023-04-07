// code by  Rachmat Ghaly
function hollyKnight(name, stamina, undead) {
  let result = "";

  // Kondisi Holly knight menang
  if (stamina > undead) {
    result = "Holly Knight " + name + " memenangkan pertempuran dengan mudah!";
  }
  // Kondisi Holly knight, menang namun penuh luka
  if (stamina == undead) {
    result =
      "Beruntung Holly knight " +
      name +
      " berhasil mengalahkan " +
      undead +
      " undead!";
  }

  // Kondisi Holly knight kalah dengan gagah
  if (stamina < undead) {
    result = `Holly knight ${name} mengalahkan ${stamina} undead, namun sayang holly knight ${name} gugur di medan perang!`;
  }
  return result;
}

console.log(hollyKnight("Lancelot", 30, 20)); // Holly Knight Lancelot memenangkan pertempuran dengan mudah!
console.log(hollyKnight("Gallahad", 10, 10)); // Beruntung Holly knight Gallahad berhasil mengalahkan 10 undead!
console.log(hollyKnight("Tristan", 100, 110)); // Holly knight Tristan mengalahkan 100 undead, namun sayang holly knight Tristan gugur di medan perang!
// console.log(hollyKnight("Gareth", 30, 50)); // Holly knight Gareth mengalahkan 30 undead, namun sayang holly knight Gareth gugur di medan perang!
// console.log(hollyKnight("Percival", 99, 100)); // Holly knight Percival mengalahkan 99 undead, namun sayang holly knight Percival gugur di medan perang!

module.exports = hollyKnight;
