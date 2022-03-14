// // // // Write a function called addOne that takes a single number as an argument and returns that number plus 1.
// // // // let addOne = function(number) {
// // // //     let num = number + 1
// // // //     return num
// // // //     }
    
// // // //     console.log(addOne(2))


// // //     function addOne(number) {
// // //         let num = number + 1
// // //         return num
// // //     }
// // //     console.log(addOne(4))

// // // Write a function called addTwoNumbers that accepts two numeric arguments and returns the sum of those two numbers.
// // // - If either argument is not a number, return the value of NaN.
// //     // function addTwoNumbers(a,b) {
// //     //     if (isNaN(a) === true || isNaN(b) === true) {
// //     //         return NaN 
// //     //     } else {
// //     //       return a + b
// //     //     }
              
// //     // }
// //     // console.log(addTwoNumbers(7,'x'))

// //     //  Write a function called addList that accepts any quantity of numbers as arguments, adds them together, and returns the resulting sum.
// // - Assume all parameters will be numbers.
// // - If called with no arguments, return 0 (zero).


// function addList() { 
//     let sum = 0 
//     if (!arguments) {
//         return 0
//     } else {
//         for(let i = 0; i < arguments.length; i++) {
//             sum = sum + arguments[i];
//             console.log(sum)
//         }
//     }
 
//     return sum;
// }
// console.log(addList())

// let array = [5, 9, 10, 12]
// for(let i=0; i < array.length; i++) {
//     console.log(i, array[i])
    
// }

// - Write a function called range that accepts two integers as arguments and returns an array of integers starting with the 
// first argument up to one less than the second argument.
// - The range function must be called with the first argument less than or equal to the second argument; otherwise, return 
// the string “First argument must be less than second”.
// function range(numfirst, numlast) {
//     let output = []
//     if(numfirst > numlast) {
//         console.log("First argument must be less than second")
//     } else {
//         for(let i = numfirst; i < numlast; i++) {
//             output.push(i)
//         }
        
//     }
   
//     return output
// }
// console.log(range(22,42))

// function sumrange(a) {// take range output and add all the numbers
//     console.log(a)
// let sum = 0 
//     if (!a) {
//         return 0
//     } else {
//         for(let i = 0; i < a.length; i++) {
//             sum = sum + a[i];
//             // console.log(a[i])
//             console.log(sum)
//         }
//     }
//     return sum;
// }
// console.log(sumrange(range(79,89)))

// Write a function called reverseUpcaseString that accepts a single string argument, then returns the string with its 
// characters in reverse order and converts all characters to uppercase.
// Examples:
// reverseUpcaseString("SEI Rocks!"); //=> "!SKCOR IES" 
function reverseUpcaseString(str) {
    let output = ""
    for(let i = 0; i < str.length; i++) {
        // console.log(str[i].toUpperCase())
        output = output + (str[i].toUpperCase())
        console.log(output)
    }

    return output.split("").reverse().join('')

}

console.log(reverseUpcaseString("ups"))  // "SPU"