// Code by Rachmat Ghaly
function gameGrouping(games) {
  let result = {};
  let titlesActionAdventure = [];
  let titlesFighting = [];
  let titlesFirstPersonShooter = [];
  let titlesSimulation = [];
  let titlesRacing = [];

  let titleGames = games.filter((game) => {
    let { genre, title } = game;
    let gameTitles = {};

    if (games.length < 2) {
      return (result = "Data cannot be compared");
    } else {
      if (genre == "actionAdventure") {
        titlesActionAdventure.push(title);
        gameTitles.title = titlesActionAdventure;
        return (result.actionAdventure = gameTitles);
      } else if (genre == "fighting") {
        titlesFighting.push(title);
        gameTitles.title = titlesFighting;
        return (result.fighting = gameTitles);
      } else if (genre == "firstPersonShooter") {
        titlesFirstPersonShooter.push(title);
        gameTitles.title = titlesFirstPersonShooter;
        return (result.firstPersonShooter = gameTitles);
      } else if (genre == "simulation") {
        titlesSimulation.push(title);
        gameTitles.title = titlesSimulation;
        return (result.simulation = gameTitles);
      } else if (genre == "racing") {
        titlesRacing.push(title);
        gameTitles.title = titlesRacing;
        return (result.racing = gameTitles);
      }
    }
  });

  return result;
}

const allGames = [
  {
    title: "The Last of Us Part I",
    genre: "actionAdventure",
    developer: "Naughty Dog",
    rating: 9.6,
  },
  {
    title: "WWE 2K22",
    genre: "fighting",
    developer: "Visual Concepts",
    rating: 7.5,
  },
  {
    title: "Tom Clancy's Ghost Recon: Wildlands",
    genre: "firstPersonShooter",
    developer: "Ubisoft Belgrade",
    rating: 7.9,
  },
  { title: "The Sims 4", genre: "simulation", developer: "Maxis", rating: 9.2 },
  {
    title: "Tekken 7",
    genre: "fighting",
    developer: "BANDAI NAMCO Studios",
    rating: 9.5,
  },
  {
    title: "The Witcher 3: Wild Hunt",
    genre: "actionAdventure",
    developer: "CD Projekt Red",
    rating: 10,
  },
  {
    title: "Cities: Skylines",
    genre: "simulation",
    developer: "Colossal Order",
    rating: 9.4,
  },
  {
    title: "Far Cry 5",
    genre: "firstPersonShooter",
    developer: "Ubisoft Montreal",
    rating: 8.9,
  },
  {
    title: "Project CARS 3",
    genre: "racing",
    developer: "Slightly Mad Studios",
    rating: 6.8,
  },
  {
    title: "Hot Wheels Unleashed",
    genre: "racing",
    developer: "Milestone",
    rating: 9.2,
  },
];

console.log(gameGrouping(allGames));
console.log(
  gameGrouping([
    {
      title: "Tekken 7",
      genre: "fighting",
      developer: "BANDAI NAMCO Studios",
      rating: 9.5,
    },
  ])
);
// console.log(gameGrouping([0]));

module.exports = gameGrouping;
