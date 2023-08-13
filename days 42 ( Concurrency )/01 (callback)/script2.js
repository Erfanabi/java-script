
function judge(temp) {
    if (temp > 30 && temp <= 50) {
        console.log("very well")
    }
    else if (temp <= 70) {
        console.log("Normal temp")
    }
    else if (temp <= 80) {
        console.log("High temp")
    }
    else if (temp > 80) {
        console.log("danger temp")
    }
}

function getTemp(kelvin, callBack) {
    let cell = kelvin - 273;
    callBack(cell);
}


getTemp(300, judge);