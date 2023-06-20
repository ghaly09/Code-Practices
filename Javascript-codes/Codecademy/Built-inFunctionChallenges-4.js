/*
Ganjil Genap
Diberikan sebuah function ganjilGenap yang menerima satu parameter plat bertipe string. Parameter plat berisi informasi kumpulan plat dimana nomor antar plat dipisahkan oleh titik koma(;).
Function ini akan mengembalikan keterangan jumlah plat genap dan jumlah plat ganjil.
 */

function ganjilGenap(plat) {
  // your code here

  let platgenap = 0;
  let platganjil = 0;

  for (i = 0; i <= plat.length; i++) {
    if (plat[i] === ';' || plat[i] === undefined) {
      if (plat[i - 1] % 2 === 0) {
        platgenap++;
      } else {
        platganjil++;
      }
    }
  }
  if (platgenap === 0) {
    return `plat ganjil sebanyak ${platganjil} dan plat genap tidak ditemukan`;
  } else if (platganjil === 0) {
    return `plat genap sebanyak ${platgenap} dan plat ganjil tidak ditemukan`;
  } else {
    return `plat genap sebanyak ${platgenap} dan plat ganjil sebanyak ${platganjil}`;
  }
}

console.log(ganjilGenap('2341;3429;864;1309;1276'));
// plat genap sebanyak 2 dan plat ganjil sebanyak 3

console.log(ganjilGenap('2347;3429;1305'));
// // plat ganjil sebanyak 3 dan plat genap tidak ditemukan

console.log(ganjilGenap('3432;5532;6956'));
// // plat genap sebanyak 3 dan plat ganjil tidak ditemukan
