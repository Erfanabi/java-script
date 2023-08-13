const nameInput = document.getElementById("input-name");
const familyInput = document.getElementById("input-family");
const btn = document.getElementById("submit");
const text = document.getElementsByClassName("para")[0];


btn.onclick = function () {
    let name = nameInput.value;
    let family = familyInput.value;
    let fol = `wellcome ${name} ${family}`;

    text.classList.remove("d-none");
    text.innerHTML = fol;
}
