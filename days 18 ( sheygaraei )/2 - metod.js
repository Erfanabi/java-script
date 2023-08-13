class Dog {
    constructor(color, wieght, height, name) {
        this.animalColor = color;
        this.animalWieght = wieght;
        this.animalHeight = height;
        this.animalName = name;
    }

    bark(){
        return "barkkkkk!";
    }

    tailWagging(){
        return "tailll!";
    }
}

let dog1 = new Dog("red", 20, 50, "lion");

console.log(dog1);
console.log(dog1.animalHeight);
console.log(dog1.bark());
