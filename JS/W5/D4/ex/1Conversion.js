// Exercise 1: Conversion
// Instructions
// Convert the below promise into async await:

//fetch("https://swapi.dev/api/starships/9/")
//    .then(response => response.json())
//    .then(item => console.log(item));

const asyncFetch = async (url) => {
    return fetch(url);  
}

asyncFetch("https://swapi.dev/api/starships/9/").then(ziv => console.log(ziv));

