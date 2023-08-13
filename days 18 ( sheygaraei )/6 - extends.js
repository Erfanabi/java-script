class Person1 {
    constructor(firstName, lastName) {
        this.name = firstName;
        this.family = lastName;
    }

    bark() {
        return "barkkkkk!";
    }
}

class Student extends Person1 {
    constructor(firstName, lastName, age) {
        super(firstName, lastName);
        this.howAge = age;
    }

    sayHellow(time){
        console.log(`hellow ${this.name}`)
        console.log(time)
    }
}

let p1 = new Student("erfan", "sharafi",20);

// console.log(p1.name);
// console.log(p1);
// console.log(p1.howAge);
p1.sayHellow(1020)
