const divTest = document.getElementById("test");

divTest.onmousemove = function () {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);

    this.style.backgroundColor = `rgb(${red},${green},${blue})`;
}

