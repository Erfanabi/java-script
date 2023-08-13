// setTimeout(() => {
//     console.log("01");
// }, 5000)
// console.log("02");
// console.log("03");






let myPromise = new Promise((resolve, reject) => {
    let x = 0;
    if (x == 0) {
        const person = {
            name: "erfan",
            family: "sharafi",
            age: 20,
        }

        resolve(person);
    }
    else {
        reject("error");
    }
});


myPromise
    .then(message => console.log(message))
    .catch(err => console.log(err))


// myPromise.then((message) => {
//     console.log(message);
// }, (err) => {
//     console.log(`reject : ${err}`);
// });



