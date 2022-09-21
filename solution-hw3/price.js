let basePrice = 2.49;
let glazingPrice = 0;
let packPrice = 0;

packSizeObj1 = {size: "1", priceAdap: 1};
packSizeObj2 = {size: "6", priceAdap: 5};
packSizeObj3 = {size: "3", priceAdap: 3};
packSizeObj4 = {size: "12", priceAdap: 10};
listObj = [packSizeObj1, packSizeObj2, packSizeObj3, packSizeObj4];



function glazingChange(element) {
  console.log("in glaze change");

    const priceChange = element.value;
    console.log(priceChange);
    if ("Keep original" === priceChange) {
      glazingPrice = 0;
    } else if ("Vanilla milk" === priceChange) {
      glazingPrice = .50;
    } else if ("Sugar milk" === priceChange) {
      glazingPrice = 0;
    } else if ("Double chocolate" === priceChange) {
      glazingPrice = 1.50;
    }
    updatePrice();
  }

function updatePrice() {
  console.log("in price update");

  let total = document.querySelector("#next");
  console.log("next =", total.innerHTML);

  console.log("basePrice =" ,basePrice, "glazingPrice =" ,glazingPrice, "packPrice =" ,packPrice);

  let price = (basePrice + glazingPrice) * packPrice;
  total.innerText = "$" + price.toFixed(2);
  console.log("total =" ,total);
}

function packChange(element) { 
  console.log("in pack change");

  const pack = element.value;
  console.log("pack size changed to =", pack);


  listObj.forEach(function (obj) {
    console.log("in pack change LOOP");
    if(pack === obj.size){
    packPrice = obj.priceAdap;
    console.log("obj=",obj); 
    }
});
  updatePrice();
}

