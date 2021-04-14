// Exercise 5 : Shopping List
// Instructions
let stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

let prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 
// Add the stock and prices objects to your js file.
// Create an array called shoppingList with the following items: “banana”, “orange”, and “apple”. It means that you have 1 banana, 1 orange and 1 apple in your cart.
let shoppingList = ["banana", "orange", "apple"];
// Create a function called myBill() that takes no arguments.
// The function should return the total price of your shoppingList. In order to do this you must follow these rules:
function myBill () {
    let bill=0;
    for (item of shoppingList){
                    // console.log('001 '+ item)
        // The item must be in stock.
        if (stock[item]>0) {
            // If the item is in stock find out the price in the prices object.
            bill += prices[item]
            stock[item]--;
        };
    }
    return bill;
}


// Call the myBill() function.
console.log(myBill());
// Bonus: If the item is in stock, decrease the item’s stock by 1

// console.log(stock);
