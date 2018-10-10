const hands = ['💎', '📜', '✂️'];

function getHand() {
  return hands[parseInt((Math.random()*10)%3)];
}


const player1 = {
    name: 'Johnny',
    hand: getHand(),
    wins: 0,
  };
const player2 = {
    name: 'Harriet',
    hand: getHand(),
    wins: 0,
  };
// console.log(player1);
// console.log(player2);

function playRound(p1, p2) {
  if (p1.hand === p2.hand) {
    console.log(p1.name + ' played  ' + p1.hand + '  ' + p2.name + ' played ' + p2.hand + "  👎  It was a tie, nobody wins!");
    return null;
  } else if (
    p1.hand === '💎' && p2.hand === '✂️' ||
    p1.hand === '✂️' && p2.hand === '📜' ||
    p1.hand === '📜' && p2.hand === '💎'
  ) {
    console.log(p1.name + "  played " + p1.hand + '  and ' + p2.name + "  played " + p2.hand);
    console.log(p1.name + ' is the winner!');
    return player1;
  } else {
      console.log(p1.name + "  played " + p1.hand + '  and ' + p2.name + "  played " + p2.hand);
    console.log(p2.name + ' is the winner!');
    return player2;
  }
}

function playGame(play1, play2, playUntil) {
  while (play1.wins < playUntil && play2.wins < playUntil) {
    play1.hand = getHand();
    play2.hand = getHand();
    let winner = playRound(play1, player2);
    if (winner === player1) {
      play1.wins = play1.wins + 1;
      console.log(play1.name + "  has won this round! 🚀  They have " + play1.wins + ' wins');
    } else if (winner === player2) {
      play2.wins = play2.wins + 1;
      console.log(play2.name + "  has won this round! 🚀  They have " + play2.wins + ' wins');
    }
    // console.log(player1);
    // console.log(player2);
  }
}

playGame(player1, player2, 5);
