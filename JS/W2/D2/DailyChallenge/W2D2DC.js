// Create a variable called sentence. The value of the variable should be a string that contains the words “not” and “bad”. For example, “The movie is not that bad, I like it”.
let sentence = 'This is not a good idea, it is bad';

// Create a variable called wordNot where it’s value is the first appearance of the substring “not” (from the sentence variable).
let wordNot = sentence.indexOf('not');

// Create a variable called wordBad where it’s value is the first appearance of the substring “bad” (from the sentence variable).
let wordBad = sentence.indexOf('bad');
// console.log(wordBad);
// console.log(sentence[wordBad+2]);

// If the word “bad” comes after the word “not”, you should replace the whole “not…bad” substring with “good”, then console.log the result.
if(wordBad < wordNot){
    console.log(sentence);
} else {
    sentence=`${sentence.slice(0, wordNot)}${sentence.slice(wordBad,0)}good`;
    console.log(sentence);
}
// For example, the result here should be : “The movie is good, I like it”
// If the word “bad” does not come after “not” or the words are not in the sentence, console.log the original sentence.