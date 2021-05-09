// Instructions
// Use this Giphy API documentation. Use the API KEY provided in Exercises XP.
// Create a program to fetch gifs.
// Allow the user to search for as many GIFs as they want and append them to the page. The gif should be appended with a DELETE button next to it.




const searchButton = document.getElementById("searchButton");
const searchField = document.getElementById("searchField");
console.log(searchField)

let load = (e) => {
    let XHR = new XMLHttpRequest();
    // console.log(searchField.value)
    // alert(`https://api.giphy.com/v1/gifs/search?q=${searchField.value}&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`);
    Break;
    XHR.open("GET", `https://api.giphy.com/v1/gifs/search?q=${searchField.value}&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`, true);
    XHR.responseType='json';
    /* XHR.send();
    let robots=[]
    XHR.onload = function () {
        console.log(XHR.response);
    } */
}
searchButton.addEventListener("click", load)

// output

// Allow the user to delete a specific gif by clicking the DELETE button.
// Allow the user to remove all of the GIFs by clicking a DELETE ALL button.