
(function () {
    console.log("IIFE");
})();


(function (num) {
    console.log(num * 5);
})(5);


((name) => {
    console.log(name + name);
})("erfan ");

