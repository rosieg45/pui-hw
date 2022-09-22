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
glazeOpObj1 = {glazingOptions: "Keep original", priceAdapt: 0};
glazeOpObj2 = {glazingOptions: "Sugar milk", priceAdapt: 0};
glazeOpObj3 = {glazingOptions: "Vanilla milk", priceAdapt: 0.50};
glazeOpObj4 = {glazingOptions: "Double chocolate", priceAdapt: 1.50};
listGlazeObj = [glazeOpObj1, glazeOpObj2, glazeOpObj3, glazeOpObj4];

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

//Price dropdown
packSizeObj1 = {size: "1", priceAdap: 1};
packSizeObj2 = {size: "6", priceAdap: 5};
packSizeObj3 = {size: "3", priceAdap: 3};
packSizeObj4 = {size: "12", priceAdap: 10};
listObj = [packSizeObj1, packSizeObj2, packSizeObj3, packSizeObj4];

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

//Changing glaze
function glazingChange(element) {
  console.log("in glaze change");

    const priceChange = element.value;
    console.log(priceChange);

    listGlazeObj.forEach(function (obj) {
      console.log("in pack change LOOP");
      if (glaze === obj.glazingOptions){
      glazingPrice = obj.priceAdapt;
      console.log("obj=",obj); 
      }
    });
  updatePrice();
}


//Changing price
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

