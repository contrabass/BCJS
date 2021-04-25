const gameInfo = [
    {
      username: "john",
      team: "red",
      score: 5,
      items: ["ball", "book", "pen"]
    },
    {
      username: "becky",
      team: "blue",
      score: 10,
      items: ["tape", "backpack", "pen"]
    },
    {
      username: "susy",
      team: "red",
      score: 55,
      items: ["ball", "eraser", "pen"]
    },
    {
      username: "tyson",
      team: "green",
      score: 1,
      items: ["book", "pen"]
    },
   ];
//    Create an array using forEach that contains all the usernames from the gameInfo array, add an exclamation point (ie. “!”) to the end of every username.
let userNames=[]
gameInfo.forEach(function (o){
    userNames.push(o["username"]+"!");
});
console.log(userNames);

//    Create an array using forEach that contains the usernames of all players with a score bigger than 5.
//    Tip: Use the ternary operator
let highScorers=[]
gameInfo.forEach(function (o){
    o["score"] > 5 ? highScorers.push(o["username"]) : null ;
});
console.log(highScorers);

//    Find and display the total score of the users.
let totalScore=0;
gameInfo.forEach( (o) => {totalScore += o["score"]}
);
console.log(totalScore);
