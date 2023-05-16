// Code by Rachmat Ghaly
function travelSeat(passengers, seatColumn) {
  let result = [];
  let seats = passengers.sort();
  let newSeats = [];

  for (let i = 0; i < seats.length; i++) {
    if (seatColumn == 0) {
      return "Invalid number";
    } else if (passengers == false) {
      return "Oops! tickets not sold!";
    } else {
      newSeats.push(seats[i]);
      if (newSeats.length == seatColumn) {
        result.push(newSeats);
        newSeats = [];
      }
    }
  }
  if (seatColumn <= 0) {
    return "Invalid number";
  } else if (passengers == false) {
    return "Oops! tickets not sold!";
  } else if (newSeats.length < seatColumn && newSeats != false) {
    for (let j = newSeats.length; j < seatColumn; j++) {
      newSeats.push("Seat available");
    }
    result.push(newSeats);
  }
  //   for (let i = 0; i < seats.length; i += seatColumn) {
  //     result.push(seats[i + 1]);
  //     // result.push([seats[2], seats[seatColumn + 1]]);
  //   }
  //   for (let i = 0; i < seatColumn; i++) {
  //     for (let j = seatColumn; j < seats.length; j++) {
  //       seats = seats.slice(i, j);
  //     }
  //     result.push(seats);
  //   }
  //   let filterSeats = seats.filter((value, index) => {
  //     seats = seats.slice(index, index + seatColumn);
  //     return result.push(seats);
  //   });

  return result;
}

console.log(travelSeat(["Djalal", "Ismet", "Hengky", "Romli"], 2));
console.log(travelSeat(["Karin", "Naila", "Indah", "Inezka", "Nisa"], 5));
console.log(travelSeat(["Waluyo", "Alvin", "Arda", "Irfan", "Hilmi"], 3));
// console.log(travelSeat(["Zona", "Retha", "Yoga"], 9));
// console.log(travelSeat([], 4));

module.exports = travelSeat;
