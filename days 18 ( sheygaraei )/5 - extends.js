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

}

let p1 = new Student("erfan", "sharafi");

console.log(p1.name);
console.log(p1);