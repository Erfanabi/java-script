
// let myPromise = new Promise((resolve, reject) => {
//     let x = 0;
//     if (x == 0) {
//         resolve("correct");
//     }
//     else {
//         reject("error");
//     }
// });

// myPromise.then((message) => {
//     console.log(`resolve : ${message}`);
// }, (err) => {
//     console.log(`reject : ${err}`);
// });


// -------#--------

let myPromise = new Promise((resolve, reject) => {
    let x = 1;
    if (x == 0) {
        resolve("correct");
    }
    else {
        reject("error");
    }
})
    .then((data) => {
        console.log(data);
        return "very good"
    })
    .then((val) => {
        console.log("val");
    })
    .then(() => {
        console.log("com");
    })
    .catch((err) => {
        console.log(err);
    })
