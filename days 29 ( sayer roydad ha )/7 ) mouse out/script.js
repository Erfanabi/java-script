const divTest = document.getElementById("test");

divTest.onmouseout = function () {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);

    this.style.backgroundColor = `rgb(${red},${green},${blue})`;
}

// divTest.onmouseleave = function () {
//     let red = Math.floor(Math.random() * 256);
//     let green = Math.floor(Math.random() * 256);
//     let blue = Math.floor(Math.random() * 256);

//     this.style.backgroundColor = `rgb(${red},${green},${blue})`;
// }
