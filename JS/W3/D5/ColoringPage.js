const pad = document.getElementById("pad");

let mousePressed = false;

window.addEventListener("mouseup", mouseDownStateOff);

pixelPadMaker(100,300);

function pixelPadMaker(rows, cols) {
  pad.style.setProperty('--grid-rows', rows);
  pad.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    cell.addEventListener("mousedown", mouseDownStateOn)
    cell.addEventListener("mouseover", color);
    pad.appendChild(cell).className = "pixelgit";
  };
};2

function mouseDownStateOff () { 
    mousePressed = false;
    console.log(mousePressed);
};

function mouseDownStateOn(){
    mousePressed = true;
    console.log(mousePressed);
}

function color (e){
    if (mousePressed){
        e.target.style.backgroundColor="cyan";
    }
};