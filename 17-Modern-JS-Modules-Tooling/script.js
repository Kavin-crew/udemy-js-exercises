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

// import add, { cart } from './shoppingCart.js';
// add('pizza', 2);
// add('bread', 52);
// add('pie', 22);

// console.log(cart);

// const ShoppingCart2 = (function () {
//   const cart = [];
//   const shippingCost = 0;
//   const totalPrice = 237;
//   const totalQuantity = 23;

//   const addToCart = function (product, quantity) {
//     cart.push({ product, quantity });
//     console.log(`quantity: ${quantity}, product: ${product} added to cart`);
//   };

//   const orderStock = function (product, quantity) {
//     console.log(
//       `quantity: ${quantity}, product: ${product} ordered from supplier`
//     );
//   };

//   return { addToCart, cart, totalPrice, totalQuantity };
// })();

// ShoppingCart2.addToCart('apple', 2);
// ShoppingCart2.addToCart('pizza', 4);
// console.log(ShoppingCart2);
// console.log(ShoppingCart2.shippingCost);

import cloneDeep from './node_modules/lodash-es/cloneDeep.js';
const state = {
  cart: [
    { product: 'bread', quantity: 2 },
    { product: 'pizza', quantity: 5 },
  ],
  user: { loggedIn: true },
};

// Object.assign() creates a copy of an object
const stateClone = Object.assign({}, state);
state.user.loggedIn = false;
console.log(stateClone);

// lodash
// creates a copy of an object using lodash
const stateDeepClone = cloneDeep(state);
