let sizeToPriceAdapt = {
    1:1,
    3:3,
    6:5,
    12:10
}

let glazingToPrice = {
    "Keep original": 0,
    "Sugar Milk": 0,
    "Vanilla milk": 0.5,
    "Double Chocolate": 1.50
}

class Roll {
    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
    }
  }

//creating new set and adding new objects
// const shopCart = new Set();

// let rollOne = new Roll("Original", "Sugar Milk", 1, 2.49);
// let rollTwo = new Roll("Walnut", "Vanilla Milk", 12, 3.49);
// let rollThree = new Roll("Raisin", "Sugar Milk", 3, 2.99);
// let rollFour = new Roll ("Apple", "Keep Original", 3, 3.49);


// shopCart.add(rollOne);
// shopCart.add(rollTwo);
// shopCart.add(rollThree);
// shopCart.add(rollFour);
let shopCart = new Set();
let cartData = localStorage.getItem('cart');
if(cartData) shopCart = new Set(Array.from(JSON.parse(cartData)));

console.log(shopCart);

//calculating price of each roll
function calculatedPrice(basePrice, glazingPrice, packPrice) {
    return (basePrice+glazingPrice)*packPrice;
}


//displaying cart items
function updating(){
    for(let shopObj of shopCart){
        let cartItem = document.getElementsByTagName("template")[0];
        let cartItemClone = cartItem.content.cloneNode(true);
        let cClone = cartItemClone.querySelector(".items");

        cClone.querySelector("#rollone").innerText = shopObj.type + " Cinnamon Roll";
        cClone.querySelector("#glazing").innerText = "Glazing: " + shopObj.glazing;
        cClone.querySelector("#size").innerText = "Pack Size: " + shopObj.size;
        let final = calculatedPrice(shopObj.basePrice, glazingToPrice[shopObj.glazing], sizeToPriceAdapt[shopObj.size]);
        // let final = calculatedPrice(1,2,3);
        cClone.querySelector(".cheap").innerText = "$" + final.toFixed(2);
        //totalPrice = totalPrice + final;
        //document.querySelector("#totalprice").innerText = "$ " + parseFloat(totalPrice).toFixed(2);

        let url = "assets/" + shopObj.type.toLowerCase() + "-cinnamon-roll.jpeg";
        cClone.querySelector("#cartpic").src = url;


        const btnD = cClone.querySelector("#underline");
        btnD.addEventListener("click", () => {
            cClone.remove();
            shopCart.delete(shopObj);
            
            localStorage.setItem("cart", JSON.stringify(Array.from(shopCart)));
            calcTot();
        });
        document.querySelector("#outer").appendChild(cClone);
        calcTot();
    }
}

//calculating final total
function calcTot() {
    let totalPrice = 0;
    for(let shopObj of shopCart){
        let final = calculatedPrice (shopObj.basePrice, glazingToPrice[shopObj.glazing], sizeToPriceAdapt[shopObj.size]);
        totalPrice = totalPrice + final;
    
    }
    document.querySelector("#totalprice").innerText = "$ " + parseFloat(totalPrice).toFixed(2);
}

updating(shopCart);