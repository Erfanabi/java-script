// object-orinted programing


let dog = {
    color: "gray",
    wieght: 50,
    height: 70,
    name: "dog"
}

// class Animal {
//     constructor(color, wieght, height, name) {
//         this.animalColor = color;
//         this.animalWieght = wieght;
//         this.animalHeight = height;
//         this.animalName = name;
//     }
// }

// let lion = new Animal("red", 20, 50, "lion");

// console.log(lion);
// console.log(dog);


function Animal(color, wieght, height, name) {
    this.Color = color;
    this.Wieght = wieght;
    this.Height = height;
    this.Name = name;
}

let lion = new Animal("red", 20, 50, "lion");

console.log(lion);
