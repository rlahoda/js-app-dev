const superHeroes = [
  ['Batman', 'Bruce Wayne'],
  ['Spiderman', 'Peter Parker'],
  ['The Flash', 'Barry Allen']
];

const secretIdentity = superHeroes.map(function(revealArray){
  return revealArray.join(' is ');
});

console.log(secretIdentity.join('\n'));
