

const target = document.getElementById("tst");


const btn = document.getElementsByTagName("button")[0];

// btn.addEventListener("click", function () {
//     // alert("helow");

//     this.style.backgroundColor="black";
//     this.style.color="white"
// })


btn.addEventListener("click", test)

function test() {
    // alert("helow");

    this.style.backgroundColor = "black";
    this.style.color = "white"
}