const degrees = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

let lowDegrees = []

// no callback
for (let i in degrees) {
    if (degrees[i] < 7) {
        lowDegrees.push(degrees[i]);
    }
}
console.log(lowDegrees);

//callback
lowDegrees = degrees.filter(function (degree){
    return degree < 7
});
console.log(lowDegrees);

// callback with lambda
console.log(degrees.filter(degree => degree < 7));