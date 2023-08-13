
const target = document.getElementById("tst");
// const target = document.querySelector("#tst");

const changeColor = function () {
    if (target.style.backgroundColor == "black") {
        target.style.backgroundColor = "blue";
    } else {
        target.style.backgroundColor = "black";
    }
}

function toggleShow() {
    if (target.style.display == "block") {
        target.style.display = "none";
    } else {
        target.style.display = "block";
    }
}

