// Exercise 4 : Attendance
// Instructions
let guestList = {
  randy: "Germany",
  karla: "France",
  wendy: "Japan",
  norman: "England",
  sam: "Argentina"
}
// Given the object above where the key is the students name and the value is the country they are from.
// 1. Prompt the student for their name :
let n=(prompt("Enter your name please."));

// * If the name is in the object, console.log the name of the student and the country they come from.
// example: "Hi! I'm [name], and I'm from [country]."
// * Hint: Look up the statement if ... in
// * If the name is not in the object, console.log: "Hi! I'm a guest."
n in guestList ? console.log(`Hi, I'm ${n} and I'm from ${guestList[n]}.`): console.log("Hi! I'm a guest.");