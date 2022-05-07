let double = function (a) {
    return a * 2
}

double = (a) => {
    return a * 2
}

double = a => a * 2 // implicit return

let hello = function(){
    return 'Hello, World!'
}

hello = () => 'Hello, World!'

hello = _ => "Hello, World" // single param

console.log(hello());