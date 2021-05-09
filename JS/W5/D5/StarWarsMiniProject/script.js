display = document.getElementById("display");
randomizeButton = document.getElementById("randomizeButton");

const getFromSWAPI = async () => {
    // let results;
    let response = await fetch("https://swapi.dev/api/people/" + Math.ceil(Math.random() * 83) + "/")
    .then(res => res.json())
    .then((data) => (results = data))
    .catch(e => display.innerText=e);
    
    return results;
}

const displayNewPerson = (data) => {
    display.innerText="";
    display.innerText="Name: " + data.name;
    display.innerText = (display.innerText + "\n"+"Birth year: "+ data.birth_year);
    
    // display.innerText=data;
}

const switchPerson = async () => {
    // data = await getFromSWAPI().then(res => console.log(res))
    displayNewPerson (await getFromSWAPI());
}

randomizeButton.addEventListener("click", switchPerson)
