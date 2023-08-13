
window.onkeydown = function (e) {
    console.log(String.fromCharCode(e.keyCode));

    switch (e.keyCode) {
        case 38:
            console.log("up");
            break;
        case 37:
            console.log("left");
            break;
        case 39:
            console.log("right");
            break;
        case 40:
            console.log("down");
            break;
    }
}