// BMI calculator
// BMI = Weight (kg) / Height (m)**2

let height = prompt("please enter your Height in cm");

const weight = prompt("please enter your Weight in kg");

height /= 100;

const bmi = weight / height ** 2;

console.log(`your BMI is ${bmi.toFixed(3)}`);
