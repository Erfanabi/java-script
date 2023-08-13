
let conter = 0


function timer() {
    let selectSecond = prompt("Enter second!!");
    let mySetInterval = setInterval(() => {
        console.clear();
        conter++;
        if (conter >= selectSecond) {
            console.log(conter);
            clearInterval(mySetInterval);
        } else {
            console.log(conter);
        }
    }, 1000)

}

timer()

