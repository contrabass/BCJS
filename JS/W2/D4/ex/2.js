
// Exercise 2 : What’s In My Wallet ?
// Instructions
// Given a item price and an array representing the amount of change in your pocket, determine whether or not you can afford the item.

// Change will always be represented in the following order: quarters, dimes, nickels, pennies.
// Quarters  = 0.25
// Dimes = 0.10
// Nickels = 0.05
// Pennies = 0.01
// To illustrate:
// changeEnough([25, 20, 5, 0], 4.25) should return true, since having 25 quarters, 20 dimes, 5 nickels and 0 pennies gives you 6.25 + 2 + .25 + 0 = 8.50 which is bigger than 4.25 (the total amount due)
let changeInPocket = [22,3,15,9];
function changeEnough(change,sum){
    let totalChange=change[0]*.25+change[1]*.1+change[2]*.05+change[3]*.01;
    return (totalChange > sum);
}

console.log(changeEnough(changeInPocket,6));