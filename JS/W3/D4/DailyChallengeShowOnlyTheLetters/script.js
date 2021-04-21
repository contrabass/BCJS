//Access the lettersOnly input field
inp = document.getElementById("lettersOnly");

//Regular expression that matches everything other than
re=/([A-z]*)/

//Detect keyup and launch function filter
inp.addEventListener("keyup", filter);

function filter(){
    //assign a filtered version of the current value of the box
    inp.value=(inp.value.match(re)[0]);
}