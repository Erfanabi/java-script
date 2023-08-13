// از کاربر یک عدد می گیره که  طول ارایه
// بعد به اندازه همون عدد دریافت می کنه 
// و تو ارایه می ریزه و اینارو با هم جمع می کنه


let lenght;
let array;

lenght = Number(prompt("Enter Lenght :"));
array = new Array();

let number;
let whatNumber = 1

while (lenght > 0) {
    number = Number(prompt(`Enter ${whatNumber} number:`));

    if (isNaN(number)) {
        continue;
    }
    else {
        array.push(number);
        lenght--
        whatNumber++
    }
}

// console.log(array);


let sum = 0;

// for (let i = 0; i < array.length; i++) {
//     sum = sum + array[i]
// }

for (let num of array) {
    sum = sum + num
}

console.log(sum);
