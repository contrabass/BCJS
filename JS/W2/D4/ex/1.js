// Exercise 1 : Keyless Car
// Instructions
// Ask the user for their age, and save the value to a variable.
let userAge = prompt("Age?");

// Create a function called checkDriverAge() that will notify the user if they are permitted to drive. They must be at least 18 to drive.
function checkDriverAge(age) {
  switch (true) {
    // if the user is too young, alert “Sorry, you are too young to drive this car. Powering off”
    case age < 18:
      console.log("Sorry, you are too young to drive this car. Powering off");
      break;
    // if the user is old enough, alert “You are old enough to drive, Powering On. Enjoy the ride!”
    case age > 18:
      console.log("You are old enough to drive, Powering On. Enjoy the ride!");
      break;
    // if the user just turned 18, alert “Congratulations on your first year of driving. Enjoy the ride!”
    case age == 18:
      console.log(
        "Congratulations on your first year of driving. Enjoy the ride!"
      );
      break;
  }
}
// Instead of using prompt to ask the user for their age, have the checkDriverAge() function accept an argument age.
checkDriverAge(userAge);
