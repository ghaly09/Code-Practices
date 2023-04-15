// Code by Rachmat Ghaly
function travelDiscount(id, amount) {
  let result = ``;
  let student = "STD";
  let corporate = "CORP";

  if (student == id.substring(0, 3)) {
    let harga = 0;
    let totalHarga = 0;
    if (amount > 20) {
      harga += amount * 20000 * 0.2;
      totalHarga += amount * 20000 - harga;
      result += `Selamat! Voucher untuk STUDENT dengan id ${id} berhasil di redeem, total yang harus dibayarkan sebesar Rp. ${totalHarga}.`;
    } else {
      harga += amount * 20000;
      result += `Selamat! Voucher untuk STUDENT dengan id ${id} berhasil di redeem, total yang harus dibayarkan sebesar Rp. ${harga}.`;
    }
  } else if (corporate == id.substring(0, 4)) {
    let harga = 0;
    let totalHarga = 0;
    if (amount > 30) {
      harga += amount * 50000 * 0.25;
      totalHarga += amount * 50000 - harga;
      result += `Selamat! Voucher untuk CORPORATE dengan id ${id} berhasil di redeem, total yang harus dibayarkan sebesar Rp. ${totalHarga}.`;
    } else {
      harga += amount * 50000;
      result += `Selamat! Voucher untuk CORPORATE dengan id ${id} berhasil di redeem, total yang harus dibayarkan sebesar Rp. ${harga}.`;
    }
  } else {
    result += "Maaf, voucher yang anda miliki tidak valid!";
  }

  return result;
}

console.log(travelDiscount("STD9845-8461-121", 11));
console.log(travelDiscount("CORP8135-4612-912", 30));
console.log(travelDiscount("STD7601-639-184", 36));
console.log(travelDiscount("CORP5611-8456-999", 31));
console.log(travelDiscount("8347-7-9124365", 99));
console.log(travelDiscount("XYZ8135461-2-912", 1));

module.exports = travelDiscount;
