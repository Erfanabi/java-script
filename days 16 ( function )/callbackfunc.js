
let myFunc = function () {
    console.log("myFunc");
};

function firtFunc(secenFunc) {
    secenFunc();
    console.log("firtFunc");
}

firtFunc(myFunc);