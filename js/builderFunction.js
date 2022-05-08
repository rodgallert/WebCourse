function Car(maxSpeed = 200, delta = 5) {
    let currentSpeed = 0;
    this.accelerate = function () {
        if (currentSpeed + delta <= maxSpeed) {
            currentSpeed += delta;
        } else {
            currentSpeed = maxSpeed;
        }
    }

    this.getCurrentSpeed = function () {
        return currentSpeed;
    }
}

const slow = new Car;
slow.accelerate();
console.log(slow.getCurrentSpeed());

const fast = new Car(350,20);
fast.accelerate()
fast.accelerate()
fast.accelerate()
fast.accelerate()
console.log(fast.getCurrentSpeed());

console.log(typeof Car);
console.log(typeof fast);