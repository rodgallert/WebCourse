function sum(){
    let sum = 0;
    for (i in arguments){
        sum += arguments[i];
    }
    return sum;
}

console.log(sum());
console.log(sum(1));
console.log(sum(1,1,2.5,3.8));
console.log(sum(1,1,2.5,3.8, " afsdafasd"));
console.log(sum('a', 'b', 'c'));
