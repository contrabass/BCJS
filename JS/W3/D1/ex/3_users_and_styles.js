// Exercise 3 : Users And Style
// Instructions

// Add a “light blue” background color and some padding to the <div>.
let target = document.getElementsByTagName("div");
target[0].style.backgroundColor="lightblue";
target[0].style.padding = "0.75em";
// Do not display the first name (John) in the list.
target = document.getElementsByTagName("li");
target[0].style.display="none";
// Add a border to the second name (Pete)
target[1].style.border="solid 0.1em";
// Change the font size of the whole body.
document.children[0].children[1].style.fontSize = '1.5';
// Bonus: If the background color of the div is “light blue”, alert “Hello x and y” (x and y are the users in the div).
//MBJ: there are no users in the div...
if (document.getElementsByTagName("div")[0].style.backgroundColor=="lightblue"){
    let x = document.getElementsByTagName("li")[0].textContent;
    let y = document.getElementsByTagName("li")[1].textContent;
   
    alert(`Hello ${x} and ${y}`);
        
}