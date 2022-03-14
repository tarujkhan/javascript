

// Define a function, as a function declaration, maxOfTwoNumbers that takes two numbers as arguments and returns the largest
// of them. If they are the same, return that number. Use the if-else construct or a ternary expression - the Math.max method 
// // is not allowed.
// function maxOfTwoNumbers(a,b){
//     // compare the two variables to see which one is larger
//     if (a > b) {
//     return a
//     } else if (b > a){
//         return b
//     } else if (a === b) {
//         return a
//     }
//     }
//     console.log(maxOfTwoNumbers(12,12))
// Define a function, as a function expression, maxOfThree that takes three numbers as arguments and returns the largest of them. Again, the Math.max method is not allowed.
// let maxOfThree = function(a,b,c) {
//     if (a > b) || (a > c) {
//         return a} 
//     else if (b > a) || (b > c) {
//         return b}
//     else if (c > a) || (c > b) {
//         return c
//     }
//     }

// let maxOfThree = function(a,b,c) {
//     if (a > b && a > c) {
//         return a
//     } else if (b > a && b > c) {
//         return b
//     } else if (c > a && c > b) {
//         return c
//     }
// }
// console.log(maxOfThree(19,26,7))
// // Define a function, as a function declaration, isCharAVowel that takes a character as an argument and returns true if it is 
// // a vowel, false otherwise.
// function isCharAVowel(character) {
//     if character.includes("a,e,i,o,u")
//     return true 
//     else 
//     return false 
// }
// }

// function isCharAVowel(character) {
//     if (character === "a" || character === "e" || character === "i" || character === "o" || character === "u") {
//         return true 
//     } else {
//         return false 
//     }
// }
// console.log(isCharAVowel("o"))

// function isCharAVowel(character) {
//   let vowels = ['a', 'e', 'i', 'o', 'u']
//   vowels.forEach(function(v) {
//     if (vowels[v] === character)  {
//         return true
//     } else {
//         return false
//     }
    
//   })
// }
// console.log(isCharAVowel('e'))

// // // Define a function, as a function expression, sumArray that takes an array of numbers and returns the sum of those numbers. 
// // // For example, sumArray([2, 4, 5]); would return 11.
// // // let sumArray = function(number) {
//       var total = 0; 
//       for(i=0, i<number.length, i++) {
//         total += number[i];
//       }
// }
// return total
// // Define a function, as a function declaration, multiplyArray that takes an array of numbers and returns the product those 
// // numbers. For example, multiplyArray([2, 4, 5]); would return 40.
  // let multiplyArray = function(number) {
  //   let number = 0
  //   let array = []
  //   i = 0
  //   for(i=0, i<array.length, i++) {
  //     sum = sum * array[i]
  //   }
  //   return sum;
  // }
// // Define a function, as a function expression, numArgs that returns the number of arguments passed to the function when called.
// let numArgs = function(arguments) {
//   return arguments.length
// }
// console.log(numArgs(7,8))
// // Define a function, as a function declaration, reverseString that takes a string, reverses the characters, and returns it. 
// // For example, reverseString('rockstar'); would return the string “ratskcor”.
// function reverseString(arguments) {
//   let newstring = []
//   for(i=0; i<arguments; i++)
//   newstring = arguments.split("").reverse().join("");
//   return newstring
// }
// console.log(reverseString("Hello"))
// // Define a function, as a function expression, longestStringInArray that takes an array of strings as an argument and returns 
// // the length of the longest string.
// let longestStringInArray = function(arguments) {
//   new_array = []
//   for(i=0; i < arguments.length, i++) {
//     if arguments.length > new_array 
//     new_array = new_array[i].length
//   }
  
// }
// console.log(longestStringInArray("Hello", "Bye"))
// // Define a function, as a function declaration, stringsLongerThan that takes an 
// array of strings and a number as arguments; 
// // and returns an array of the strings that are longer than the number passed in.

// // For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3); 
// would return ["hello", "morning"].

// function stringsLongerThan(arr,num) {
//   let outputarray = []
//   for(i=0; i<arr.length; i++) {
//     let element = arr[i]
//     if (element.length > num)
//     outputarray.push(element)
//    console.log(element)
//   }
//   return outputarray
// }
// console.log(stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3));


/**
 * You have a web server that keeps crashing each day. You suspect it begins failing 
 * after a certain number of requests are served. Luckily, you have the daily request logs for the server. You see that it returns a status code of 200, but at some point it begins returning 500s instead:

200, 200, 200, ... 200, 500, 500, 500
In order to find the breaking point, let's write a function find_first(array, num) 
that returns the index at which the number num first appears in the input array. In 
this case, we want to efficiently find the first 500 in our server log.

Input: an array of numbers, a number to find

Output: the index of the array at which num first appears,
 or -1 if it does not

Examples

input = [200, 200, 200, 200, 500, 500, 500]

find_first(input, 200) # => 0
find_first(input, 500) # => 4
find_first(input, 100) # => -1
 */

/**
 * write the function with two parameters arr and num
 * invoke the function in console.log
 * use for loop to iterate over the array
 * save the index in an element 
 * console log the element to check
 * use if condition to check what is at any in the array
 * 
//  */
//  input = [200, 200, 200, 200, 500, 500, 500]
// function find_first(array,num){
//   for(let i=0; i<array.length; i++) {
//     let element = array[i]
    
//     if(element === num) {
//       return i
//     } else {
//       return -1
//     }
//   }

// }
// console.log(find_first(input, 100))
































