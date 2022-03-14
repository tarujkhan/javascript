/*practice problems
let's start working */

// function isSnakeEyes(num1, num2) {
//     if(num1 === 1 && num2 === 1) {
//         console.log("Snake Eyes");
//     } else {
//         console.log("Not Snake Eyes!");
//     }
    
// }
// console.log(1,1);

// function multiply(num1, num2) {
//     newnum = num1 * num2;
//     return newnum;
// }

// console.log(multiply(9,8));

// function isShortsWeather(temprature) {
//     if(temprature >= 90) {
//         return true; 
//     } else {
//     return false;
//     }
// }
// console.log(isShortsWeather(80));

// const greet = name => {
//     return "Hello" + name + "!"; };
//     console.log(greet("Blue"));

function validUserNames(usernames) {
    return usernames.filter(function(username) {
        return username.length < 10;
    }
    )
    
    }