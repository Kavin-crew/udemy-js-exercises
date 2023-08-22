// importing module
// name imports
// import {
//   addToCart,
//   totalPrice as price,
//   totalQuantity,
// } from './shoppingCart.js';

// addToCart('bread', 5);

// console.log(price, totalQuantity);
console.log('importing module from script.js');

// import * as ShoppingCart from './shoppingCart.js';
// console.log(ShoppingCart);
// ShoppingCart.addToCart('bread', 5);

import add, { cart } from './shoppingCart.js';
add('pizza', 2);
add('bread', 52);
add('pie', 22);

console.log(cart);
