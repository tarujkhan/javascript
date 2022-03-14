/*-----------------------------------------------------------------
Challenge: 08-removeEnds
Difficulty: Basic
Prompt:
- Write a function called removeEnds that accepts a single string argument, then returns the a string with the first and last characters removed.
- If the length of the string argument is less than 3, return an empty string.
Examples:
removeEnds('SEI Rocks!'); //=> "DI Rocks"
removeEnds('a'); //=> "" (empty string)

function removeEnds(str){
let newstring = ""
for(let i=0; i<str.length; i++){
    // console.log(str)
    newstring = str.slice(1).slice(0, -1)
    // console.log(newstring)
}
if(str.length<3){
return ""} 
else{
return newstring
}
}
console.log(removeEnds("He")) 


/*-----------------------------------------------------------------
Challenge: 11-isPalindrome
Difficulty: Intermediate
Prompt:
- Write a function called isPalindrome that accepts a single string argument, then returns true or false depending upon whether or not the string is a palindrome.
- A palindrome is a word or phrase that are the same forward or backward.
- Casing and spaces are not included when considering whether or not a string is a palindrome.
- If the length of the string is 0 or 1, return true.
Examples:
isPalindrome('SEI Rocks'); //=> false
isPalindrome('rotor'); //=> true
isPalindrome('A nut for a jar of tuna'); //=> true
isPalindrome(''); //=> true
*/
/*
function isPalindrome(str){
    if(str.length === 0 || str.length === 1){
        return true
    }
    let newstring = str.split("").reverse().join("")
    console.log(newstring)
       if(str === newstring){
           return true
       } else {
           return false
       }
        }

console.log(isPalindrome("catch"))
/*
console.log(str)
if(str.length === 0 || str.length === 1){
return true} 
else if(newstring === str){
return newstring}/*

/*-----------------------------------------------------------------
Challenge: 15-mergeObjects
Difficulty:  Intermediate
Prompt:
- Write a function named mergeObjects that accepts at least two objects as arguments, merges the properties of the second through n objects into the first object, then finally returns the first object.
- If any objects have the same property key, values from the object(s) later in the arguments list should overwrite earlier values.
Examples:
mergeObjects({}, {a: 1});  //=> {a: 1} (same object as first arg)
mergeObjects({a: 1, b: 2, c: 3}, {d: 4});  //=> {a: 1, b: 2, c: 3, d: 4}
mergeObjects({a: 1, b: 2, c: 3}, {d: 4}, {b: 22, d: 44});  //=> {a: 1, b: 22, c: 3, d: 44}
-----------------------------------------------------------------*/
/*
function mergeObjects(obj1, ...objs){
    return Object.assign(obj1, ...objs)
    
}

// console.log(mergeObjects({a: 1, b: 2, c: 3}, {d: 4}))
console.log(mergeObjects({a: 1, b: 2, c: 3}, {d: 4}, {e: 22, f: 44}))
/*
/*




/*-----------------------------------------------------------------
Challenge: 16-findHighestPriced
Difficulty:  Intermediate  
Prompt:
- Write a function named findHighestPriced that accepts a single array of objects.
- The objects contained in the array are guaranteed to have a price property holding a numeric value.
- The function should return the object in the array that has the largest value held in the price property.
- If there's a tie between two or more objects, return the first of those objects in the array.
- Return the original object, not a copy.
- Do not mutate the array being passed in.
Examples:
findHighestPriced([
  { sku: 'a1', price: 25 },
  { sku: 'b2', price: 5 },
  { sku: 'c3', price: 50 },
  { sku: 'd4', price: 10 }
]);
//=> { sku: 'c3', price: 50 } 
findHighestPriced([
  { sku: 'a1', price: 25 },
  { sku: 'b2', price: 50 },
  { sku: 'c3', price: 50 },
  { sku: 'd4', price: 10 }
]);
//=> { sku: 'b2', price: 50 }
-----------------------------------------------------------------*/


function findHighestPriced(arr) {
    // console.log(arr)
    let obj;
    let highestprice = 0;
    for(let i=0; i<arr.length; i++){
        // console.log(arr[i].price)
        
        if(arr[i].price > highestprice){
            highestprice = arr[i].price
            obj = arr[i]
        }
    }
    

    return obj
}



console.log(findHighestPriced([
    { sku: 'a1', price: 25 },
    { sku: 'b2', price: 5 },
    { sku: 'c3', price: 50 },
    { sku: 'd4', price: 10 }
  ]))

