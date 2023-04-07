// code by  Rachmat Ghaly
function rockPaperScissor(player1, player2) {
  result = "";
  // "Player 1 Won!"
  if (player1 == "scissor" && player2 == "paper") {
    result = "Player 1 Won!";
  } else if (player1 == "rock" && player2 == "scissor") {
    result = "Player 1 Won!";
  } else if (player1 == "paper" && player2 == "rock") {
    result = "Player 1 Won!";
  }

  // "Player 2 Won!"
  if (player1 == "rock" && player2 == "paper") {
    result = "Player 2 Won!";
  } else if (player1 == "paper" && player2 == "scissor") {
    result = "Player 2 Won!";
  } else if (player1 == "scissor" && player2 == "rock") {
    result = "Player 2 Won!";
  }

  // Draw!
  if (player1 == "paper" && player2 == "paper") {
    result = "Draw!";
  } else if (player1 == "rock" && player2 == "rock") {
    result = "Draw!";
  } else if (player1 == "scissor" && player2 == "scissor") {
    result = "Draw!";
  }

  return result;
}

console.log(rockPaperScissor("scissor", "paper")); // "Player 1 Won!"
console.log(rockPaperScissor("rock", "paper")); // "Player 2 Won!"
console.log(rockPaperScissor("paper", "paper")); // "Draw!"
console.log(rockPaperScissor("rock", "rock")); // "Draw!"

module.exports = rockPaperScissor;
