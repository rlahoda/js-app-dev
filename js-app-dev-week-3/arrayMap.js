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

]

const familyInTwelveYears = [];

for (let i = 0; i < family.length; i++) {
  familyInTwelveYears.push({
    name: family[i].name,
    age: family[i].age + 12,
  })
}

console.log(familyInTwelveYears);


const familyInFiveYears = family.map(function(member) {
  return {
    name: member.name,
    age: member.age + 5,
  };
});

console.log(familyInFiveYears);
