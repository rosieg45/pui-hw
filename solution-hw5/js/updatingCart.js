// HW 5 start

// Created a set to add new roll objects
let cart = [];
const newCart = new Set();

const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const rollType = params.get('roll');

class Roll {
  constructor(rollType, rollGlazing, packSize, basePrice) {
      this.type = rollType;
      this.glazing =  rollGlazing;
      this.size = packSize;
      this.basePrice = basePrice;
      this.element = null;
  }
}

// 4 new Roll objects
const originalRoll = new Roll(
  "Original",
  "Sugar Milk",
  "1",
  "2.49"
);

const walnutRoll = new Roll(
  "Walnut",
  "Vanilla Milk",
  "12",
  "3.49"
);

const raisinRoll = new Roll(
  "Raisin",
  "Sugar Milk",
  "3",
  "2.99"
);

const appleRoll = new Roll(
  "Apple",
  "Original",
  "3",
  "3.49"
);

newCart.add(originalRoll);
newCart.add(walnutRoll);
newCart.add(raisinRoll);
newCart.add(appleRoll);

for (const cartBun of newCart) {
  createElement(cartBun);
}





// Function takes cartBun as an argument and appends the appropriate DOM elements to the shopping cart page
function createElement(cartBun) {
  const template = document.querySelector("#cartTemplate");
  console.log(template);
  const clone = template.content.cloneNode(true);
  console.log(clone);
  cartBun.element = clone.querySelector(".items");

  // To remove items from cart
  const btnDelete = cartBun.element.querySelector("#underline");
  btnDelete.addEventListener('click', () => {
      deleteBun(cartBun);
      console.log(newCart);
      finalPrice(cartBun);
  });

  const cartRollElement = document.querySelector("#outer");

  for (const cartBun of newCart) {
      cartRollElement.prepend(cartBun.element);
      //updateElement(cartBun);
  }
  finalPrice(cartBun);
}

// Changing element based on selection
function updateElement(cartBun) {
  const cartRollImg = cartBun.element.querySelector("#cartpic");
  const cartRollType = cartBun.element.querySelector("#rollone");
  const cartRollGlazing = cartBun.element.querySelector("#glazing");
  const cartRollSize = cartBun.element.querySelector("#size");
  const cartRollPrice = cartBun.element.querySelector("#price");
  cartRollImg.src = "assets/" + cartBun.type.toLowerCase() + "-cinnamon-roll.jpeg";
  cartRollType.innerText = cartBun.type + " cinnamon roll";
  cartRollGlazing.innerText = "Glazing: " + cartBun.glazing;
  cartRollSize.innerText = "Pack Size: " + cartBun.size;
  cartRollPrice.innerText = "$" + ((cartBun.basePrice + glazingChange[cartBun.glazing]) * packChange[cartBun.size]).toFixed(2);
  
  finalPrice();
}

// Final price calculation
function finalPrice(){
  let totalCost = 0;
  let finalPrice = document.querySelector("#totalprice");
  for (const cartBun of newCart){
      let oneBunPrice = ((cartBun.basePrice + glazingChange[cartBun.glazing]) * packChange[cartBun.size]).toFixed(2);
      cartRollPrice = totalCost + oneBunPrice;
  }
  finalPrice.innerText = "$" + totalCost.toFixed(2);
}

// Deleting a bun
function deleteBun(cartBun){
  cartBun.element.remove();
  newCart.delete(cartBun);
}







 









