// -------------------------------------------
// EVENTS
// -------------------------------------------

// 1. Retrieve the buttons
let inputButton = document.getElementById("inputBtn");
let inputButton2 = document.getElementById("inputBtn2");

//Specify the element you want to work with
//we use the addEventListener()
//parameter of the addEventListener() method :
	// the event
	// the function to call : callback function
inputButton.addEventListener("click", inform);
inputButton2.addEventListener("mouseover", inform);

//retrieve the parent 
let div = document.getElementById("listItems");
// create a ul
let ul = document.createElement("ul");
// add the ul to the div
div.appendChild(ul)

//appendChild SYNTAX
//where.appendChild(what)

// function inform called after an event occur
function inform(){
	let li = document.createElement("li");
	let text = document.createTextNode("You clicked me");
	li.appendChild(text);
	ul.appendChild(li);
}



// -------------------------------------------
// Example with the event object
// -------------------------------------------

function inform(event){
	console.log("type of event ", event.type)
	console.log("target of event ", event.target)

	let li = document.createElement("li");
	let text;

	if (event.target.id == "inputBtn") {
		text = document.createTextNode("you clicked me from the yellow button")
		li.style.backgroundColor = "yellow"
	} else if (event.target.id == "inputBtn2") {
		text = document.createTextNode("you hoovered me from the pink button")
		li.style.backgroundColor = "pink"
	}

	li.appendChild(text);
	ul.appendChild(li);
	
}

// -------------------------------------------
// QuerySelector
// -------------------------------------------

// * getElementById
// * getElementsByTagName
// * getElementsByClassName

// *children
// *parentNode
// *previousElementSibling


let h3 = document.querySelector("h3");
console.log(h3)

let input = document.querySelector("#inputBtn");
console.log(input)

let paragraph = document.querySelectorAll(".para");
console.log(paragraph)

let allParagraph = document.querySelectorAll("#test p");
console.log(allParagraph)

let requiredInput = document.querySelectorAll("input:required");
console.log(requiredInput)



//----------------------------------
// FORMS
//----------------------------------

// to retrieve the form
let formInHtml = document.forms[2];
console.log(formInHtml)

// to retrieve the button
let buttonInHTML = formInHtml.elements.buttonHTML;
console.log(buttonInHTML)

buttonInHTML.addEventListener("click", fetchUsername)


function fetchUsername(event){
	let inputInHTML = formInHtml.elements.username;
	console.log(inputInHTML.value)
	let h1 = document.createElement("h1");
	let text = document.createTextNode(`Welcome ${inputInHTML.value}`);
	h1.appendChild(text)
	document.body.appendChild(h1)
	// we use it to stop the default action of the submit button
	//we use it because the input in the HTML has a type="submit"
	event.preventDefault();
};