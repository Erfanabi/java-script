// let promise1 = new Promise((resolve, reject) => {
//     let x = 0;
//     if (x == 0) {
//         const person = {
//             name: "erfan",
//             family: "sharafi",
//             age: 20,
//         }

//         resolve(person);
//     }
//     else {
//         reject("error");
//     }
// })
//     .then(mes => console.log(mes))
//     .catch(err => console.log(err))

// ------#------

// let promise2 = Promise.resolve("promise 2 complate!");

// let promise3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("promise 3 complate!")
//     }, 3000);
// });

// // promise2.then(mes => console.log(mes));
// // promise3.then(mes => console.log(mes));


// Promise.all([promise2, promise3]).then(mes => console.log(mes));


// ------#------


// function getMessage(callBack) {
//     setTimeout(function () {
//         callBack("Hello Erfan");
//     }, 2000);
// }

// function myFunc(message) {
//     console.log(message);
// }

// getMessage(myFunc);

// function getMessage() {
//     return new Promise((resolve, reject) => {

//         setTimeout(function () {
//             resolve("Hello Erfan");
//         }, 2000);
//     })
// }

// function myFunc(message) {
//     console.log(message);
// }

// getMessage().then(myFunc);


// ------#------

function myFunc() {
    console.log("Hello Erfan");
}

setTimeout(myFunc, 2000);

console.log("1");
console.log("2");

