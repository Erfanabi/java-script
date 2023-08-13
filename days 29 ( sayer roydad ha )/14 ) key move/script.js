const test = document.getElementById("test");

test.style.top = "300px";
test.style.left = "300px";

window.onkeydown = function (e) {
    // console.log(String.fromCharCode(e.keyCode));

    switch (e.keyCode) {
        case 38:
            moveY(-1);
            break;
        case 37:
            moveX(-1);
            break;
        case 39:
            moveX(+1);
            break;
        case 40:
            moveY(+1);
            break;
    }
}

function moveY(pos) {
    let y = Number(test.style.top.replace("px", ""));
    test.style.top = `${y + pos * 5}px`;
}

function moveX(pos) {
    let y = Number(test.style.left.replace("px", ""));
    test.style.left = `${y + pos * 5}px`;
}
