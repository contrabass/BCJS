console.log('classEx1');
// Exercise 1 : Your Favorite Colors
// Instructions
// Create an array called colors where the value is a list of your favorite colors.
let colors = ['Purple', 'Blue', 'Indigo', 'Cyan', 'Turquoise'];

// Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect… .

for (let [i,color] of colors.entries()){
    console.log(`my #${i+1} choice is ${color}`);
}

// Bonus: Change it to console.log “My 1st choice”, “My 2nd choice”, “My 3rd choice”, picking the correct suffix for each number.
// Hint : create an array of suffixes to do the Bonus
console.log ('\n\nBonus:');
let numSuffixes = ['st', 'nd', 'rd', 'th', 'th'];
for (let [i,color] of colors.entries()){
    console.log(`my ${i + 1}${numSuffixes[i]} choice is ${color}`);
}

//Using array.forEach
console.log('\n\nUsing array.forEach:')
colors.forEach(function (color,i){
    console.log(`my ${i + 1}${numSuffixes[i]} choice is ${color}`);    
});

//using for
console.log('\n\nUsing a for loop:')
for(i=0; i<colors.length; i++){
    console.log(`my ${i + 1}${numSuffixes[i]} choice is ${colors[i]}`);
}