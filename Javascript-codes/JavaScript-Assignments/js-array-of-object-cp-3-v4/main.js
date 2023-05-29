// Code by Rachmat Ghaly
function mostRecommended(games) {
  let result = {};
  let ratingActionAdventure = [];
  let ratingFighting = [];
  let ratingFirstPersonShooter = [];
  let ratingSimulation = [];
  let ratingRacing = [];

  if (games.length < 2) {
    return (result = "Data cannot be compared");
  } else {
    for (let i = 0; i < games.length; i++) {
      if (games[i].genre == "actionAdventure") {
        ratingActionAdventure.push(games[i].rating);
      } else if (games[i].genre == "fighting") {
        ratingFighting.push(games[i].rating);
      } else if (games[i].genre == "firstPersonShooter") {
        ratingFirstPersonShooter.push(games[i].rating);
      } else if (games[i].genre == "simulation") {
        ratingSimulation.push(games[i].rating);
      } else if (games[i].genre == "racing") {
        ratingRacing.push(games[i].rating);
      }
    }
    let gameRatings = games.filter((gameName) => {
      let { genre, rating } = gameName;
      if (genre == "actionAdventure") {
        return gameName.rating == Math.max(...ratingActionAdventure);
      } else if (genre == "fighting") {
        return gameName.rating == Math.max(...ratingFighting);
      } else if (genre == "firstPersonShooter") {
        return gameName.rating == Math.max(...ratingFirstPersonShooter);
      } else if (genre == "simulation") {
        return gameName.rating == Math.max(...ratingSimulation);
      } else if (genre == "racing") {
        return gameName.rating == Math.max(...ratingRacing);
      }
    });

    let maxRatingArray = gameRatings.map((value, index) => {
      if (value.genre == "actionAdventure") {
        return (result.actionAdventure = value);
      } else if (value.genre == "fighting") {
        return (result.fighting = value);
      } else if (value.genre == "firstPersonShooter") {
        return (result.firstPersonShooter = value);
      } else if (value.genre == "simulation") {
        return (result.simulation = value);
      } else if (value.genre == "racing") {
        return (result.racing = value);
      }
    });
    return result;
  }
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

const games = [
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
    title: "Tekken 7",
    genre: "fighting",
    developer: "BANDAI NAMCO Studios",
    rating: 6,
  },
  {
    title: "The Witcher 3: Wild Hunt",
    genre: "actionAdventure",
    developer: "CD Projekt Red",
    rating: 8,
  },
];
console.log(mostRecommended(allGames));
// console.log(mostRecommended(games));
console.log(
  mostRecommended([
    {
      title: "Tekken 7",
      genre: "fighting",
      developer: "BANDAI NAMCO Studios",
      rating: 9.5,
    },
  ])
);

module.exports = mostRecommended;
