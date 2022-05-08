const Manufacturers = ["Mercedes", "Audi", "BMW"]

function Print(name, index) {
    console.log(`${index + 1}. ${name}`);
}

Manufacturers.forEach(Print)
Manufacturers.forEach(function (a) {
    console.log(a);
})

Manufacturers.forEach(manu => console.log(manu));