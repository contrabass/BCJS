// Exercise 2 : Promises
// Instructions
// Create a promise that resolves itself in 4 seconds and returns a “success” string.
const p = new Promise ((resolve, reject) => {
      setTimeout(resolve, 4000, "success")
   });
   
   p.then(result => console.log(result));

// Read about Promise.resolve() and Promise.reject().
// How can you make your promise from part 1 shorter using Promise.resolve() and console.log “success”?
// Add code to catch errors and console.log ‘Ooops something went wrong’.
console.log("program started;");
Promise.resolve("success").then(str => setTimeout(console.log, 4000, (str)))
.catch (err => console.log("Ooops something went wrong"));