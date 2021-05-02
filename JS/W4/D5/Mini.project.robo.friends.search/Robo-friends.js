// What You Will Create
// A Robo-Friends Search with Advanced Javascript
// 
// In this project you will have to create a website like this (you can use your own css to style your project):
// 
// robot project #1
// 
// 
// 
// Instructions
// The webpage displays Cards of Robots with their respective image and information. The webpage should also filter the cards when you search for a specific name in the search box, like this:
// 
// robot project #2
// 
// Display the cards in the DOM, using the DOM elements and selectors that you were taught in class and filter them with the search box.
// 
// You can use your own images or use this site to generate a new Robot Image and add your images url to your object array.
// 
// You have to create the cards by using the values from the array of objects below:

/** This implementation is attravtive from the
 * UX standpoint; it certainly lacks from an
 * efficiency perspective. However this method
 * was chosen as (1) the assignment is to use 
 * the given array (and sorting it would be an
 * altteration) and more importantly (2), the
 * number of entries to search is finite and
 * not very large, so efficancy gains would be
 * minimal.*/ 

const robots = [
    {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    image: 'https://robohash.org/1?200x200'
    },
    {
    id: 2,
    name: 'Ervin Howell',
    username: 'Antonette',
    email: 'Shanna@melissa.tv',
    image: 'https://robohash.org/2?200x200'
    },
    {
    id: 3,
    name: 'Clementine Bauch',
    username: 'Samantha',
    email: 'Nathan@yesenia.net',
    image: 'https://robohash.org/3?200x200'
    },
    {
    id: 4,
    name: 'Patricia Lebsack',
    username: 'Karianne',
    email: 'Julianne.OConner@kory.org',
    image: 'https://robohash.org/4?200x200'
    },
    {
    id: 5,
    name: 'Chelsey Dietrich',
    username: 'Kamren',
    email: 'Lucio_Hettinger@annie.ca',
    image: 'https://robohash.org/5?200x200'
    },
    {
    id: 6,
    name: 'Mrs. Dennis Schulist',
    username: 'Leopoldo_Corkery',
    email: 'Karley_Dach@jasper.info',
    image: 'https://robohash.org/6?200x200'
    },
    {
    id: 7,
    name: 'Kurtis Weissnat',
    username: 'Elwyn.Skiles',
    email: 'Telly.Hoeger@billy.biz',
    image: 'https://robohash.org/7?200x200'
    },
    {
    id: 8,
    name: 'Nicholas Runolfsdottir V',
    username: 'Maxime_Nienow',
    email: 'Sherwood@rosamond.me',
    image: 'https://robohash.org/8?200x200'
    },
    {
    id: 9,
    name: 'Glenna Reichert',
    username: 'Delphine',
    email: 'Chaim_McDermott@dana.io',
    image:'https://robohash.org/9?200x200'
    },
    {
    id: 10,
    name: 'Clementina DuBuque',
    username: 'Moriah.Stanton',
    email: 'Rey.Padberg@karina.biz',
    image:'https://robohash.org/10?200x200'
    }
];




//Card generation
let main = document.getElementById("main");

let renderCard = (robot) => {
    let  card = document.createElement("div");
    card.classList.add("robotCard");
    const id = robot[0];
    if(typeof(robot)!=="number"){
        robot = (robot[0])
    }    
    
    let robotImage = document.createElement("IMG");
    robotImage.classList.add("cardPhoto");
    robotImage.src=robots[robot]["image"];
    photoDiv = document.createElement("div");
    photoDiv.classList.add("photoDiv");
    photoDiv.appendChild(robotImage);
    card.appendChild(photoDiv);
    cardText = document.createTextNode(robots[robot]["name"] + "\n" + ("\n" + robots[robot]["email"]));
    card.appendChild(cardText);
    main.appendChild(card);
}

/** renderCards 
 * @param {arr} robotSet [an array containing robot objects]
 * @param {object} subset [blah blah blah blah blah ahyhe blah]
 */
let renderCards = (subset = [...Array(robots.length).keys()]/* , robotSet = robots */) => {
    main.innerText="";
    console.log(subset);
    for (robot in subset){
        console.log(subset[robot]);
        renderCard(subset[robot]);
    }
}

/*After the page loads, the search field is empty.
Therefore all robots should be displayed, */
renderCards();

let filter = (searchInput) => {
    results = [];
    for (robot in robots){
        let robotDeets=Object.entries(robots[robot]);
        // console.log(robotDeets);
        let details=[];
        for (detail of robotDeets){
            if (typeof detail[1] === 'string' || detail[1] instanceof String) {
                // console.log ("detToLowerCase " + detail[1].toLowerCase());
                match=detail[1].toLowerCase().search(searchInput.toLowerCase());
                if (match > -1){
                    console.log(match);
                    // console.log(robot);
                    details.push([detail[0], match, searchInput.length]);
                    // renderCards();
                    // console.log(detail + "   " + detail.search(searchInput));
                    // console.log(details)
                }
                
            }
        }
        // console.log(details);
        // if (details.length > 0){console.log(robotDeets[0][1])}
        if (details.length>0) {results.push([robotDeets[0][1], details])}

    }
    return (results);
}

// let result = filter ("anne");
// console.log(result);

let search = (e) =>
{
    renderCards(filter(e.target.value));
    // console.log(filter(e.target.value));
}
//Search field
let searchField = document.getElementById("searchField");
searchField.addEventListener ("input", search);

for (r in robots){renderCard(r)};
// searchField.addEventListener("onLoad", search);
// searchField.addEventListener('DOMContentLoaded', search);
// searchField.addEventListener ("keyup", {testfunc (searchField.value);});