// Create a game of 'Rock Paper Scissors' that runs until one player has three wins
//
//  - Store the player names and number of wins for each player in variables
//  - Use a while loop to run the game until one player has 3 wins
//  - Use:
//    ```
//    var weapons = ['rock' , 'paper', 'scissors'];
//
//    var weaponOfChoice = weapons[parseInt(Math.random()*weapons.length) %3];
//    ```
//   ```
//    to randomly select an item
//  - Output each players hand to the console
//  - Use an `if` or `switch` statement to determine a winner of the round
//  - Output the round winner's name to the console
//  - Create a way to track how many rounds each player has won
//  - When one player wins 3 rounds, announce that player's name as the game winner
//  - Push the code to our class GitHub Repo




const weapons = ['rock', 'paper', 'scissors'];

const game = {
  players: [{
      name: "Harold",
      score: 0,
      lastPlayed: ""
    },
    {
      name: "Sydney",
      score: 0,
      lastPlayed: ""
    },
  ],

}
const player1 = game.players[0];
const player2 = game.players[1];

function getRandom() {
  var weaponOfChoice = weapons[parseInt(Math.random() * weapons.length) % 3];
  return weaponOfChoice
}

var x = 0;

// while (game.players[0].score < 3 || game.players[1].score < 3) {
//   if (game.players[0].score === 3) {
//     console.log(game.players[0].name + " has won!");
//     break
//   } else if (game.players[1].score === 3) {
//     console.log(game.players[1].name + " has won!");
//     break
//   } else {
//     game.players[0].lastPlayed = getRandom();
//     game.players[1].lastPlayed = getRandom();
//
//     console.log(game.players[0].name + " has played " + game.players[0].lastPlayed);
//     console.log(game.players[1].name + " has played " + game.players[1].lastPlayed);
//     let winner = "";
//
//     if (game.players[0].lastPlayed === game.players[1].lastPlayed) {
//       console.log("It was a tie, nobody wins!");
//     } else {
//       if (game.players[0].lastPlayed === "rock") {
//         if (game.players[1].lastPlayed === "paper") {
//           winner = game.players[1].name;
//           game.players[1].score = game.players[1].score + 1;
//         } else if (game.players[1].lastPlayed === "scissors") {
//           winner = game.players[0].name;
//           game.players[0].score = game.players[0].score + 1;
//         }
//       } else if (game.players[0].lastPlayed === "paper") {
//         if (game.players[1].lastPlayed === "rock") {
//           winner = game.players[0].name;
//           game.players[0].score = game.players[0].score + 1;
//         } else if (game.players[1].lastPlayed === "scissors") {
//           winner = game.players[0].name;
//           game.players[0].score = game.players[0].score + 1;
//         }
//       } else if (game.players[0].lastPlayed === "scissors") {
//         if (game.players[1].lastPlayed === "rock") {
//           winner = game.players[1].name;
//           game.players[1].score = game.players[1].score + 1;
//         } else if (game.players[1].lastPlayed === "paper") {
//           winner = game.players[0].name;
//           game.players[0].score = game.players[0].score + 1;
//         }
//       }
//     }
//
//     console.log(winner + " has won this round!");
//     console.log(game.players[0].name + " has " + game.players[0].score + " wins and " + game.players[1].name + " has " + game.players[1].score + " wins");
//   }
// }


while (game.players[0].score < 3 || game.players[1].score < 3) {

  if (player1.score === 3) {
    console.log(player1.name + " has won! 🏁");
    break
  } else if (player2.score === 3) {
    console.log(player2.name + " has won! 🏁");
    break
  } else {
    player1.lastPlayed = getRandom();
    player2.lastPlayed = getRandom();

    console.log(player1.name + " has played " + player1.lastPlayed);
    console.log(player2.name + " has played " + player2.lastPlayed);
    let winner = determineWinner(player1, player2)

    if (winner === player1) {
      player1.score = player1.score + 1;
      console.log(player1.name + " has won this round! 🚀");
    } else {
      player2.score = game.players[1].score + 1;
      console.log(player2.name + " has won this round! 🚀");
    }
    }

        console.log(player1.name + " has " + player1.score + " wins and " + player2.name + " has " + player2.score + " wins");
}


function determineWinner(player1, player2) {
  if (player1.lastPlayed === player2.lastPlayed) {
    console.log("👎  It was a tie, nobody wins!");
  } else if (
    player1.lastPlayed === 'rock' && player2.lastPlayed === 'scissors' ||
    player1.lastPlayed === 'scissors' && player2.lastPlayed === 'paper' ||
    player1.lastPlayed === 'paper' && player2.lastPlayed === 'rock'
  ) {
    return player1;
  } else {
    return player2;
  }
}
