// const test = document.getElementById("test");


// window.addEventListener("resize", function () {
//     test.innerText = `size : ${window.innerWidth}px 
//     height : ${window.innerHeight}px`;
// });

// test.innerText = `size : ${window.innerWidth}px
// height : ${window.innerHeight}px`;

// console.log(window.screen);
// console.log(window.screen.width);
// console.log(window.screen.height);
// console.log(window.innerWidth);



const backBtn = document.getElementById("back");
const forwardBtn = document.getElementById("forward");


backBtn.addEventListener("click", () => {
    window.history.back();
})

forwardBtn.addEventListener("click", () => {
    window.history.forward();
})

console.log(window.history);
