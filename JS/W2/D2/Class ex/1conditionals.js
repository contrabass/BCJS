console.log("// Make a keyless car!");

// This car will only let you drive if you are over 18. Make it do the following:

// Using prompt() and alert(), ask a user for their age.
let age=(prompt("Please enter your age:", 17));
switch(true) {
    // IF they say they are below 18, respond with: "Sorry, you are too young to drive this car. Powering off
    case age<18:
        alert ("Sorry, you are too young to drive this car. Powering off");
        break;

    // IF they say they are 18, respond with: "Congratulations on your first year of driving. Enjoy the ride!
    case age==18:
        alert ("Congratulations on your first year of driving. Enjoy the ride!");
        break;
        
    // IF they say they are over 18, respond with: "Powering On. Enjoy the ride!"
    case age > 18:
        alert ("Powering On. Enjoy the ride!");
};
