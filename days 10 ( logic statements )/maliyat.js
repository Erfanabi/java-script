
let salary = Number(prompt("Enter your salary"));
let rsualt;

if (salary < 2000) {
    rsualt = salary;
    console.log(rsualt);
}
else if (salary >= 2000 && salary < 10000) {
    rsualt = salary - salary * (10 / 100);
    console.log(rsualt);
}
else {
    rsualt = salary - salary * (20 / 100);
    console.log(rsualt);
}