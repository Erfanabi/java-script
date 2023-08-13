// function addNumber(...param) {
//     console.log(param);
//     let sum = 0;
//     for (let i = 0; i < param.length; i++) {
//         sum += param[i];
//     }
//     console.log(sum);
// }

// function addNumber2(...param) {
//     console.log(param);
//     let sum = 0;
//     param.forEach(arr =>sum += arr);
//     console.log(sum);
// }




// addNumber2(5, 7, 8, 9, 4, 5, 6);


function arrSum(...number) {
    // console.log(number);
    number.forEach(name => console.log(name));
}


arrSum(5, 4, 8, 9, 5);