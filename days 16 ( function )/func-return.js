function myFunc() {
    let res = prompt("enter name : exit q");
    if (res === "q") {
        console.log("bye")
    } else {
        console.log(res);
        myFunc();
    }
}


myFunc();