const mySelecet = document.getElementById("selc");
const result = document.getElementsByClassName("result")[0];


mySelecet.onchange = function () {
    result.innerHTML = this.value;
}