// // // // // // // // // if you write x; x will be undefined
// // // // // // // // let x = "party"
// // // // // // // // javascript will allocate a memory in space and also for party
// // // // // // // // in memory x points to the string memory. not x = 'party'
// // // // // // // // the variable and value are never equal to each other. they are assigned.
// // // // // // // // say x = 'tonight' - here x will point towards tonight
// // // // // // // // let x = 'hello'
// // // // // // // // let y = x - here y is also pointing to the same thing x is pointing to
// // // // // // // // reassign x = 'world' - y will still point towards 'hello'
// // // // // // // // let arr = []
// // // // // // // // arr[0] = 'hello' - hello is already in the memory from x
// // // // // // // // creating an object - let obj = {} (key value pairs)
// // // // // // // // obj.Hello = 'world' - Hello is key and world is value
// // // // // // // // all keys are interpreted as a string
// // // // // // // // obj.population = 7billion
// // // // // // // // arr[0] = 'population'
// // // // // // // // arr[2] = obj.population
// // // // // // // // functions are reusable blocks of code written to perform a single purpose
// // // // // // // // functions tackle complexity and code reusability
// // // // // // // // you can document and debug better
// // // // // // // // parameter is like date(a, b) and argument is what is passed in(information)
// // // // // // // // function declaration - function sayHello(name) {
// // // // // // //     console.log('Hello' + name + '!')
// // // // // // // }
// // // // // // // sayHello("taroj")
// // // // // // // function expression uses variable
// // // // // // // let sayHello2 = function(name) {
// // // // // //     console.log('Hello' + name + '!')
// // // // // // }
// // // // // // sayHello2('Shahzad')
// // // // // // in function declration you can return the function before of after
// // // // // sayHello can be written before or after function
// // // // // in function expression sayHello2() has to be written after let 
// // // // // arrow functions - function add(a,b) {
// // // //     console.log(a + b)
// // // // }
// // // // add(2,3)
// // // for arrow functions - const add2 = (a,b) => a + b
// // // console.log(add2(3+4))
// // // they give an implicit return of a single function
// // // write a function declaration 
// // // Write a function named computeArea as a function declaration.
// // It will have two parameters: width & height.
// // It will compute the area of a rectangle (width X height) and return a string in the following form:
// // The area of a rectangle with a width of ___ and a height of ___ is ___ square units
// // function computeArea(width, height) {
// //     console.log(width * height)
// //     console.log("The area of a rectangle with a width of " + width + " and a height of " + height + " is " + width * height + " square units")
// // } 
// // // computeArea(2,2)

// // // Write a function named planetHasWater as a function expression.
// // // It will have one parameter: planet.
// // // Return true if the planet argument is either “Earth” or “Mars”; otherwise, return false.
// // // Bonus points if you ensure the function will work regardless of the casing of the planet being passed in (‘earth’, ‘MARS’, etc.).
// // // Invoke the function a few times to test it:

// // let planetHasWater = function(planet) {
// //     if (planet.toLowerCase() === "earth" || planet.toLowerCase() === "mars") {
// //         return true
// //        } else { 
// //            return false
// //        }
    
// // }
// // console.log(planetHasWater("Earth"))
// // console.log(planetHasWater("Mars"))
// // console.log(planetHasWater("Jupiter"))
// // console.log(planetHasWater("Neptune"))
// // console.log(planetHasWater("EaRtH"))
// // console.log(planetHasWater("mArS"))

// // let message;
// let score = 50
// // if (score > 100) {
// //   message = "You rock!";
// //   console.log(message)
// // } else {
// //   message = "Keep trying!";
// //   console.log(message)
// // }
// // ternary operator
// let message = score > 100 ? console.log("You Rock") : console.log("Keep trying")

// Define a function, as a function declaration, maxOfTwoNumbers that takes two numbers as arguments and returns the largest
// of them. If they are the same, return that number. Use the if-else construct or a ternary expression - the Math.max method 
// is not allowed.
function maxOfTwoNumbers(a,b){
    if (a > b){
    return a}
    else if (a < b){
        return b}
    else (a === b ) {
        return a 
    }
    }
maxOfTwoNumbers()


function printName() {
    return 'Taroj Khan'
}

function findName() {
    return printName
}

callstack studies what is happening in each function 
there is a lexical scope created in each function that is created
or functional scope 
the previous functions are declred in the global scope 

function sayName() {
    let a = 'a'
return function findName(){
    let b = 'b'
    return function printName() {
        let c = 'c'
        return 'Taroj Khan'
    }
}
}
console.log
sayName()()() - each () will invoke the nested function
this is nested function - chain of scope
a b c cannot be accessed in the other functions
but a can be accessed in other functions since a is top level
if you declare something in the global object you can use it in the function 
function, global and block scope

block scope 
hoisting 
for (i=0;i<10,i++) {
console.log(i)
}
this will print what is in i - this is the problem of var 
whenever the javascript engine interprets the file 
it looks for keyword var, function, delete  - allocates memory here
when checking a file javascript has two phases 
the first pahse is memory heap 
allocates memory for variables declared by var or function  
second pahse is execution
executes the functions and variables  
let and const are block scope 
cont protects from reassignment but not from mutating the object - never mutate objects
const x = {
    name: 'Taroj'
}
console.log(x)
x.name = 'Shahzad'
console.log(x)
you can change the value of a key inside an object
we want to minimize mutable states

read imperative and declarative
mutability and immutability (immutability is copying)
imperative is how most program is written 
for loop is imperative 
always follow immutability to keep the original in tact 