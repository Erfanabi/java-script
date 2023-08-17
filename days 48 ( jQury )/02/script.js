// $(document).ready(function () {
//     console.log("ready");
// })


// $(window).on("load", loadHandler);

// function loadHandler() {
//     console.log("Load...");
// }



// $(window).on("resize", resizeHandler);

// function resizeHandler() {
//     console.log("resize...");
// }



// $(window).on("scroll", resizeHandler);

// function resizeHandler() {
//     console.log("scroll...");
// }



// $(document).ready(function () {
//     $("img").on("click", clickfunc)
// })

// function clickfunc() {
//     $(this).attr("title", "my ss")
// }


// $(document).ready(function () {
//     $("img").click(function () {
//         $(this).attr("title", "my ss");
//     })
// })



const image = document.getElementById("image");

console.log(image.getAttribute("title"));

image.addEventListener("click", function () {
    image.setAttribute("title", "tamam zendegim")
})