// Exercise 6
// Instructions
let details = {
  my: "name",
  is: "Rudolf",
  the: "raindeer",
};

//Given the object above, console.log “my name is Rudolf the raindeer”
let prepArray = [];

for (const key in details) {
    if (details.hasOwnProperty(key)) {
        prepArray.push(key, details[key])
        // console.log(`${key}: ${details[key]}`);
    }
}

console.log(prepArray.join(" "));