const inputs = document.querySelectorAll(".input-container input");
const buttons = document.querySelectorAll(".select-for-another button");
const box1 = document.getElementById("box-1");
const box2 = document.getElementById("box-2");
const btnStart = document.getElementById("btn-start");
const btnCopy = document.getElementById("btn-copy");
const durationInput = document.getElementById("duration");
const durationSeconds = document.getElementById("duration-seconds");


let [p0, p1, p2, p3] = [1, 1, 1, 1];


for (let input of inputs) {
    input.addEventListener("keyup", function () {
        if (Number(inputs[0].value) > 1 || Number(inputs[2].value) > 1 || Number(inputs[0].value) < 0 || Number(inputs[2].value) < 0) {
            input.value = "";
        }
        else {
            p0 = Number(inputs[0].value);
            p1 = Number(inputs[1].value);
            p2 = Number(inputs[2].value);
            p3 = Number(inputs[3].value);
        }
    });
}

// console.log(p0, p1, p2, p3);

let myPatern = "linear";

for (let btn of buttons) {
    btn.addEventListener("click", function () {
        removeActive();
        btn.classList.add("btn-adctive");

        myPatern = btn.innerHTML;
        // console.log(myPatern);
    })
}

function removeActive() {
    for (let btn of buttons) {
        btn.classList.remove("btn-adctive");
    }
}

let flag = false;

btnStart.addEventListener("click", function () {
    console.log(second);

    box2.innerText = `${myPatern}`;
    box1.innerText = `cubic-bezier(${p0}, ${p1}, ${p2}, ${p3})`;
    box2.style.transition = `all ${second}s ${myPatern}`;
    box1.style.transition = `all ${second}s cubic-bezier(${p0}, ${p1}, ${p2}, ${p3})`;

    if (!flag) {
        box2.style.transform = "translateX(1000%)";
        box1.style.transform = "translateX(1000%)";

        flag = true;

    } else {
        box2.style.transform = "translateX(0)";
        box1.style.transform = "translateX(0)";

        flag = false;
    }

})


let second;
durationInput.addEventListener("change", function () {
    durationSeconds.childNodes[1].innerText = this.value;
    second = this.value;
})



btnCopy.addEventListener("click", function () {
    console.log(window.navigator.clipboard.writeText(`cubic-bezier(${p0}, ${p1}, ${p2}, ${p3})`));
})


