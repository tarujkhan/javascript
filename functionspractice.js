// Write a function that multiplies all elements in an array
// let nums = [1, 2, 4, 5, 6]

// let nums1 = [7, 9, 4, 5]

// write a function that takes in two arrays and multiplies 
// every element in each array and adds both the products 
// togethor
// sample output 240 + 1260

// function sumproductArray(arr1, arr2) {
//     let arr1product = 1;
//     let arr2product = 1;
//     for (let index = 0; index < arr1.length; index++) {
//         const element = arr1[index];
//         arr1product = arr1product * element;
//     }
//     for (let index = 0; index < arr2.length; index++) {
//         const element = arr2[index];
//         arr2product = arr2product * element;
//     }
//     return arr1product + arr2product
// }
// console.log(sumproductArray(nums, nums1))



// function allMultiply(arr) {
//     let nummultiply = 1;
//     for(i=0; i < arr.length; i++) {
//         let element = arr[i];
//         nummultiply = nummultiply * element;
//     }
//     return nummultiply
// }
// console.log(allMultiply(nums1))

// write a function that takes an array of numbers and adds 
// 10 to each element 
// let nums = [1, 4, 5, 9]
// function addtentoArray(arr) {
//     let newarray = [];
//     for (let index = 0; index < arr.length; index++) {
//         const element = arr[index];
//         newarray.unshift(element + 10)
//         console.log(newarray)
        
        
//     }
//     return newarray
// }
// console.log(addtentoArray(nums))


// write a function that takes an array of numbers and multiplies each 
// with 5
// let nums = [4, 5, 8, 9]
// function multiplytoArr(arr) {
//     let newarray = []
//     for(i=0; i<arr.length; i++); {
//     const element = arr[i];
//     console.log(arr)
//     newarray.push(element * newarray)
// } return newarray
// }
// console.log(multiplytoArr(nums))


// write a function that takes an array of strings and lowercase each string
// array1 = ["TaRoj", "AhMeD", "KhAn"]

// function lowcasearray(arguments) {
//     let newarray = []
//     for(i=0; i<arguments.length; i++){
//         const element = arguments[i]
//         newarray.push(element.toLowerCase());
//         console.log(element)
//     }
//     return newarray
// }
// console.log(lowcasearray(array1))


// write a function that takes an array of strings and sperates them by space
// let array2 = ["Taroj", "Ahmed", "Khan"]
// let myname = ["Shahzad", "Khan"]
// function flattenArray(arr) {
//        return arr.join(" ")

// }
// console.log(flattenArray(array2))
// console.log(flattenArray(myname))