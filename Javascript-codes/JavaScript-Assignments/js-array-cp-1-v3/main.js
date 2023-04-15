// Code by Rachmat Ghaly
function splitToArr(str) {
  let hasilKapital = [];
  let hasil = [];

  if (str == "") {
    return "Data not available";
  } else if (str == undefined) {
    return "Invalid input";
  } else {
    let result = str.split(";");
    for (let j = 0; j < result.length; j++) {
      hasil.push(result[j].split("-"));
    }

    hasil = hasil.flat();

    for (let i = 0; i < hasil.length; i++) {
      let capitalize = hasil[i][0].toUpperCase();
      hasilKapital.push(hasil[i].replace(hasil[i][0], capitalize));
    }
  }

  return hasilKapital;
}

console.log(splitToArr("annisa;dimitri-alvin;fajar-mirza;tandry"));
console.log(
  splitToArr(
    "ganang.prakoso-ivan.tjendra-haekal.yudhistira;ridza.adhandra-ganda.sipayung;diaz.kautsar"
  )
);
console.log(splitToArr(""));
console.log(splitToArr());

module.exports = splitToArr;

// Code untuk hilangin titik-nya
// function splitToArr(str) {
//     let hasilKapital = [];
//     let hasil = [];
//     let hasilAkhir = [];

//     if (str == "") {
//       return "Data not available";
//     } else if (str == undefined) {
//       return "Invalid input";
//     } else {
//       let result = str.split(";");
//       for (let j = 0; j < result.length; j++) {
//         hasil.push(result[j].split("-"));
//       }

//       hasil = hasil.flat();

//       for (let r = 0; r < hasil.length; r++) {
//         hasilAkhir.push(hasil[r].split("."));
//       }

//       hasilAkhir = hasilAkhir.flat();

//       for (let i = 0; i < hasilAkhir.length; i++) {
//         let capitalize = hasilAkhir[i][0].toUpperCase();
//         hasilKapital.push(hasilAkhir[i].replace(hasilAkhir[i][0], capitalize));
//       }
//     }

//     return hasilKapital;
//   }

//   console.log(splitToArr("annisa;dimitri-alvin;fajar-mirza;tandry"));
//   console.log(
//     splitToArr(
//       "ganang.prakoso-ivan.tjendra-haekal.yudhistira;ridza.adhandra-ganda.sipayung;diaz.kautsar"
//     )
//   );
//   console.log(splitToArr(""));
//   console.log(splitToArr());

//   module.exports = splitToArr;
