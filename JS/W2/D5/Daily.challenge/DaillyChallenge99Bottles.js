/* Instructions
Have you heard the infamous song “99 Bottles of Beer?”
In ths exercise you need to console.log the lyrics to the song 99 Bottles of Beer as an output.
*/

//Prompt the user for a number to begin counting down bottles.
let i = 1;
let bottles = prompt("How many bottles of beer on the wall?");
/* In the song everytime a bottle falls we subtract the bottles by 1.
What your code should do is:
instead of subtracting by 1, everytime a bottle drops the subtracted number should go up by 1
For example the first time a bottle drops we subtract by 1, the second time we subtract by 2 and so on.
Take a look below for more help.

==============================

99 bottles of beer on the wall
99 bottles of beer
Take 1 down, pass it around
98 bottles of beer on the wall
98 bottles of beer on the wall
98 bottles of beer
Take 2 down, pass them around
96 bottles of beer on the wall
96 bottles of beer on the wall
96 bottles of beer
Take 3 down, pass them around
93 bottles of beer on the wall

==============================*/

/* How will you choose to make the song end?
Make sure you get the grammar correct.

For 1 bottle, you pass “it” around.
For more than one bottle, you pass “them” around. */


let pronoun="them";
let b="bottles";


// while(bottles>1){
while(bottles > i){
    console.log(`${bottles} bottles of beer on the wall\n${bottles} bottles of beer\nTake ${i} down, pass them around`);

    if ((bottles - i)==1){
        pronoun = "it";
        b="bottle";
    }    
    console.log(`${bottles -= i++} ${b} of beer on the wall\n\n`);
}


console.log(`${bottles} ${b} of beer on the wall\n${bottles} ${b} of beer\nTake ${i} down\n EXCUSE ME? TAKE ${i} DOWN? THERE ARE NO MORE BOTTLES OF BEER ON THE WALL, YOU LOT SEEM TO REQUIRE INCREASING DOSAGES. GOOGLE ALCOHOLICS ANONYMOUS, ASK AROUND ABOUT A 12 STEP PROGRAM, OR START LOCATING A LIVER DONOR.\n`)