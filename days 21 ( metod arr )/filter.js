let arr = [1, 4, 7, 10, , 15, 19, 20];

// let result = arr.filter((item, index) => {
//     return item % 2 == 0;
// })

// console.log(result);

let fil = arr.filter(test);

function test(item, index) {
    return item % 2 == 0;
}

console.log(fil);