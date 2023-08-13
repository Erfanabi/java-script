// let item1 = document.getElementById("test1");
// item1.style.backgroundColor = "red";

// ----------------------------

// let item = document.getElementsByTagName("div")[2];
// item.style.backgroundColor="blue";

// let item = document.getElementsByTagName("div").item(2);
// item.style.backgroundColor="blue";

// ----------------------------

// let test = document.getElementsByClassName("item");
// console.log(test)

// test[0].style.backgroundColor="red";

// for(let arr of test){
//     arr.style.backgroundColor="red";
// }

// ----------------------------

// خروجی بصورت ارایه نیست بلکه اولین المان رو بر میگردونه
// let elm = document.querySelector("#test1");
// elm.style.backgroundColor = "blue"

// ----------------------------

// خروجی بصورت ارایه حتی اگر یکدونه باشه 

let elms = document.querySelectorAll(".item");
for (let arr of elms) {
    arr.style.backgroundColor = "red";
};

// document.querySelector(".item>p").style.backgroundColor = "black";
// document.querySelector(".item p").style.backgroundColor = "black";