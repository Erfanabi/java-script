const divTest = document.querySelector("#test");

divTest.onmousedown = function () {
  this.style.backgroundColor = "black";
};

divTest.onmouseup = function () {
  this.style.backgroundColor = "pink";
};
