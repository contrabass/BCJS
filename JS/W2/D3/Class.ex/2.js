// Exercise 2
let names= ["john", "sarah", 23, "Rudolf",34];

// 1. Write a JavaScript for loop that will go through the variable names.

// if the item is not a string, pass.
// if the item is a string, check if it's first letter is in uppercase. If not, change it to uppercase and then display the name.

// Notice: Instructions unclear. Display in any case or only when a first letter has been capitalized?

console.log('1:');
for(let [i, n] of names.entries()) {
    if (typeof(n) != 'string'){
        continue;
    } else if (n[0] != n[0].toUpperCase()){
        names[i]=n[0].toUpperCase()+n.slice(1,n.length)
    }
    console.log(names[i]);
}

// 2. Write a JavaScript for loop that will go through the variable names
// if the item is not a string, go out of the loop.
// if the item is a string, display it.
console.log('\n2:');
for (n of names){
    if(typeof(n) != 'string'){
        break;
    }
    console.log(n);
}