(function () {
    console.log("Wellcome");
})();

(function () {
    let fistName = "Erfan";
})();

let result = (function () {
    let fistName = "Erfan";
    return fistName;
})();

console.log(result);

(function (fistName) {
    console.log("My Name is " + fistName);
})(result);