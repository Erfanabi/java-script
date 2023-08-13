let arr = [1, 4, 7, 10, , 15, 19, 20];


// let result = arr.every(item => item % 2 === 0);

let result = arr.every(item => !isNaN(item));


console.log(result);