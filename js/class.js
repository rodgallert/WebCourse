// literal form
function func(){}

// using a variable to store a function
const fun = function(){}

// storing a function in an arran
const array = [function (a, b){ return a + b}, func, fun];

console.log(array[0](2,3));

// Declaring a function as a object's property
const obj = {}
obj.speak = function () { return 'Hello, World!'};

console.log(obj.speak());

// send function as param
function run(fun){
    fun();
}

run(function () { console.log('Running')});

// function as return
function sum(a, b){
    return function (c){
        console.log(a + b + c);
    }
}

sum(2,3)(5);
// storing a returning function as a variable then calling it later
const abc = sum(2,3);
abc(5)