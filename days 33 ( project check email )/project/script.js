const myInput = document.getElementsByTagName("input")[0];
const myButton = document.getElementsByTagName("button")[0];

let myPattern = /^([a-zA-Z0-9._-]+\@(gmail)\.(com))$/g;

myInput.addEventListener("keyup", function () {
    let myMail = myInput.value;
    let regex = myMail.match(myPattern);
    if (regex == null) {
        myInput.style.backgroundColor = "red";
    } else {
        myInput.style.backgroundColor = "green";
    }
})


myButton.addEventListener("click", function () {
    let myMail = myInput.value;
    regex = myMail.match(myPattern);
    if (regex == null) {
        alert("not found");
    } else {
        alert("thats right");
    }
})