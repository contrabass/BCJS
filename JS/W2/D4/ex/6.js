// Exercise 6 : Tips
// Instructions
// John created a simple tip calculator to help calculate how much to tip when he and his family go to restaurants.

// The calculator has the following rules:
// 1. Tip 20% when the bill is less than $50,
// 2. Tip 15% when the bill is between $50 and $200,
// 3. Tip 10% if the bill is more than $200.

// Ask John for the amount of the bill.
let sum = parseFloat(prompt("amount?"));

function calculateTip(bill) {
  switch (true) {
    case bill >= 200:
      return sum * 0.1;
      break;
    case bill >= 50:
      return sum * 0.15;
    default:
      return sum * 0.2;
  }
}

// Create the program explained above.
// In the end, John would like to know:
// Tip amount.
// Final bill (bill + tip).
let tip = calculateTip(sum);
alert(`Tip: ${tip}\nFinal bill: ${sum + tip}`);

// (NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)
