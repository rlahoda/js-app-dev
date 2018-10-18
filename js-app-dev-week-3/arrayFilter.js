const animals = [
  {
    name: 'monkey',
    habitat: 'jungle',
  },
  {
    name: 'racoon',
    habitat: 'forest',
  },
  {
    name: 'tiger',
    habitat: 'jungle',
  },
  {
    name: 'pelican',
    habitat: 'ocean',
  },
];

const jungleAnimals = [];

for (var i = 0; i < animals.length; i++) {
  if(animals[i].habitat === 'jungle') {
    jungleAnimals.push(animals[i]);
  }
}

console.log(jungleAnimals);
console.log('-------------------------------');
const filteredJungleAnimals = animals.filter(function(animal) {
  // console.log(animal);
  return animal.habitat === 'jungle';
});
console.log(filteredJungleAnimals);
