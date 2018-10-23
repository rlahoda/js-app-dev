const prompt = require('prompt');
let userProfile = {
  name: '',
  address: '',
  city: '',
  state: '',
  zipcode: '',
  avatar: '',
}

function performUpdate(obj, key, value) {
  const otherObj = {}; //create an empty object
  otherObj[key] = value; //keys in object literals are literal so use the bracket notation to specify this because key is a variable
  let newObj = Object.assign({}, obj, otherObj);// overwrite the info in obj with the info in otherObj
  console.log(obj);
  console.log(newObj);
  userProfile = Object.assign({}, userProfile, otherObj);
  console.log(userProfile);
}

function updateProfile(profile) {
  prompt.start(); // uses the npm package "prompt"
  prompt.get(['fieldToUpdate','value'], function(err, answers){
    console.log(answers);
    performUpdate(profile, answers.fieldToUpdate, answers.value)
  })
  // console.log(profile);
}
updateProfile(userProfile);
