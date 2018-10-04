const temp = 80;
const precipitation = "sunny";
let precip = false;
const indoors = true;
console.log('The temperature is ' + temp + " degrees.");
console.log("The weather is " + precipitation);
if (precipitation != "sunny") {
  precip = true;
}

if ((temp > 80 && precip === false )|| indoors === true) {
  console.log('time to swim!');
} else {
  console.log('nope');
}
