// exporting module
console.log('exporting module from shoppingCart.js');

const shippingCost = 10;
export const cart = [];

// name export
export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`quantity: ${quantity}, product: ${product} added to cart`);
};

const totalPrice = 237;
const totalQuantity = 23;

export { totalPrice, totalQuantity };

export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`quantity: ${quantity}, product: ${product} added to cart`);
}
