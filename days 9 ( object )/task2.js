let people = {
    friends: []
}

let obj1 = {
    firstName: "Erfan",
    lastName: "Sharafi",
    id: 125
}

let obj2 = {
    firstName: "Reza",
    lastName: "Ahmadi",
    id: 125
}

let obj3 = {
    firstName: "Ali",
    lastName: "Sabori",
    id: 125
}


// people.friends[0] = obj1;
people.friends.push(obj1, obj2, obj3);


console.log(people.friends[0].lastName)