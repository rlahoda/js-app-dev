let billAmount = 100;
function gratuity(billAmount) {
  return billAmount * 0.2;
}
function totalWithGrat(billAmount) {
  return billAmount + gratuity(billAmount);
}
console.log("Your total, with gratuity, is: " + totalWithGrat(billAmount));
