// Exercise 4 : Amazon Shopping
// Instructions
let amazonBasket = {
    glasses: 1,
    books: 2,
    floss: 100
}

// Create a function called checkBasket().
function checkBasket(){
    // It should:
    // prompt the user for an item
    (prompt("Enter item to verify existence in basket")) in amazonBasket ? alert("it's in the basket") : alert ("not in the basket"); 
}

checkBasket();

// let the user know if the item is in the basket
// Hint: Use the in keyword inside the conditional