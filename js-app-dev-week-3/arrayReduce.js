const family = [
  {
    name: 'mom',
    age: 41,
  },
  {
    name: 'dad',
    age: 37,
  },
  {
    name: 'evie',
    age: 9,
  },
  {
    name: 'samuel',
    age: 7,
  },

];

let familyNames = '';

for (var i = 0; i < family.length; i++) {
  let delineator;
  if (i === family.length - 1) {
    delineator = '.';
  } else if (i === family.length - 2) {
    delineator = ', & '
  } else {
    delineator = ', '
  }

  familyNames += family[i].name + delineator;
}

console.log(familyNames);

const familyNamesWithAge = family.reduce(function(names, member, currentIndex, familyArray){
  if (currentIndex === familyArray.length - 1) {
  return names + member.name + ' is ' + member.age + '.';
} else if (currentIndex === familyArray.length - 2) {
  return names + member.name + ' is ' + member.age + ', & ';
} else {
  return names + member.name + ' is ' + member.age + ', ';
}
}, '')

console.log(familyNamesWithAge);
