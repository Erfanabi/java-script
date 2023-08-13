class Employee {
    constructor(firstName, lastName, yearsWorked) {
        this.name = firstName;
        this.family = lastName;
        this.years = yearsWorked;
    }
}

let p1 = new Employee("Erfan", "sharafi", 5);
let p2 = new Employee("Reza", "sabery", 12);
let p3 = new Employee("jafar", "rahimi", 8);

let nameEmployee = [p1.name, p2.name, p3.name];
let employ = [p1, p2, p3];

Employee.prototype.printBio = function () {
    return `first name is ${this.name}\nlast name is ${this.family}\nworks year ${this.years}`;
}

// p1.printBio();

for (let arr of employ) {
    console.log(arr.printBio());
}
