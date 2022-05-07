function Person() {
    this.idade = 0;

    const self = this; // using this as a const
    setInterval(function () {
        self.idade++
        console.log(self.idade);
    }/*.bind(this)*/, 500)
}

new Person;