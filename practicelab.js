// Define a function, as a function declaration, multiplyArray that takes an array of numbers
//  and returns the product those 
// numbers. For example, multiplyArray([2, 4, 5]); would return 40.
  //  let multiplyArray = function(numbers) {
  //   let result = 1
    
  //    for(let i=0; i<numbers.length; i++) {
  //      let element = numbers[i]
  //      result = element * result
  //      console.log([i])
  //   }
  //    return result;
  //  }
  //  console.log(multiplyArray([2,4,5]))




  //  Define a function, as a function expression, numArgs that returns the number of arguments passed to the function when called.
// let numArgs = function() {
//   return arguments.length
  // result = 1;
  // for(let i=0; i<arguments.length; i++) {
  //   let element = arguments[i]
  //   console.log(i)
  //   result = element.length
  // }
  // return result
// }
// console.log(numArgs(7,8,9))




// Define a function, as a function declaration, reverseString that takes a string, reverses the characters, and returns it. 
// For example, reverseString('rockstar'); would return the string “ratskcor”.
// function reverseString(arguments) {
//   let newstring = []
//   for(i=0; i<arguments.length; i++)
//   newstring = arguments.split("").reverse().join("");
//   console.log(newstring)
//   return newstring
// }
// console.log(reverseString("Hello"))




// Define a function, as a function declaration, stringsLongerThan that takes an 
// array of strings and a number as arguments; 
// // and returns an array of the strings that are longer than the number passed in.

// // For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3); 
// would return ["hello", "morning"].

// function stringsLongerThan(arr,num) {
//   let newarray = []
//   for(let i=0; i<arr.length; i++)
//   element = arr[i]
//   console.log(element)
//   if (element.length > num){
//     newarray.push(element)
//     return newarray
// }
// }
// console.log(stringsLongerThan(["You", "are", "awesome"], 2))




// // Define a function, as a function expression, longestStringInArray that takes an array of strings as an argument and returns 
// // the length of the longest string.
// let longestStringInArray = function(arr) {
//   let length1 = 0
//   for(let i=0; i < arr.length; i++) {
//   element = arr[i]
//   console.log(element)
//     if (element.length > length1) { 
//     length1 = element.length
    
//     }
//   } 
//     return length1
// }
// console.log(longestStringInArray(["Hello", "GoodByes", "Welcome"]))


/**
 * Define a function, as a function declaration, stringsLongerThan that takes an array of strings and a number as arguments; and returns an array of the strings that are longer than the number passed in. For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3); would return ["hello", "morning"].
 */
function stringsLongerThan(arr,num){
  let newarray = []
  for(let i=0; i<arr.length; i++) {
    let element = arr[i]
    console.log(element)
    if(element.length > num) {
      newarray.push(element)
    }

  }
  return newarray
}
console.log(stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3))
