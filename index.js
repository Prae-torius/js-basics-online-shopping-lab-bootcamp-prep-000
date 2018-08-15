var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
  var price = Math.floor(Math.random() * (100 - 1) + 1);
  var itemObj = {itemName: item, itemPrice: price} ;
  cart.push(itemObj);
  return `${item} has been added to your cart.`;
}

function viewCart() {
  // write your code here
  const message = [];
  for (let i = 0; i < cart.length; i++){
    message.push(`${cart[i].itemName} at $${cart[i].itemPrice},`)
    if (cart.length > 1) {
      message.push(`${cart[i + 1].itemName} at $${cart[i + 1].itemPrice},`)
    return `In your cart, you have ${message[i]} and ${message[i + 1]}.`;
    } else if (i === 0) {
      return `In your cart, you have ${cart[i].itemName} at $${cart[i].itemPrice}.`  
    }
  }
  return `Your shopping cart is empty.`;
}
console.log(getCart())

function total() {
  // write your code here
  let totalPrice
  if (totalPrice === 0) {
    totalPrice = cart.itemPrice
  }
  return totalPrice
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
