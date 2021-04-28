**1. What is the value of a in all the following functions.**
// #1
function q1() {
    var a = 5;
    if(a > 1) {
        a = 3;
    }
    alert(a);
}
Should return 3.

//#2
var a = 0;
function q2() {
    a = 5;
}

function q22() {
    alert(a);
}
var means global, so the return should be 5.

//#3
function q3() {
    window.a = "hello";
}


function q32() {
    alert(a);
}
Window is bassicaly the global scope, so calling q32 should return "hello".

//#4
var a = 1;
function q4() {
    var a = "test";
    alert(a);
}
a is a var - meaning global and mutable, so changing it in q4 should be possible, and calling upon it should return "test".

//#5
var a = 2;
if (true) {
    var a = 5;
    alert(a);
}
alert(a);