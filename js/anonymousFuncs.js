const Sum = function (x, y) {
    return x + y;
}

const PrintResult = function (a, b, op = Sum) {
    console.log(op(a, b));
}

PrintResult(3, 4);
PrintResult(3, 4, Sum);
PrintResult(3, 4, function (x, y) {
    return x - y;
});

PrintResult(3, 4, (x, y) => x * y);

const Person = {
    Speak: function(){
        console.log('Hello, World!');
    }
}

Person.Speak()