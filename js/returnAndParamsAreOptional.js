function area(x, y) {
    const area = x * y;
    if (area > 20) {
        console.log('Value greater than expected: ${area}sqm.')
    } else {
        return area
    }
}

console.log(area(2, 2));
console.log(area(2));
console.log(area(2, 2, 2)); // ignores everything that isn't declared in the function's params
console.log(area(5, 5));