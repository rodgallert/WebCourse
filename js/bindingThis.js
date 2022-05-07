const person = {
    greeting: 'Hello, World!',
    speak(){
        console.log(this.greeting)
    }
}

person.speak();

const speak = person.speak;
speak(); // conflicting paradigms: functional and OO

const personSpeak = person.speak.bind(person); // bind refers an object so "this" works inside Person scope
personSpeak();