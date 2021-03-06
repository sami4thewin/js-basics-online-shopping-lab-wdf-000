var cart = [];

function setCart(newCart) {
  cart = newCart;
}

function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}

function getCart() {
  return cart;
}

// function addToCart(item) {
//   var p = Math.floor((Math.random() * 100) + 1);
//   var o = {item: p};
//   cart.push(o);
//   console.log(item + " has been added to your cart.");
//   return cart;
// }

function addToCart(item) {
  var p = Math.floor((Math.random() * 100) + 1);
  var o = {};
  o[item] = p;
  cart.push(o);
  console.log(item + " has been added to your cart.");
  return cart;
}

function viewCart() {
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.");
  } else {
    var both = [];
    for (var i = 0; i < cart.length; i++) {
      for (var key in cart[i]) {
        both.push(`${key} at $${cart[i][key]}`);
      }
    }
    console.log(`In your cart, you have ${both.join(", ")}.`);
  }
}

function removeFromCart(item) {
  var l = cart.length;
  for (var i = 0; i < cart.length; i++) {
    var ob = cart[i];
    if (ob.hasOwnProperty(item)) {
      cart.splice(i, 1);
    }
  }
  if (l === cart.length) {
    console.log("That item is not in your cart.");
  } else {
    return cart;
  }
}

function placeOrder(cc) {
  if (typeof cc === 'undefined') {
    console.log("We don't have a credit card on file for you to place your order.");
  } else {
    console.log("Your total cost is $" + `${total()}` + ", which will be charged to the card " + cc + ".");
    cart.splice(0, cart.length);
  }
}
