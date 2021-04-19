// Exercise 2 : Users
// Instructions

// In the HTML above change the name “Pete” to “Richard”.
let bins = document.getElementsByClassName("list");
for (let bin of bins){
    for (item of bin.children){
        if (item.textContent=='Pete'){
            item.textContent='Richard'
        }
    }
}
// Change each first name of the two <ul>'s to your name.
for (let bin of bins){
    bin.children[0].textContent="MBJ";
}

// At the end of each <ul> add a <li> that says “Hey students”.
for (let bin of bins){
    let newLi = document.createElement("li");
    let newTextNode = document.createTextNode("Hey students");
    newLi.appendChild(newTextNode);
    bin.appendChild(newLi);
}
// Delete the name Sarah from the second <ul>.
for (let bin of bins){
    for (item of bin.children){
        if (item.textContent=='Sarah'){
            console.log(item);
            bin.removeChild(item);
        }
    }
}

// Bonus
// Add a class called student_list to both of the <ul>'s.
for (let bin of bins){
    bin.classList.add("student_list");
}

// Add the classes university and attendance to the first <ul>.
bins[0].classList.add("university", "attendance");