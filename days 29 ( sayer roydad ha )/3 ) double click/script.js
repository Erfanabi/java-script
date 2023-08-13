const divTest = document.querySelector("#test");

divTest.ondblclick = function () {
    this.style.display = "none";
}

// divTest.addEventListener("dblclick", function () {
//     divTest.style.backgroundColor = "red";
// });



function none(divTest) {
    divTest.style.backgroundColor = "red";
}
