function upperCaser(input) {
  return input.toUpperCase();
}
module.exports = upperCaser


function repeat(operation, num) {
  // SOLUTION GOES HERE
  for (var i = 0; i < num; i++) {
    operation();
  }
}

// Do not remove the line below
module.exports = repeat

// official solution below:
// function repeat(operation, num) {
// if (num <= 0) {
//   return
// } else {
// operation()
// return repeat(operation, --num) }
}
//
//     module.exports = repeat

function doubleAll(numbers) {
  var result = numbers.map(function(x) {
    return x * 2;
  });
  return result
}

module.exports = doubleAll


// function getShortMessages(messages) {
//   var filteredMessages = messages.map(function(msg) {
//     return msg.message;
//   }).filter(function(msg) {
//     return msg.length < 50;
//   })
//     return filteredMessages;
//     }
//
// module.exports = getShortMessages

function checkUsersValid(goodUsers) {
  return function allUsersValid(submittedUsers) {
    const valid = submittedUsers.every(function(user) {
      // console.log(user);
      return goodUsers.some(function(good) {
        return good.id === user.id;
      })
    })
    return valid;
  };
}

module.exports = checkUsersValid

//official solution:
// module.exports = function checkUsersValid(goodUsers) {
//       return function allUsersValid(submittedUsers) {
//         return submittedUsers.every(function(submittedUser) {
//           return goodUsers.some(function(goodUser) {
//             return goodUser.id === submittedUser.id
//           })
//         })
//       }
//     }


function countWords(inputWords) {

  let countedWords = inputWords.reduce(function(counter, thing) {
    if (thing in counter) {
      counter[thing]++;
    } else {
      counter[thing] = 1;
    }
    return counter;
  }, {});
  return countedWords;
}

module.exports = countWords


// official solution:
// function countWords(arr) {
//       return arr.reduce(function(countMap, word) {
//         countMap[word] = ++countMap[word] || 1 // increment or initialize to 1
//         return countMap
//       }, {}) // second argument to reduce initialises countMap to {}
//     }
//
//     module.exports = countWords


// function reduce(arr, fn, initial) {
//   if (!arr.length) {
//     return initial;
//   }
//   const head = arr[0];
//
//   return fn(head);
//
//   return initial.
// }
//
// module.exports = reduce
