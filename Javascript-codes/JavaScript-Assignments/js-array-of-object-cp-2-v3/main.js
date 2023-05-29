// Code Rachmat Ghaly
function countryMedals(players, countries) {
  let result = [];
  let athleteNames_1 = [];
  let athleteNames_2 = [];
  let totalMedals_1 = 0;
  let totalMedals_2 = 0;
  let playersOfCountry_1 = {};
  let playersOfCountry_2 = {};
  result.push(playersOfCountry_1);
  result.push(playersOfCountry_2);

  if (countries == undefined) {
    return (result = "Countries not provided");
  } else {
    players.filter((biodata) => {
      if (countries[0] == biodata.country) {
        totalMedals_1 += biodata.medals;
        athleteNames_1.push(biodata.name);
        playersOfCountry_1.name = biodata.country;
        playersOfCountry_1.athlete = athleteNames_1;
        playersOfCountry_1.totalMedals = totalMedals_1;
      } else if (countries[1] == biodata.country) {
        totalMedals_2 += biodata.medals;
        athleteNames_2.push(biodata.name);
        playersOfCountry_2.name = biodata.country;
        playersOfCountry_2.athlete = athleteNames_2;
        playersOfCountry_2.totalMedals = totalMedals_2;
      }
    });
  }
  return result;
}

let playerData = [
  {
    name: "Lionel Messi",
    medals: 5,
    country: "Argentina",
  },
  {
    name: "Iker Casillas",
    medals: 7,
    country: "Spain",
  },
  {
    name: "Ahmad Waluyo",
    medals: 5,
    country: "Indonesia",
  },
  {
    name: "Alvin Arkansas",
    medals: 8,
    country: "Indonesia",
  },
  {
    name: "Gabriel Batistuta",
    medals: 1,
    country: "Argentina",
  },
  {
    name: "Xavi Hernandes",
    medals: 9,
    country: "Spain",
  },
  {
    name: "Carles Puyol",
    medals: 5,
    country: "Spain",
  },
  {
    name: "Jatmika Teja",
    medals: 6,
    country: "Indonesia",
  },
  {
    name: "Sergio Aguero",
    medals: 3,
    country: "Argentina",
  },
];

console.log(countryMedals(playerData, ["Indonesia", "Spain"]));
console.log(countryMedals(playerData, ["Argentina", "Spain"]));
console.log(countryMedals(playerData, ["Indonesia", "Argentina"]));
console.log(countryMedals(playerData));

module.exports = countryMedals;
