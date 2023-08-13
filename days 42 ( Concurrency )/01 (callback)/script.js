


function test(callBack) {
    console.log("after callback");
    callBack();
    console.log("befor callback");
}

function sayHello() {
    console.log("hello");
}


test(sayHello);