const hands = ['💎', '📜', '✂️'];
const player1 = {
  name: '',
  hand: '',
  wins: 0,
};
const player2 = {
  name: 'Harriet',
  hand: getHand(),
  wins: 0,
};
let rounds = 1;

function getHand() {
  return hands[parseInt((Math.random() * 10) % 3)];
}

function playerSetup(plyr1, plyr2) {
  const player1Name = document.querySelector('#player1Name');
  const player2Name = document.querySelector('#player2Name');
  player1.name = prompt('What\'s your name?');
  rounds = prompt('How many rounds do you want to play?');
  player1Name.innerHTML = plyr1.name;
  player2Name.innerHTML = plyr2.name;
}

// triggered by the user clicking the button in the play area
function playRound(hand) {
  // hide buttons
  const buttons = document.getElementsByTagName('button');
  for (button of buttons) {
      // deactivate buttons
      button.disabled = true;

  }
  // get p1 hand
  player1.hand = hand;
  // get p2 hand
  player2.hand = getHand();
  // determine winner
  play(player1, player2)
}







function play(p1, p2) {
  const container = document.querySelector('#game');
  const player1Score = document.querySelector('#player1Score');
  const player2Score = document.querySelector('#player2Score');
  let winner = {};
  if (p1.hand === p2.hand) {
    let result = `<p>${p1.name} played ${p1.hand}, ${p2.name} played ${p2.hand}  👎  It was a tie, nobody wins!</p>`;
    container.innerHTML += result;
    // return null;
  } else if (
    p1.hand === '💎' && p2.hand === '✂️' ||
    p1.hand === '✂️' && p2.hand === '📜' ||
    p1.hand === '📜' && p2.hand === '💎'
  ) {
    let result = `
      <p>${p1.name} played ${p1.hand} and ${p2.name} played ${p2.hand}</p>
      <p><strong>${p1.name} is the winner!</strong></p>
      `;
    p1.wins++;
    player1Score.innerHTML = player1.wins;
    container.innerHTML += result;
    winner = p1;
  } else {
    let result = `
      <p>${p1.name} played ${p1.hand} and ${p2.name} played ${p2.hand}</p>
      <p><strong>${p2.name} is the winner!</strong></p>
      `;
    p2.wins++;
    player2Score.innerHTML = player2.wins;
    container.innerHTML += result;
    winner = p2;
  }
  gamePlay(p1, p2);
}

// function doneYet(winner) {
//   if (winner === player1) {
//
//     player1Score.innerHTML = player1.wins;
//     console.log(play1.name + "  has won this round! 🚀  They have " + player1.wins + ' wins');
//     let result = `<h2>${player1.name}  has won this round! 🚀  They have ${player1.wins} wins</h2>`;
//     container.innerHTML += result;
//   } else if (winner === player2) {
//
//     player2Score.innerHTML = player2.wins;
//     console.log(player2.name + "  has won this round! 🚀  They have " + player2.wins + ' wins');
//     let result = `<h2> ${player2.name} has won this round! 🚀  They have ${player2.wins} wins</h2>`;
//     container.innerHTML += result;
//   }
//
// }


function gamePlay(p1, p2) {
const container = document.querySelector('#game');
  if (p1.wins < rounds && p2.wins < rounds) {
    // ask for their name if they don't already have one in
    if (p1.name === '') {
      playerSetup(p1, p2);
    }
    const buttons = document.getElementsByTagName('button');
    for (button of buttons) {
        // deactivate buttons
        button.disabled = false;

    }

      // ask for their hand
        // getP1Hand(p1, p2, playUntil);


    // gamePlay(p1, p2, playUntil);
  } else {
    // declare winner
    if (p1.wins === rounds) {
      container.innerHTML += `
      <h2>${p1.name} wins the game!</h2>
      `;
    } else {
      container.innerHTML += `
      <h2>${p2.name} wins the game!</h2>
      `;
    }
  }
}





// determine winner
// increment winner score
// if nobody has won enough, activate buttons and repeat


gamePlay(player1, player2);
