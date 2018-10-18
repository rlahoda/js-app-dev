const players = [{
    firstName: 'Cam',
    lastName: 'Newton',
    position: 'QB',
    touchdowns: 32
  },
  {
    firstName: 'Derek',
    lastName: 'Anderson',
    position: 'QB',
    touchdowns: 0
  },
  {
    firstName: 'Jonathan',
    lastName: 'Stewart',
    position: 'RB',
    touchdowns: 12
  },
  {
    firstName: 'Mike',
    lastName: 'Tolbert',
    position: 'RB',
    touchdowns: 8
  },
  {
    firstName: 'Fozzy',
    lastName: 'Whittaker',
    position: 'RB',
    touchdowns: 3
  },
  {
    firstName: 'Ted',
    lastName: 'Ginn',
    position: 'WR',
    touchdowns: 9
  },
  {
    firstName: 'Devin',
    lastName: 'Funchess',
    position: 'WR',
    touchdowns: 2
  }
];
console.log('Find a player with the name \'Mike\'');
console.log(players
  .find(function(mike) {
    return mike.firstName === 'Mike';
  }));

console.log('Get an array of all players with position \'RB\'');
console.log(players
  .filter(function(players) {
    return players.position === 'RB';
  }));

console.log('Get an array of all the players lastNames');
console.log(players
  .map(function(players) {
    return players.lastName;
  }));
  
console.log('Get an array of the full names of all the running backs with more than 5 touchdowns');
console.log(players
  .filter(function(players) {
    return players.touchdowns > 5 && players.position === 'RB';
  })
  .map(function(player) {
    return player.firstName + ' ' + player.lastName;
  }));

console.log('Get the number of touchdowns scored by Running backs');
console.log(players
  .filter(function(players) {
    return players.position === 'RB';
  })
  .reduce(function(tDs, players) {
    return tDs += players.touchdowns;
  }, 0));


// x Find a player with the name 'Mike'
// x Get an array of all players with position 'RB'
// x Get an array of all the players lastNames
// Get an array of the full names of all the running backs with more than 5 touchdowns
// Get the number of touchdowns scored by Running backs
