function test(num1, num2, num3) {
    console.log(arguments);

    console.log(arguments[2]);
    console.log(arguments[arguments.length - 1]);
}


test(5, 12, 2, "hello", true);