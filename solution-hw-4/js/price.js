let basePrice = 2.49;
let glazingPrice = 0;
let packPrice = 0;

//Updating price 
function updatePrice() {
  console.log("in price update");

  let total = document.querySelector("#next");
  console.log("next =", total.innerHTML);

  console.log("basePrice =" ,basePrice, "glazingPrice =" ,glazingPrice, "packPrice =" ,packPrice);

  let price = (basePrice + glazingPrice) * packPrice;
  total.innerText = "$" + price.toFixed(2);
  console.log("total =" ,total);
}

//Glazing dropdown
let select = document.getElementById("glazingOptions");

let glazeOp1 = document.createElement("option");
glazeOp1.innerHTML = "Keep original";
select.appendChild(glazeOp1);

let glazeOp2 = document.createElement("option");
glazeOp2.innerHTML = "Sugar milk";
select.appendChild(glazeOp2);

let glazeOp3 = document.createElement("option");
glazeOp3.innerHTML = "Vanilla milk";
select.appendChild(glazeOp3);

let glazeOp4 = document.createElement("option");
glazeOp4.innerHTML = "Double chocolate";
select.appendChild(glazeOp4);

//Changing glaze
let glazeOpObj1 = {glazingOptions: "Keep original", priceAdapt: 0.00};
let glazeOpObj2 = {glazingOptions: "Sugar milk", priceAdapt: 0.00};
let glazeOpObj3 = {glazingOptions: "Vanilla milk", priceAdapt: 0.50};
let glazeOpObj4 = {glazingOptions: "Double chocolate", priceAdapt: 1.50};
const listGlazeObj = [glazeOpObj1, glazeOpObj2, glazeOpObj3, glazeOpObj4];

function glazingChange(element) {
  console.log("in glaze change");

    const priceChange = element.value;
    console.log(priceChange);

    listGlazeObj.forEach(function (obj) {
      console.log("in price change LOOP");
      if (priceChange === obj.glazingOptions){
      glazingPrice = obj.priceAdapt;
      console.log("obj=",obj); 
      }
    });
  updatePrice();
}

//Price dropdown
let price = document.getElementById("packSizes");

let packSize1 = document.createElement("option");
packSize1.innerHTML = "1";
price.appendChild(packSize1);

let packSize2 = document.createElement("option");
packSize2.innerHTML = "3";
price.appendChild(packSize2);

let packSize3 = document.createElement("option");
packSize3.innerHTML = "6";
price.appendChild(packSize3);

let packSize4 = document.createElement("option");
packSize4.innerHTML = "12";
price.appendChild(packSize4);

//Changing price
let packSizeObj1 = {size: "1", priceAdap: 1};
let packSizeObj2 = {size: "6", priceAdap: 5};
let packSizeObj3 = {size: "3", priceAdap: 3};
let packSizeObj4 = {size: "12", priceAdap: 10};
const listObj = [packSizeObj1, packSizeObj2, packSizeObj3, packSizeObj4];

function packChange(element) { 
  console.log("in pack change");

  const pack = element.value;
  console.log("pack size changed to =", pack);


  listObj.forEach(function (obj) {
    console.log("in pack change LOOP");
    if (pack === obj.size){
    packPrice = obj.priceAdap;
    console.log("obj=",obj); 
    }
  });
  updatePrice();
}

const queryString = window.location.search;
  const params = new URLSearchParams(queryString);
  const rollType = params.get('rolls');

  const rollBasePrice = rolls[rollType].basePrice;
  const rollImageURL = rolls[rollType].imageFile;

//for updating page details
 
// update title in html
let titleElement = document.getElementById('title');
titleElement.innerHTML = rollType + " Cinnamon Roll";

// update header in html
let headerElement = document.getElementById('heading');
headerElement.innerHTML = rollType + " Cinnamon Roll";

// update image in html
let imageElement = document.getElementById('image');
imageElement.src = '../solution-hw4/assets/products/' + rollImage;

// update price in html
let priceElement = document.getElementById('total-price-detail');
priceElement.innerHTML = "$" + rollPrice;

function updateDetails() {
    const pagePrice = document.querySelector('#specific-item-price');
    const pageIMG = document.querySelector('#specific-product-img');
    const pageTitle = document.querySelector('.specific-roll-name');

    pageTitle.innerText = rollType;
    pagePrice.innerText = rollBasePrice;
    pageIMG.src = rollImageURL;
}

updateDetails();

//create empty array
let cart = [];

//for updating Cart page
class Roll {
    type;
    glazing;
    size;
    basePrice;

    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
    }
}

function updateCart() {
    const newRoll = new Roll(rollType, glazing.options,packSize.options,basePrice)
    cart.push(newRoll);
    console.log(cart);
}

//grabbing the button
const addButton = document.querySelector('#button');

addButton.onclick = updateCart;

//Change value of each option to index of it, basically use index for option 

