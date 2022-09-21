let basePrice = 2.49;
let glazingPrice = 0;
let packPrice = 0;

function glazingChange(element) {
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
  let total = document.querySelector("#next");
  let price = (basePrice + glazingPrice) * packPrice;
  total.innerText = "$" + price.toFixed(2);
  console.log(total);
}

function packChange(element) { 
  const pack = element.value; 
  if ("1" === pack) {
    packPrice = 1;
  } else if ("3" === pack) {
    packPrice = 3;
  } else if ("6" === pack) {
    packPrice = 5;
  } else if ("12" === pack) {
    packPrice = 10;
  }
  updatePrice();
}
