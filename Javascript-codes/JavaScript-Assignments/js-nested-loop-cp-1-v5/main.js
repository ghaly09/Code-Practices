// Code by Rachmat ghaly
function buyThemAll(books, budget) {
  let booksArray = books.split(",");
  let hargaArray = [];
  let totalBelanja = 0;
  let jumlahBuku = 0;
  let judulBuku = [];
  let result = ``;
  let sisaUang = 0;
  for (let i = 0; i < booksArray.length; i++) {
    let jenisBuku = booksArray[i].split(":");
    jenisBuku.reverse();
    hargaArray.push(jenisBuku);
  }

  let newHargaArray = hargaArray.map((value, index, arr) => {
    arr = Number(arr[index][0]);
    value.shift(arr);
    value.unshift(arr);
    return value;
  });

  newHargaArray.sort((a, b) => {
    return a[0] - b[0];
  });

  newHargaArray.reverse();

  for (let i = 0; i < newHargaArray.length; i++) {
    let hargabuku = newHargaArray[i].filter((harga) => {
      if (harga < budget - totalBelanja) {
        jumlahBuku += 1;
        judulBuku.push(" ".concat(newHargaArray[i][1]));
      }

      return harga < budget - totalBelanja;
    });
    hargabuku = Number(hargabuku);
    totalBelanja += hargabuku;
  }
  if (sisaUang < totalBelanja) {
    sisaUang += budget - totalBelanja;
    result += `Afista membeli ${jumlahBuku} buku yaitu${judulBuku}. Total belanja ${totalBelanja}, sisa uang Afista adalah ${sisaUang}.`;
  } else {
    sisaUang += budget - totalBelanja;
    result += `Afista tidak bisa membeli buku sama sekali, sisa uang Afista adalah ${sisaUang}.`;
  }
  return result;
}

// console.log(buyThemAll('The Alchemist:55000,The Hobit:20000,The Power of Habit:10000', 100000)); //Afista membeli 3 buku yaitu The Alchemist, The Hobit, The Power of Habit. Total belanja 85000, sisa uang Afista adalah 15000.
console.log(
  buyThemAll(
    "Javascript itu asik:143200,Belajar HTML5:78000,Lebih Mengenal CSS3:123000",
    300000
  )
); // Afista membeli 2 buku yaitu Javascript itu asik, Belajar HTML5. Total belanja 221200, sisa uang Afista adalah 78800.
// console.log(
//   buyThemAll(
//     "Javascript itu asik:143200,Belajar HTML5:78000,Lebih Mengenal CSS3:123000",
//     20000
//   )
// ); // Afista tidak bisa membeli buku sama sekali, sisa uang Afista adalah 20000.
// // console.log(buyThemAll('Javascript itu asik:143200,Belajar HTML5:78000,Lebih Mengenal CSS3:123000', 0)); // Afista tidak bisa membeli buku sama sekali, sisa uang Afista adalah 0.

console.log(
  buyThemAll(
    "The Alchemist:55000,The Hobbit:40000,The Power of Habit:30000",
    200000
  )
); // Afista membeli 3 buku yaitu The Alchemist, The Hobbit, The Power of Habit. Total belanja 125000, sisa uang Afista adalah 25000.

module.exports = buyThemAll;
