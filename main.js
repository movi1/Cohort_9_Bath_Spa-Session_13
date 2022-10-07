// Task 1
// Console two variable
const a = 5;
const b = 10;
// console.log two variable
console.log(a + b);

// Task 2
// Create a function that takes two parameter, adds them together and then times them by another number. 

function myFunction(a, b) {
    console.log((a + b) * 10);
}
myFunction(a, b);

// Task 3
// Create two new string variables  and  concat them into  1 string console log.

const c = "Hello I am";
const d = "Movi";
console.log(c + " " + d);

//Task 4
//  Create an empty string variable . Then assign it a new  string value. 


let book = "";
console.log(book);
// Then assign it a new  string value. 
book = "Hi";
console.log(book);
// Then assign it to that value plus a new value.
book += " from Moira";
console.log(book);

// Task 5
// Create a function that will compare two variables
//  to see if they match and alert the user  to say if they do or don’t match

// Create a function 
const myVarFunction = function myFunction(var1, var2) {
    console.log(var1);
    console.log(var2);

    // compare two variables if they match and alert the user
    if (var1 == var2) {
        // if they do match
        alert("Well done!");
    } else {
        // if they don’t match
        alert("I am sorry! It did not match!");
    }
}
// Calling the function
myVarFunction(1, 1)