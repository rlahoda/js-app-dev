const shoppingList = ['pop tarts', 'ramen noodles', 'chips', 'salsa', 'coffee'];
console.log('shopping list: ' + shoppingList);
shoppingList.push('fruit loops');
console.log('shopping list: ' + shoppingList);
shoppingList.splice(4,1,'fair trade coffee');
console.log('shopping list: ' + shoppingList);
let shoppingCart = [];
console.log('shopping cart: ' + shoppingCart);
shoppingCart.push(shoppingList.pop());
console.log('shopping list: ' + shoppingList);
console.log('shopping cart: ' + shoppingCart);
shoppingCart.push(shoppingList.pop());
console.log('shopping list: ' + shoppingList);
console.log('shopping cart: ' + shoppingCart);

while (shoppingList.length > 0) {
  shoppingCart.push(shoppingList.pop());
  console.log('shopping list: ' + shoppingList);
  console.log('shopping cart: ' + shoppingCart);
}
shoppingCart.sort().reverse();
console.log('shopping cart: ' + shoppingCart);
console.log(shoppingCart.join());
