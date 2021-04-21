// example Banner
// without parameters
setTimeout(showBanner, 5000);
let section = document.querySelector("section");
function showBanner(){
	let div = document.createElement("div");
	div.classList.add("banner");
	let text = document.createTextNode(`Sales end in 10min`);
	div.appendChild(text);
	section.appendChild(div);
}
//with parameters
setTimeout(showBanner, 5000, "Zara");
let section = document.querySelector("section");
function showBanner(nameOfShop){
	let div = document.createElement("div");
	div.classList.add("banner");
	let text = document.createTextNode(`Sales end in 10min in ${nameOfShop}`);
	div.appendChild(text);
	section.appendChild(div);
}