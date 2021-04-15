// Instructions
// Prompt the user for several words (separated by commas).
/* userWords=(`Please enter some words, separated by commas.`); */
// Put the words into an array.
/* userWords.split(","); */
let userWords=(prompt(`Please enter some words, separated by commas.`)).split(",");
let maxLength=0;
for (word of userWords){
    if (maxLength < word.length){maxLength = word.length} 
}
// Console.log the words one per line, in a rectangular frame as seen below.
console.log(`*`.repeat(maxLength+4));
for (word of userWords){
    console.log(`* ${word}${" ".repeat(maxLength-word.length+1)}*`)
}
console.log(`*`.repeat(maxLength+4));
// Check out the Hints and Requirements below.
// For example, if the user gives you:
// Hello, World, in, a, frame
// you will transform it to : ["Hello", "World", "in", "a", "frame"]
// that will get displayed as:

// stars and words


// Hint
// The number of stars that wraps the sentence, must depend on the length of the longest word.


// Requirements
// To do this challenge you only need Javascript(No HTML and no CSS)