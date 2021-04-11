let users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];
// users = [];
// users = ["Lea123"];
// users = ["Lea123", "Princess45"];
// users = ["Lea123", "Princess45", "cat&doglovers"];

console.log(users);
// Using the array above, console.log the number of users in a group chat based on the following rules:
// If there is no users (the users array is empty), console.log “no one is online”.
switch (users.length) {
    case 0:
        console.log('no one is online.');
        break;
    // If there is 1 user, console.log “<name_user> is online”.
    case 1:
        console.log(`${users[0]} is online.`);
        break;
        
        // If there are 2 users, console.log “<name_user1> and <name_user2> are online”.
    case 2:
        console.log(`${users[0]} and ${users[1]}are online.`);
        break;

        // If there are more than 2 users, console.log the first two names in the users array and the number of additional users online.
        // For example, if there are 5 users, it should display:
        // name_user1, name_user2 and 3 more are online
    default:
        console.log(`${users[0]} and ${users[1]} and ${users.length-2} more are online.`);
}