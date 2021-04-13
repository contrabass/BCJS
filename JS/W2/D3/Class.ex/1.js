// 1. Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen.
let oddOrEven;
for (let i=0; i<16; i++){
    i % 2 == 0 ? oddOrEven = 'even' : oddOrEven = 'odd';
    console.log(`${i} is ${oddOrEven}`);
    };

// Sample Output: //"0 is even" //"1 is odd" //"2 is even"