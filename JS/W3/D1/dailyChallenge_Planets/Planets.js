// Instructions
// In this exercise we will be creating a webpage with a black background as the universe and we will fill the universe with planets and their moons.
// We will provide the HTML page.
// You only have to work with a JS file.
// Create an array which value is the planets of the solar system.
let planets=["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];
// For each planet in the array, create a <div> using createElement. This div should have a class named "planet".
let tBody = document.children[0].children[1];
for (planet of planets){
    let tDiv = document.createElement("div");
    tDiv.id=planet;
    tDiv.classList.add("planet");
    // Each planet should have a different background color. (Hint: add a new class to each planet).
    tDiv.style.backgroundColor=`rgb(${(Math.random()*256).toFixed(0)}, ${(Math.random()*256).toFixed(0)}, ${(Math.random()*256).toFixed(0)})`;
    // Finally append each div to the <section> in the HTML (presented below).
    let textNode=document.createTextNode(planet);
    tDiv.appendChild(textNode);
    tBody.appendChild(tDiv);
}
// Bonus: Do the same process to create the moons.
// Be careful, each planet has a certain amount of moons. How should you display them?
// Should you still use an array for the planets ? Or an array of objects ?