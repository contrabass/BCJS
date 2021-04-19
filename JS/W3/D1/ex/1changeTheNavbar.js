// Exercise 1 : Change The Navbar
// Instructions

// In the <div> above, change the value of the id attribute from navBar to socialNetworkNavigation, using the setAttribute method.
let target = document.getElementById("navBar");
target.setAttribute("navBar","socialNetworkNavigation");

// We are going to add a new <li> to the <ul>.
// First, create a new <li> tag (use the createElement method).
let newLi = document.createElement("li");
// Create a new text node with “Logout” as its specified text.
let newTextNode = document.createTextNode("Logout");
// Append the text node to the newly created list node (li).
newLi.appendChild(newTextNode);
// Finally, append this updated list node to the unordered list above, using the appendChild method.
let targetUL = document.getElementsByTagName("ul");
targetUL[0].appendChild(newLi);

// Bonus
// Use the firstElementChild and the lastElementChild properties to retrieve the first and last li elements from their parent element (ul). Display the text of each link. (Hint: use the textContent property).
target = targetUL[0].firstElementChild;
console.log(target.textContent);
target = targetUL[0].lastElementChild;
console.log(target.textContent);
