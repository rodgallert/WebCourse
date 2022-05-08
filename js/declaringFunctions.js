// function declaration
// can be called before declaration
function sum(x, y) {
    return x + y
}

// function expression
// can only be called after declaration
const sub = function (x, y) {
    return x - y
}

// named function expression, not extensively used
const mult = function mult(x,y){
    return x * y
}