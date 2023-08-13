class Person1 {
    #name;
    constructor(firstName, lastName) {
        this.#name = firstName;
        this.family = lastName;
    }

    bark() {
        return "barkkkkk!";
    }

    get name(){
        return this.#name;
    }
}

let p2 = new Person1("erfan", "sharafi");

console.log(p2.name);

